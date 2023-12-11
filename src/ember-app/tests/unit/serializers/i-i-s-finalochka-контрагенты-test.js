import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-finalochka-контрагенты', 'Unit | Serializer | i-i-s-finalochka-контрагенты', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-finalochka-контрагенты',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-finalochka-сост-оплаты',
    'transform:i-i-s-finalochka-сост-поставок',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
