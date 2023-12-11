import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  этоУслуга: DS.attr('boolean'),
  единицыИзмер: DS.belongsTo('i-i-s-finalochka-единицы-измер', { inverse: null, async: false }),
  номенклатура: DS.belongsTo('i-i-s-finalochka-номенклатура', { inverse: null, async: false }),
  планЗакупок: DS.belongsTo('i-i-s-finalochka-план-закупок', { inverse: 'план', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-finalochka-план.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этоУслуга: {
    descriptionKey: 'models.i-i-s-finalochka-план.validations.этоУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  единицыИзмер: {
    descriptionKey: 'models.i-i-s-finalochka-план.validations.единицыИзмер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-finalochka-план.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  планЗакупок: {
    descriptionKey: 'models.i-i-s-finalochka-план.validations.планЗакупок.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланE', 'i-i-s-finalochka-план', {
    этоУслуга: attr('Это услуга', { index: 0 }),
    номенклатура: belongsTo('i-i-s-finalochka-номенклатура', '', {
      номенклатура: attr('', { index: 1 }),
      контрагенты: belongsTo('i-i-s-finalochka-контрагенты', '', {
        контрагент: attr('', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true }),
    единицыИзмер: belongsTo('i-i-s-finalochka-единицы-измер', '', {
      единицаИзмер: attr('', { index: 2 })
    }, { index: -1, hidden: true }),
    количество: attr('Количество', { index: 3 })
  });
};
