import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВыборВидаEnum from '../enums/i-i-s-kursovaya9-выбор-вида';

export default FlexberryEnum.extend({
  enum: ВыборВидаEnum,
  sourceType: 'IIS.Kursovaya9.ВыборВида'
});
