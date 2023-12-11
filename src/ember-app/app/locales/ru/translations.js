import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Finalochka',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Finalochka',
          title: 'Finalochka'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
