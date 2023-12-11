import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  организации: DS.belongsTo('i-i-s-finalochka-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-finalochka-склады', { inverse: null, async: false }),
  план: DS.hasMany('i-i-s-finalochka-план', { inverse: 'планЗакупок', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-finalochka-план-закупок.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-finalochka-план-закупок.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-finalochka-план-закупок.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  план: {
    descriptionKey: 'models.i-i-s-finalochka-план-закупок.validations.план.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланЗакупокE', 'i-i-s-finalochka-план-закупок', {
    датаНачала: attr('Дата начала', { index: 0 }),
    организации: belongsTo('i-i-s-finalochka-организации', '', {
      организация: attr('', { index: 1 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-finalochka-склады', '', {
      склад: attr('', { index: 2 })
    }, { index: -1, hidden: true }),
    план: hasMany('i-i-s-finalochka-план', 'План', {
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
    })
  });

  modelClass.defineProjection('ПланЗакупокL', 'i-i-s-finalochka-план-закупок', {
    датаНачала: attr('Дата начала', { index: 0 })
  });
};
