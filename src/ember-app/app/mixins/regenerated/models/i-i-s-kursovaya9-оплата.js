import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видОплаты: DS.attr('i-i-s-kursovaya9-тип-оплаты'),
  время: DS.attr('string'),
  дата: DS.attr('date'),
  печатьФото: DS.belongsTo('i-i-s-kursovaya9-печать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  видОплаты: {
    descriptionKey: 'models.i-i-s-kursovaya9-оплата.validations.видОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  время: {
    descriptionKey: 'models.i-i-s-kursovaya9-оплата.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya9-оплата.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  печатьФото: {
    descriptionKey: 'models.i-i-s-kursovaya9-оплата.validations.печатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-kursovaya9-оплата', {
    видОплаты: attr('Вид оплаты', { index: 0 }),
    время: attr('Время', { index: 1 }),
    дата: attr('Дата', { index: 2 })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-kursovaya9-оплата', {
    видОплаты: attr('Вид оплаты', { index: 0 }),
    время: attr('Время', { index: 1 }),
    дата: attr('Дата', { index: 2 })
  });
};
