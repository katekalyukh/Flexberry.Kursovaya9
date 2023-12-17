import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
        'application-name': 'Kursovaya9',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya9',
          title: 'Kursovaya9'
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
