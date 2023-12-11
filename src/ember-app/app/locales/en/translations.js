import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISFinalochkaЕдиницыИзмерLForm from './forms/i-i-s-finalochka-единицы-измер-l';
import IISFinalochkaЗаказПостLForm from './forms/i-i-s-finalochka-заказ-пост-l';
import IISFinalochkaКонтрагентыLForm from './forms/i-i-s-finalochka-контрагенты-l';
import IISFinalochkaНоменклатураLForm from './forms/i-i-s-finalochka-номенклатура-l';
import IISFinalochkaОрганизацииLForm from './forms/i-i-s-finalochka-организации-l';
import IISFinalochkaОтчетОЗакупкахLForm from './forms/i-i-s-finalochka-отчет-о-закупках-l';
import IISFinalochkaПланЗакупокLForm from './forms/i-i-s-finalochka-план-закупок-l';
import IISFinalochkaСкладыLForm from './forms/i-i-s-finalochka-склады-l';
import IISFinalochkaЕдиницыИзмерEForm from './forms/i-i-s-finalochka-единицы-измер-e';
import IISFinalochkaЗаказПостEForm from './forms/i-i-s-finalochka-заказ-пост-e';
import IISFinalochkaКонтрагентыEForm from './forms/i-i-s-finalochka-контрагенты-e';
import IISFinalochkaНоменклатураEForm from './forms/i-i-s-finalochka-номенклатура-e';
import IISFinalochkaОрганизацииEForm from './forms/i-i-s-finalochka-организации-e';
import IISFinalochkaОтчетОЗакупкахEForm from './forms/i-i-s-finalochka-отчет-о-закупках-e';
import IISFinalochkaПланЗакупокEForm from './forms/i-i-s-finalochka-план-закупок-e';
import IISFinalochkaСкладыEForm from './forms/i-i-s-finalochka-склады-e';
import IISFinalochkaЕдиницыИзмерModel from './models/i-i-s-finalochka-единицы-измер';
import IISFinalochkaЗаказПостModel from './models/i-i-s-finalochka-заказ-пост';
import IISFinalochkaКонтрагентыModel from './models/i-i-s-finalochka-контрагенты';
import IISFinalochkaНоменклатураModel from './models/i-i-s-finalochka-номенклатура';
import IISFinalochkaОрганизацииModel from './models/i-i-s-finalochka-организации';
import IISFinalochkaОтчетОЗакупкахModel from './models/i-i-s-finalochka-отчет-о-закупках';
import IISFinalochkaПланЗакупокModel from './models/i-i-s-finalochka-план-закупок';
import IISFinalochkaПланModel from './models/i-i-s-finalochka-план';
import IISFinalochkaСкладыModel from './models/i-i-s-finalochka-склады';
import IISFinalochkaТЧЗаказModel from './models/i-i-s-finalochka-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-finalochka-единицы-измер': IISFinalochkaЕдиницыИзмерModel,
    'i-i-s-finalochka-заказ-пост': IISFinalochkaЗаказПостModel,
    'i-i-s-finalochka-контрагенты': IISFinalochkaКонтрагентыModel,
    'i-i-s-finalochka-номенклатура': IISFinalochkaНоменклатураModel,
    'i-i-s-finalochka-организации': IISFinalochkaОрганизацииModel,
    'i-i-s-finalochka-отчет-о-закупках': IISFinalochkaОтчетОЗакупкахModel,
    'i-i-s-finalochka-план-закупок': IISFinalochkaПланЗакупокModel,
    'i-i-s-finalochka-план': IISFinalochkaПланModel,
    'i-i-s-finalochka-склады': IISFinalochkaСкладыModel,
    'i-i-s-finalochka-т-ч-заказ': IISFinalochkaТЧЗаказModel
  },

  'application-name': 'Finalochka',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Finalochka',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Finalochka',
          title: 'Finalochka'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        finalochka: {
          caption: 'Finalochka',
          title: 'Finalochka',
          'i-i-s-finalochka-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          },
          'i-i-s-finalochka-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-finalochka-отчет-о-закупках-l': {
            caption: 'Отчет о закупках',
            title: ''
          },
          'i-i-s-finalochka-заказ-пост-l': {
            caption: 'Заказ пост',
            title: ''
          },
          'i-i-s-finalochka-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-finalochka-единицы-измер-l': {
            caption: 'Единицы измер',
            title: ''
          },
          'i-i-s-finalochka-план-закупок-l': {
            caption: 'План закупок',
            title: ''
          },
          'i-i-s-finalochka-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-finalochka-единицы-измер-l': IISFinalochkaЕдиницыИзмерLForm,
    'i-i-s-finalochka-заказ-пост-l': IISFinalochkaЗаказПостLForm,
    'i-i-s-finalochka-контрагенты-l': IISFinalochkaКонтрагентыLForm,
    'i-i-s-finalochka-номенклатура-l': IISFinalochkaНоменклатураLForm,
    'i-i-s-finalochka-организации-l': IISFinalochkaОрганизацииLForm,
    'i-i-s-finalochka-отчет-о-закупках-l': IISFinalochkaОтчетОЗакупкахLForm,
    'i-i-s-finalochka-план-закупок-l': IISFinalochkaПланЗакупокLForm,
    'i-i-s-finalochka-склады-l': IISFinalochkaСкладыLForm,
    'i-i-s-finalochka-единицы-измер-e': IISFinalochkaЕдиницыИзмерEForm,
    'i-i-s-finalochka-заказ-пост-e': IISFinalochkaЗаказПостEForm,
    'i-i-s-finalochka-контрагенты-e': IISFinalochkaКонтрагентыEForm,
    'i-i-s-finalochka-номенклатура-e': IISFinalochkaНоменклатураEForm,
    'i-i-s-finalochka-организации-e': IISFinalochkaОрганизацииEForm,
    'i-i-s-finalochka-отчет-о-закупках-e': IISFinalochkaОтчетОЗакупкахEForm,
    'i-i-s-finalochka-план-закупок-e': IISFinalochkaПланЗакупокEForm,
    'i-i-s-finalochka-склады-e': IISFinalochkaСкладыEForm
  },

});

export default translations;
