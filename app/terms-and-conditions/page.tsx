import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "IPTVMine Pro Terms & Conditions — rules and guidelines for using our app and website.",
  alternates: { canonical: "https://iptvminepro.vercel.app/terms-and-conditions" },
  openGraph: {
    title: "Terms & Conditions | IPTVMine Pro",
    description: "Read the terms governing your use of IPTVMine Pro.",
    url: "https://iptvminepro.vercel.app/terms-and-conditions",
  },
};

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "usage-rules", title: "Website Usage Rules" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "user-responsibilities", title: "User Responsibilities" },
  { id: "third-party-content", title: "Third-Party Content" },
  { id: "service-availability", title: "Service Availability" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "account-security", title: "Account & Security" },
  { id: "modifications", title: "Modifications to Service" },
  { id: "governing-law", title: "Governing Law" },
];

export default function TermsAndConditions() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms and Conditions",
            url: "https://iptvminepro.vercel.app/terms-and-conditions",
            description: "IPTVMine Pro Terms and Conditions",
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
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using IPTVMine Pro."
        lastUpdated="June 2025"
        sections={sections}
      >
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the IPTVMine Pro application (&ldquo;App&rdquo;) and website (&ldquo;Site&rdquo;) operated by IPTVMine Pro (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By downloading, installing, or using the App or Site, you agree to be bound by these Terms.
        </p>
        <p>
          If you do not agree with any part of these Terms, you must not use IPTVMine Pro.
        </p>

        <h2 id="acceptance">Acceptance of Terms</h2>
        <p>
          By accessing or using IPTVMine Pro, you confirm that you:
        </p>
        <ul>
          <li>Are at least 13 years of age (or the minimum legal age in your jurisdiction).</li>
          <li>Have read, understood, and agree to these Terms.</li>
          <li>Agree to comply with all applicable local, national, and international laws and regulations.</li>
          <li>Accept that these Terms may be updated periodically, and continued use constitutes acceptance of the revised Terms.</li>
        </ul>

        <h2 id="usage-rules">Website Usage Rules</h2>
        <p>
          When using the IPTVMine Pro App or Site, you agree not to:
        </p>
        <ul>
          <li>Use the App or Site for any unlawful purpose or in violation of any applicable laws.</li>
          <li>Attempt to reverse-engineer, decompile, or disassemble any part of the App beyond what is permitted by open-source licenses where applicable.</li>
          <li>Interfere with or disrupt the integrity or performance of the App or any connected systems.</li>
          <li>Use the App to transmit malware, spam, or any harmful content.</li>
          <li>Circumvent any technical measures we implement to secure the App.</li>
          <li>Misrepresent your identity or affiliation with any person or entity.</li>
        </ul>

        <h2 id="intellectual-property">Intellectual Property</h2>
        <p>
          The IPTVMine Pro name, logo, source code (where proprietary), user interface design, and documentation are the intellectual property of their respective creators and are protected by applicable copyright, trademark, and other intellectual property laws.
        </p>
        <ul>
          <li>Open-source components of IPTVMine Pro are licensed under their respective open-source licenses (see the GitHub repository for details).</li>
          <li>You may not use the IPTVMine Pro name or branding to endorse or promote derivative products without written permission.</li>
          <li>Movie titles, posters, synopses, actor names, and other metadata displayed in the App belong to their respective copyright owners. IPTVMine Pro claims no ownership of such third-party content.</li>
          <li>IPTV channel streams accessed via M3U playlists are the property of their respective broadcasters and rights holders.</li>
        </ul>

        <h2 id="user-responsibilities">User Responsibilities</h2>
        <p>
          You are solely responsible for:
        </p>
        <ul>
          <li><strong style={{ color: "#fff" }}>Legal compliance:</strong> Ensuring that your use of the App complies with the copyright, broadcasting, and streaming laws of your country or region. Streaming content without proper authorization may be illegal in your jurisdiction.</li>
          <li><strong style={{ color: "#fff" }}>Provider content:</strong> The M3U playlist URLs and Vega extension sources you add to the App. IPTVMine Pro does not endorse, curate, or take responsibility for the content delivered by third-party providers.</li>
          <li><strong style={{ color: "#fff" }}>Device security:</strong> Maintaining the security of your device and the App&apos;s locally stored configuration data.</li>
          <li><strong style={{ color: "#fff" }}>Extensions:</strong> Any extensions you install. Third-party extensions are not developed or vetted by IPTVMine Pro.</li>
        </ul>
        <p>
          Information provided through IPTVMine Pro is for informational and entertainment discovery purposes only. We make no guarantees about the accuracy, legality, or availability of any content accessed through the App.
        </p>

        <h2 id="third-party-content">Third-Party Content</h2>
        <p>
          IPTVMine Pro is a platform that aggregates and displays content from third-party providers configured by the user. We do not host, produce, or control the video streams, metadata, or other content delivered by these providers.
        </p>
        <ul>
          <li>The availability of third-party content is not guaranteed and may change at any time without notice.</li>
          <li>We are not responsible for the accuracy, legality, or quality of content from third-party providers.</li>
          <li>Third-party content providers are subject to their own terms of service and privacy policies.</li>
          <li>Links to external websites do not constitute endorsement of those sites or their content.</li>
          <li>Metadata (e.g. movie descriptions, posters) may be sourced from public databases such as TMDb and is provided under those platforms&apos; respective terms.</li>
        </ul>

        <h2 id="service-availability">Service Availability</h2>
        <p>
          IPTVMine Pro is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis. We do not guarantee:
        </p>
        <ul>
          <li>Continuous, uninterrupted access to the App or website.</li>
          <li>That the App will be free from bugs, errors, or security vulnerabilities at all times.</li>
          <li>That third-party provider streams or extension content will be available or functional.</li>
        </ul>
        <p>
          We reserve the right to suspend, modify, or discontinue the App or any feature at any time without prior notice or liability.
        </p>

        <h2 id="limitation-of-liability">Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, IPTVMine Pro and its contributors shall not be liable for:
        </p>
        <ul>
          <li>Any indirect, incidental, special, consequential, or punitive damages.</li>
          <li>Loss of profits, data, goodwill, or other intangible losses.</li>
          <li>Damages resulting from your use of or inability to use the App.</li>
          <li>Unauthorized access to or alteration of your data.</li>
          <li>Any content obtained through the App from third-party providers.</li>
          <li>Legal consequences arising from your use of copyrighted or unauthorized content through the App.</li>
        </ul>
        <p>
          Our total liability in any matter arising from these Terms shall not exceed the amount you paid for the App (which, being free and open-source, is zero).
        </p>

        <h2 id="account-security">Account &amp; Security</h2>
        <p>
          IPTVMine Pro does not currently require user accounts. All configuration is stored locally on your device. However:
        </p>
        <ul>
          <li>You are responsible for maintaining the security of your device.</li>
          <li>Provider URLs that include authentication tokens should be treated as confidential credentials.</li>
          <li>If we introduce account features in future versions, separate terms will apply.</li>
        </ul>

        <h2 id="modifications">Modifications to Service</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be:
        </p>
        <ul>
          <li>Posted on this page with an updated &ldquo;Last Updated&rdquo; date.</li>
          <li>Announced in the App&apos;s release notes for significant changes.</li>
        </ul>
        <p>
          Your continued use of IPTVMine Pro after changes are posted constitutes your acceptance of the revised Terms. If you do not agree to the updated Terms, you must stop using the App.
        </p>

        <h2 id="governing-law">Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with applicable laws. As IPTVMine Pro is an open-source project with a global user base:
        </p>
        <ul>
          <li>You agree to comply with the laws of your local jurisdiction when using the App.</li>
          <li>Any disputes arising from these Terms should first be addressed by contacting us directly.</li>
          <li>If legal proceedings are necessary, the applicable jurisdiction will be determined by the location of the project maintainers at the time of the dispute.</li>
        </ul>
        <p>
          If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force.
        </p>

        <p style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.07)", color: "var(--text-faint)", fontSize: "0.875rem" }}>
          Questions about these Terms? Contact us at <a href="mailto:legal@iptvminepro.app">legal@iptvminepro.app</a>
        </p>
      </LegalPage>
    </>
  );
}
