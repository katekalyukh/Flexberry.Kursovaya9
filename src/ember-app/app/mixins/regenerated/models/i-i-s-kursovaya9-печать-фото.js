import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видФото: DS.attr('i-i-s-kursovaya9-выбор-вида'),
  количество: DS.attr('number'),
  номерЗаказа: DS.attr('number'),
  носитель: DS.attr('i-i-s-kursovaya9-вид-носителя'),
  фотокиоск: DS.belongsTo('i-i-s-kursovaya9-фотокиоск', { inverse: null, async: false }),
  коррекция: DS.hasMany('i-i-s-kursovaya9-коррекция', { inverse: 'печатьФото', async: false })
});

export let ValidationRules = {
  видФото: {
    descriptionKey: 'models.i-i-s-kursovaya9-печать-фото.validations.видФото.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-kursovaya9-печать-фото.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-kursovaya9-печать-фото.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  носитель: {
    descriptionKey: 'models.i-i-s-kursovaya9-печать-фото.validations.носитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фотокиоск: {
    descriptionKey: 'models.i-i-s-kursovaya9-печать-фото.validations.фотокиоск.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  коррекция: {
    descriptionKey: 'models.i-i-s-kursovaya9-печать-фото.validations.коррекция.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПечатьФотоE', 'i-i-s-kursovaya9-печать-фото', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    носитель: attr('Носитель', { index: 1 }),
    видФото: attr('Фото', { index: 2 }),
    количество: attr('Количество', { index: 3 }),
    коррекция: hasMany('i-i-s-kursovaya9-коррекция', 'Коррекция', {
      кадрирование: attr('Кадрирование', { index: 0 }),
      чБЦвет: attr('Ч б цвет', { index: 1 })
    })
  });

  modelClass.defineProjection('ПечатьФотоL', 'i-i-s-kursovaya9-печать-фото', {
    номерЗаказа: attr('Номер заказа', { index: 0 }),
    носитель: attr('Носитель', { index: 1 }),
    количество: attr('Количество', { index: 2 }),
    видФото: attr('Фото', { index: 3 })
  });
};
