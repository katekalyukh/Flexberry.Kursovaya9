import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya9ОплатаLForm from './forms/i-i-s-kursovaya9-оплата-l';
import IISKursovaya9ПечатьФотоLForm from './forms/i-i-s-kursovaya9-печать-фото-l';
import IISKursovaya9ФотокиоскLForm from './forms/i-i-s-kursovaya9-фотокиоск-l';
import IISKursovaya9ОплатаEForm from './forms/i-i-s-kursovaya9-оплата-e';
import IISKursovaya9ПечатьФотоEForm from './forms/i-i-s-kursovaya9-печать-фото-e';
import IISKursovaya9ФотокиоскEForm from './forms/i-i-s-kursovaya9-фотокиоск-e';
import IISKursovaya9КоррекцияModel from './models/i-i-s-kursovaya9-коррекция';
import IISKursovaya9ОплатаModel from './models/i-i-s-kursovaya9-оплата';
import IISKursovaya9ПечатьФотоModel from './models/i-i-s-kursovaya9-печать-фото';
import IISKursovaya9ФотокиоскModel from './models/i-i-s-kursovaya9-фотокиоск';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya9-коррекция': IISKursovaya9КоррекцияModel,
    'i-i-s-kursovaya9-оплата': IISKursovaya9ОплатаModel,
    'i-i-s-kursovaya9-печать-фото': IISKursovaya9ПечатьФотоModel,
    'i-i-s-kursovaya9-фотокиоск': IISKursovaya9ФотокиоскModel
  },

  'application-name': 'Kursovaya9',

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
        'application-name': 'Kursovaya9',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya9',
          title: 'Kursovaya9'
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
        kursovaya9: {
          caption: 'Kursovaya9',
          title: 'Kursovaya9',
          'i-i-s-kursovaya9-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-kursovaya9-печать-фото-l': {
            caption: 'Печать фото',
            title: ''
          },
          'i-i-s-kursovaya9-фотокиоск-l': {
            caption: 'Фотокиоск',
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
    'i-i-s-kursovaya9-оплата-l': IISKursovaya9ОплатаLForm,
    'i-i-s-kursovaya9-печать-фото-l': IISKursovaya9ПечатьФотоLForm,
    'i-i-s-kursovaya9-фотокиоск-l': IISKursovaya9ФотокиоскLForm,
    'i-i-s-kursovaya9-оплата-e': IISKursovaya9ОплатаEForm,
    'i-i-s-kursovaya9-печать-фото-e': IISKursovaya9ПечатьФотоEForm,
    'i-i-s-kursovaya9-фотокиоск-e': IISKursovaya9ФотокиоскEForm
  },

});

export default translations;
