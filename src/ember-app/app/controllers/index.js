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
          caption: i18n.t('forms.application.sitemap.kursovaya9.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya9.title'),
          children: [{
            link: 'i-i-s-kursovaya9-оплата-l',
            caption: i18n.t('forms.application.sitemap.kursovaya9.i-i-s-kursovaya9-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya9.i-i-s-kursovaya9-оплата-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-kursovaya9-печать-фото-l',
            caption: i18n.t('forms.application.sitemap.kursovaya9.i-i-s-kursovaya9-печать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya9.i-i-s-kursovaya9-печать-фото-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-kursovaya9-фотокиоск-l',
            caption: i18n.t('forms.application.sitemap.kursovaya9.i-i-s-kursovaya9-фотокиоск-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya9.i-i-s-kursovaya9-фотокиоск-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})