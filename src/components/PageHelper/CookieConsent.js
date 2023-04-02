import 'vanilla-cookieconsent';
import { useRouter } from 'next/router';

export default function CookieConsent() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // eslint-disable-next-line no-undef
  const cc = initCookieConsent();

  window.openContactFrom = () => {
    router.push('/kontakt');
    cc.hideSettings();
  };

  window.goToPrivacy = () => {
    router.push('/datenschutz');
    cc.hideSettings();
  };

  cc.run({
    autorun: true,
    current_lang: 'de',
    autoclear_cookies: true, // default: false
    page_scripts: true, // default: false
    force_consent: true,
    hide_from_bots: true,

    gui_options: {
      consent_modal: {
        layout: 'cloud', // box/cloud/bar
        position: 'bottom center', // bottom/middle/top + left/right/center
        transition: 'slide', // zoom/slide
      },
      settings_modal: {
        layout: 'box', // box/bar
        transition: 'slide', // zoom/slide
      },
    },
    languages: {
      de: {
        consent_modal: {
          title: 'Wir verwenden Cookies 🍪',
          description: 'Hallo! Diese Website verwendet essenzielle Cookies, um ihren ordnungsgemäßen Betrieb zu gewährleisten, und Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden nur nach Zustimmung gesetzt. <button type="button" data-cc="c-settings" class="cc-link">Anpassen</button>',
          primary_btn: {
            text: 'Alle akzeptieren',
            role: 'accept_all', // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: 'Alle ablehnen',
            role: 'accept_necessary', // 'settings' or 'accept_necessary'
          },
        },
        settings_modal: {
          title: 'Cookie Einstellungen',
          save_settings_btn: 'Einstellungen speichern',
          accept_all_btn: 'Alle akzeptieren',
          reject_all_btn: 'Alle ablehnen',
          close_btn_label: 'Schließen',
          cookie_table_headers: [
            { col1: 'Name' },
            { col2: 'Domain' },
            { col3: 'Ablaufdatum' },
            { col4: 'Beschreibung' },
          ],
          blocks: [
            {
              title: 'Cookie Verwendung 📢',
              description: 'Wir verwenden Cookies, um die grundlegenden Funktionen der Website zu gewährleisten und um Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie sich an- oder abmelden möchten. Für weitere Einzelheiten zu Cookies und anderen sensiblen Daten lesen Sie bitte die vollständige&nbsp;<a href="javascript:goToPrivacy()" class="cc-link">Datenschutzerklärung</a>.',
            }, {
              title: 'Streng notwendige Cookies',
              description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren meiner Website unerlässlich. Ohne diese Cookies würde die Website nicht richtig funktionieren',
              toggle: {
                value: 'necessary',
                enabled: true,
                readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
              },
            }, {
              title: 'Leistungs- und Analyse-Cookies',
              description: 'Diese Cookies ermöglichen es der Website, sich an die von Ihnen in der Vergangenheit getroffenen Auswahlen zu erinnern',
              toggle: {
                value: 'analytics', // your cookie category
                enabled: false,
                readonly: false,
              },
              cookie_table: [ // list of all expected cookies
                {
                  col1: '^_ga', // match all cookies starting with "_ga"
                  col2: 'google.com',
                  col3: '2 years',
                  col4: 'description ...',
                  is_regex: true,
                },
                {
                  col1: '_gid',
                  col2: 'google.com',
                  col3: '1 day',
                  col4: 'description ...',
                },
              ],
            }, {
              title: 'Cookies für Werbung und Zielgruppenansprache',
              description: 'Diese Cookies sammeln Informationen darüber, wie Sie die Website nutzen, welche Seiten Sie besucht und welche Links Sie angeklickt haben. Alle Daten sind anonymisiert und können nicht verwendet werden, um Sie zu identifizieren',
              toggle: {
                value: 'targeting',
                enabled: false,
                readonly: false,
              },
            }, {
              title: 'Mehr Informationen',
              description: 'Bei Fragen zu unserer Politik in Bezug auf Cookies und Ihre Wahlmöglichkeiten <a class="cc-link" href="javascript:openContactFrom()">wenden Sie sich bitte an uns</a>.',
            },
          ],
        },
      },
    },
  });

  return (<> </>);
}
