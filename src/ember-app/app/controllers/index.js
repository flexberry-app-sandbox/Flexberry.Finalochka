import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.finalochka.caption'),
          title: i18n.t('forms.application.sitemap.finalochka.title'),
          children: [{
            link: 'i-i-s-finalochka-номенклатура-l',
            caption: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-номенклатура-l.caption'),
            title: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-номенклатура-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-finalochka-организации-l',
            caption: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-организации-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-finalochka-отчет-о-закупках-l',
            caption: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-отчет-о-закупках-l.caption'),
            title: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-отчет-о-закупках-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-finalochka-заказ-пост-l',
            caption: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-заказ-пост-l.caption'),
            title: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-заказ-пост-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-finalochka-склады-l',
            caption: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-склады-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-finalochka-единицы-измер-l',
            caption: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-единицы-измер-l.caption'),
            title: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-единицы-измер-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-finalochka-план-закупок-l',
            caption: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-план-закупок-l.caption'),
            title: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-план-закупок-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-finalochka-контрагенты-l',
            caption: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-контрагенты-l.caption'),
            title: i18n.t('forms.application.sitemap.finalochka.i-i-s-finalochka-контрагенты-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})