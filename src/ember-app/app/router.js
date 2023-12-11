import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-finalochka-единицы-измер-l');
  this.route('i-i-s-finalochka-единицы-измер-e',
  { path: 'i-i-s-finalochka-единицы-измер-e/:id' });
  this.route('i-i-s-finalochka-единицы-измер-e.new',
  { path: 'i-i-s-finalochka-единицы-измер-e/new' });
  this.route('i-i-s-finalochka-заказ-пост-l');
  this.route('i-i-s-finalochka-заказ-пост-e',
  { path: 'i-i-s-finalochka-заказ-пост-e/:id' });
  this.route('i-i-s-finalochka-заказ-пост-e.new',
  { path: 'i-i-s-finalochka-заказ-пост-e/new' });
  this.route('i-i-s-finalochka-контрагенты-l');
  this.route('i-i-s-finalochka-контрагенты-e',
  { path: 'i-i-s-finalochka-контрагенты-e/:id' });
  this.route('i-i-s-finalochka-контрагенты-e.new',
  { path: 'i-i-s-finalochka-контрагенты-e/new' });
  this.route('i-i-s-finalochka-номенклатура-l');
  this.route('i-i-s-finalochka-номенклатура-e',
  { path: 'i-i-s-finalochka-номенклатура-e/:id' });
  this.route('i-i-s-finalochka-номенклатура-e.new',
  { path: 'i-i-s-finalochka-номенклатура-e/new' });
  this.route('i-i-s-finalochka-организации-l');
  this.route('i-i-s-finalochka-организации-e',
  { path: 'i-i-s-finalochka-организации-e/:id' });
  this.route('i-i-s-finalochka-организации-e.new',
  { path: 'i-i-s-finalochka-организации-e/new' });
  this.route('i-i-s-finalochka-отчет-о-закупках-l');
  this.route('i-i-s-finalochka-отчет-о-закупках-e',
  { path: 'i-i-s-finalochka-отчет-о-закупках-e/:id' });
  this.route('i-i-s-finalochka-отчет-о-закупках-e.new',
  { path: 'i-i-s-finalochka-отчет-о-закупках-e/new' });
  this.route('i-i-s-finalochka-план-закупок-l');
  this.route('i-i-s-finalochka-план-закупок-e',
  { path: 'i-i-s-finalochka-план-закупок-e/:id' });
  this.route('i-i-s-finalochka-план-закупок-e.new',
  { path: 'i-i-s-finalochka-план-закупок-e/new' });
  this.route('i-i-s-finalochka-склады-l');
  this.route('i-i-s-finalochka-склады-e',
  { path: 'i-i-s-finalochka-склады-e/:id' });
  this.route('i-i-s-finalochka-склады-e.new',
  { path: 'i-i-s-finalochka-склады-e/new' });
});

export default Router;
