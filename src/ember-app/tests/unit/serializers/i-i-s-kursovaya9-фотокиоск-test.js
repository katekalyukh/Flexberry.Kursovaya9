import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya9-фотокиоск', 'Unit | Serializer | i-i-s-kursovaya9-фотокиоск', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya9-фотокиоск',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya9-вид-носителя',
    'transform:i-i-s-kursovaya9-выбор-вида',
    'transform:i-i-s-kursovaya9-тип-оплаты',

    'model:i-i-s-kursovaya9-коррекция',
    'model:i-i-s-kursovaya9-оплата',
    'model:i-i-s-kursovaya9-печать-фото',
    'model:i-i-s-kursovaya9-фотокиоск',
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
