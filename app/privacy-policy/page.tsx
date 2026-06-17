import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "IPTVMine Pro Privacy Policy — learn how we collect, use, and protect your data.",
  alternates: { canonical: "https://iptvminepro.vercel.app/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | IPTVMine Pro",
    description: "Learn how IPTVMine Pro handles your personal information.",
    url: "https://iptvminepro.vercel.app/privacy-policy",
  },
};

const sections = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "usage-information", title: "Usage Information" },
  { id: "search-history", title: "Search History" },
  { id: "cookies-analytics", title: "Cookies & Analytics" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "data-security", title: "Data Security" },
  { id: "user-rights", title: "Your Rights" },
  { id: "contact", title: "Contact Information" },
];

export default function PrivacyPolicy() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://iptvminepro.vercel.app/privacy-policy",
            description: "IPTVMine Pro Privacy Policy",
            publisher: {
              "@type": "Organization",
              name: "IPTVMine Pro",
              url: "https://iptvminepro.vercel.app",
            },
          }),
        }}
      />

      <LegalPage
        badge="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters. Here's exactly what we collect — and what we don't."
        lastUpdated="June 2025"
        sections={sections}
      >
        <p>
          This Privacy Policy describes how <strong style={{ color: "#fff" }}>IPTVMine Pro</strong> ("we", "us", or "our") handles information when you use our Android application and website. By using IPTVMine Pro, you agree to the practices described in this policy.
        </p>
        <p>
          <strong style={{ color: "var(--teal)" }}>We do not sell your personal data.</strong> We are committed to transparency about what limited information we interact with and how it stays under your control.
        </p>

        <h2 id="information-we-collect">Information We Collect</h2>
        <h3>Information You Provide</h3>
        <p>
          IPTVMine Pro operates primarily as a local application. We do not require account registration, and no personally identifiable information (name, email, phone number) is required to use the app.
        </p>
        <ul>
          <li>Provider URLs and playlist links you add are stored locally on your device only.</li>
          <li>Extension configurations and settings remain on your device.</li>
          <li>No signup, login, or user profile is required or collected.</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>
          Certain technical information may be automatically collected when the app interacts with third-party provider endpoints or our website:
        </p>
        <ul>
          <li>Device type and operating system version (for compatibility purposes).</li>
          <li>Crash reports and error logs (if crash reporting is enabled in your version).</li>
          <li>Network request metadata when fetching M3U playlists or extension manifests.</li>
        </ul>

        <h2 id="usage-information">Usage Information</h2>
        <p>
          IPTVMine Pro does not collect analytics or usage telemetry by default. Your streaming activity — which channels you watch, which movies you browse, and which providers you use — is not transmitted to us.
        </p>
        <ul>
          <li>Playback history and watch progress are stored locally on your device.</li>
          <li>Provider preferences and active extensions are saved locally via Android SharedPreferences.</li>
          <li>No usage data is sent to IPTVMine Pro servers.</li>
        </ul>

        <h2 id="search-history">Search History</h2>
        <p>
          Search queries you enter within IPTVMine Pro are processed locally on your device and used only to filter the content already loaded from your configured providers. Search history:
        </p>
        <ul>
          <li>May be stored temporarily in device memory during a session.</li>
          <li>Is not transmitted to external servers by IPTVMine Pro itself.</li>
          <li>Note: if your search query is forwarded to a third-party provider extension (e.g. a Vega extension's <code>getSearchPosts</code> function), that extension may make an external HTTP request containing your query to its own server. We have no control over those third-party provider servers.</li>
        </ul>

        <h2 id="cookies-analytics">Cookies &amp; Analytics</h2>
        <p>
          The IPTVMine Pro <strong>Android application</strong> does not use browser cookies. The IPTVMine Pro <strong>website</strong> (this page) may use:
        </p>
        <ul>
          <li>Essential cookies required for page functionality and security (e.g. Vercel hosting cookies).</li>
          <li>No advertising or tracking cookies.</li>
          <li>No third-party analytics platforms (Google Analytics, Meta Pixel, etc.) are currently embedded on this website.</li>
        </ul>
        <p>
          You can disable cookies in your browser settings without affecting the core functionality of this website.
        </p>

        <h2 id="third-party-services">Third-Party Services</h2>
        <p>
          IPTVMine Pro integrates with third-party services to provide content. These services have their own privacy policies, which we encourage you to review:
        </p>
        <ul>
          <li><strong style={{ color: "#fff" }}>IPTV Providers / M3U Playlist Hosts:</strong> When the app fetches your configured M3U playlist URLs, those servers may log your IP address and request headers.</li>
          <li><strong style={{ color: "#fff" }}>Vega-Compatible Extensions:</strong> Extensions are third-party JavaScript/TypeScript scrapers. When an extension fetches content, it communicates with the extension author's chosen website(s). IPTVMine Pro is not responsible for those servers' data practices.</li>
          <li><strong style={{ color: "#fff" }}>TMDb / IMDb / Metadata Providers:</strong> Movie and series metadata (titles, posters, synopses, cast information) may be sourced from public APIs such as The Movie Database (TMDb). Their respective privacy policies apply.</li>
          <li><strong style={{ color: "#fff" }}>External Links:</strong> This website and the app may contain links to third-party websites. Clicking these links will direct you away from IPTVMine Pro, and we are not responsible for those sites' privacy practices.</li>
        </ul>

        <h2 id="data-security">Data Security</h2>
        <p>
          We take reasonable steps to protect information. However, as IPTVMine Pro stores most data locally on your device:
        </p>
        <ul>
          <li>Your device's built-in security (screen lock, encryption) is the primary protection for locally stored settings.</li>
          <li>Provider URLs containing authentication tokens should be treated as sensitive — do not share your device's app data with untrusted parties.</li>
          <li>We use HTTPS for all network requests made by the app and website.</li>
          <li>No database of user accounts or personal data is maintained by IPTVMine Pro because we do not collect it.</li>
        </ul>

        <h2 id="user-rights">Your Rights</h2>
        <p>
          Since IPTVMine Pro does not collect personal data, most traditional data-subject rights (access, deletion, portability) are satisfied by the fact that all your data lives on your device and is under your direct control. Specifically:
        </p>
        <ul>
          <li><strong style={{ color: "#fff" }}>Access &amp; Deletion:</strong> Uninstalling the app removes all locally stored settings. Clearing the app's data in Android Settings achieves the same effect.</li>
          <li><strong style={{ color: "#fff" }}>Portability:</strong> Your provider list and settings can be exported via Android's backup features.</li>
          <li><strong style={{ color: "#fff" }}>Opt-out:</strong> No opt-out is needed for analytics or marketing because we do not conduct those activities.</li>
          <li>If you believe we have inadvertently collected personal data, please contact us and we will investigate and delete it promptly.</li>
        </ul>
        <p>
          Residents of the European Economic Area (EEA), California (CCPA), and other jurisdictions with specific data rights may contact us to exercise any applicable rights.
        </p>

        <h2 id="contact">Contact Information</h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:
        </p>
        <ul>
          <li>Email: <a href="mailto:privacy@iptvminepro.app">privacy@iptvminepro.app</a></li>
          <li>GitHub Issues: <a href="https://github.com/samyak/iptvmine-pro/issues" target="_blank" rel="noopener noreferrer">github.com/samyak/iptvmine-pro/issues</a></li>
        </ul>
        <p>
          We will respond to all legitimate privacy inquiries within 30 days.
        </p>
      </LegalPage>
    </>
  );
}
