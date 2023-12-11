import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-finalochka-единицы-измер', 'Unit | Model | i-i-s-finalochka-единицы-измер', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-finalochka-единицы-измер',
    'model:i-i-s-finalochka-заказ-пост',
    'model:i-i-s-finalochka-контрагенты',
    'model:i-i-s-finalochka-номенклатура',
    'model:i-i-s-finalochka-организации',
    'model:i-i-s-finalochka-отчет-о-закупках',
    'model:i-i-s-finalochka-план-закупок',
    'model:i-i-s-finalochka-план',
    'model:i-i-s-finalochka-склады',
    'model:i-i-s-finalochka-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
