import { Inter, Work_Sans } from 'next/font/google';
import cn from 'classnames';

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const work_sans = Work_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(work_sans.className, inter.variable)}>
        <Navigation />
        <main>{children}</main>
        <Footer />

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
      !(function (t, e) {
        var o, n, p, r;
        e.__SV ||
          ((window.posthog = e),
          (e._i = []),
          (e.init = function (i, s, a) {
            function g(t, e) {
              var o = e.split('.');
              2 == o.length && ((t = t[o[0]]), (e = o[1])),
                (t[e] = function () {
                  t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                });
            }
            ((p = t.createElement('script')).type = 'text/javascript'),
              (p.crossOrigin = 'anonymous'),
              (p.async = !0),
              (p.src =
                s.api_host.replace('.i.posthog.com', '-assets.i.posthog.com') +
                '/static/array.js'),
              (r = t.getElementsByTagName('script')[0]).parentNode.insertBefore(
                p,
                r,
              );
            var u = e;
            for (
              void 0 !== a ? (u = e[a] = []) : (a = 'posthog'),
                u.people = u.people || [],
                u.toString = function (t) {
                  var e = 'posthog';
                  return (
                    'posthog' !== a && (e += '.' + a), t || (e += ' (stub)'), e
                  );
                },
                u.people.toString = function () {
                  return u.toString(1) + '.people (stub)';
                },
                o =
                  'init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug'.split(
                    ' ',
                  ),
                n = 0;
              n < o.length;
              n++
            )
              g(u, o[n]);
            e._i.push([i, s, a]);
          }),
          (e.__SV = 1));
      })(document, window.posthog || []);

      posthog.init('phc_5ZGtG1BzmZ7JgZACzYhO09CHQVLvJzMBvGiFSPNuZJ5', {
        api_host: 'https://eu.i.posthog.com',
        person_profiles: 'always',
        persistence: 'cookie', // localStorage+cookie değil
        cross_subdomain_cookie: true,
        capture_pageview: false,
        session_recording: {
          recordCrossOriginIframes: true,
        },
      });
        `,
          }}
        />
      </body>
    </html>
  );
}
