import { Serializer as ЗаказПостSerializer } from
  '../mixins/regenerated/serializers/i-i-s-finalochka-заказ-пост';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказПостSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
