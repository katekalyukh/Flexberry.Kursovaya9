import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидНосителяEnum from '../enums/i-i-s-kursovaya9-вид-носителя';

export default FlexberryEnum.extend({
  enum: ВидНосителяEnum,
  sourceType: 'IIS.Kursovaya9.ВидНосителя'
});
