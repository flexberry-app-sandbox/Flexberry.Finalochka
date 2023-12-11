import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостПоставокEnum from '../enums/i-i-s-finalochka-сост-поставок';

export default FlexberryEnum.extend({
  enum: СостПоставокEnum,
  sourceType: 'IIS.Finalochka.СостПоставок'
});
