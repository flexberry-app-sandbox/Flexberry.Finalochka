import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номенклатура: DS.attr('string'),
  контрагенты: DS.belongsTo('i-i-s-finalochka-контрагенты', { inverse: null, async: false })
});

export let ValidationRules = {
  номенклатура: {
    descriptionKey: 'models.i-i-s-finalochka-номенклатура.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-finalochka-номенклатура.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменклатураE', 'i-i-s-finalochka-номенклатура', {
    номенклатура: attr('Номенклатура', { index: 0 }),
    контрагенты: belongsTo('i-i-s-finalochka-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 1 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('НоменклатураL', 'i-i-s-finalochka-номенклатура', {
    номенклатура: attr('Номенклатура', { index: 0 })
  });
};
