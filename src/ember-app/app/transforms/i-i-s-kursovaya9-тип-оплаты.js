import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипОплатыEnum from '../enums/i-i-s-kursovaya9-тип-оплаты';

export default FlexberryEnum.extend({
  enum: ТипОплатыEnum,
  sourceType: 'IIS.Kursovaya9.ТипОплаты'
});
