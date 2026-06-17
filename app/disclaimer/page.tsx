import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "IPTVMine Pro Disclaimer — important information about content ownership, third-party sources, and liability.",
  alternates: { canonical: "https://iptvminepro.vercel.app/disclaimer" },
  openGraph: {
    title: "Disclaimer | IPTVMine Pro",
    description:
      "Important disclaimers about content ownership and liability for IPTVMine Pro.",
    url: "https://iptvminepro.vercel.app/disclaimer",
  },
};

const sections = [
  { id: "general", title: "General Disclaimer" },
  { id: "accuracy", title: "Accuracy Disclaimer" },
  { id: "third-party-content", title: "Third-Party Content" },
  { id: "external-links", title: "External Links" },
  { id: "availability", title: "Availability Disclaimer" },
  { id: "no-professional-advice", title: "No Professional Advice" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
];

export default function Disclaimer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Disclaimer",
            url: "https://iptvminepro.vercel.app/disclaimer",
            description: "IPTVMine Pro Disclaimer",
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
        title="Disclaimer"
        subtitle="Important information about what IPTVMine Pro is — and what it isn't."
        lastUpdated="June 2025"
        sections={sections}
      >
        <p>
          Please read this Disclaimer carefully before using the IPTVMine Pro application (&ldquo;App&rdquo;) or website (&ldquo;Site&rdquo;). By using IPTVMine Pro, you acknowledge that you have read, understood, and agree to the terms of this Disclaimer.
        </p>

        {/* Key callout */}
        <div style={{
          background: "rgba(0,229,199,0.06)",
          border: "1px solid rgba(0,229,199,0.2)",
          borderRadius: 12,
          padding: "1.25rem 1.5rem",
          marginBottom: "1.5rem",
        }}>
          <p style={{ color: "var(--teal)", fontWeight: 600, margin: "0 0 0.5rem", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: 7 }}>
            <Zap size={15} strokeWidth={2.2} />
            Key Points
          </p>
          <ul style={{ margin: 0 }}>
            <li style={{ color: "var(--text-dim)", fontSize: "0.875rem", marginBottom: "0.4rem", paddingLeft: "1.25rem", position: "relative" }}>
              <ArrowRight size={13} style={{ position: "absolute", left: 0, top: 3, color: "var(--teal)" }} />
              IPTVMine Pro does not own, host, or produce any movie, TV show, channel, or metadata content.
            </li>
            <li style={{ color: "var(--text-dim)", fontSize: "0.875rem", marginBottom: "0.4rem", paddingLeft: "1.25rem", position: "relative" }}>
              <ArrowRight size={13} style={{ position: "absolute", left: 0, top: 3, color: "var(--teal)" }} />
              All content is sourced from third-party providers configured by the user.
            </li>
            <li style={{ color: "var(--text-dim)", fontSize: "0.875rem", paddingLeft: "1.25rem", position: "relative" }}>
              <ArrowRight size={13} style={{ position: "absolute", left: 0, top: 3, color: "var(--teal)" }} />
              IPTVMine Pro is an information and discovery platform only.
            </li>
          </ul>
        </div>

        <h2 id="general">General Information Disclaimer</h2>
        <p>
          IPTVMine Pro is an <strong style={{ color: "#fff" }}>Android application and information platform</strong> designed to help users organize, discover, and access streaming content from providers they configure themselves. The App functions as a technical interface between the user and their chosen content providers.
        </p>
        <ul>
          <li>IPTVMine Pro does not produce, commission, acquire rights to, host, upload, store, or transmit any audio-visual content.</li>
          <li>The App does not operate as a broadcaster, streaming service, or content distributor.</li>
          <li>All streams, channels, and media content accessed through the App originate from third-party servers and providers.</li>
          <li>Content ownership belongs entirely to the respective copyright holders — studios, broadcasters, networks, and other rights holders.</li>
        </ul>

        <h2 id="accuracy">Accuracy Disclaimer</h2>
        <p>
          While we strive to ensure that information provided by IPTVMine Pro is accurate and up-to-date, we make no warranties or representations regarding:
        </p>
        <ul>
          <li>The accuracy, completeness, or timeliness of movie or series metadata (titles, synopses, cast lists, release dates, ratings).</li>
          <li>The correctness of channel names, categories, or programme guide data sourced from M3U playlists.</li>
          <li>The reliability of information returned by third-party provider extensions.</li>
        </ul>
        <p>
          Metadata displayed in the App may be sourced from public databases such as <strong style={{ color: "#fff" }}>The Movie Database (TMDb)</strong>, <strong style={{ color: "#fff" }}>IMDb</strong>, or other third-party APIs. We are not responsible for errors, omissions, or outdated information in those databases.
        </p>
        <p>
          Any errors in displayed information should be reported to the relevant upstream data source, not IPTVMine Pro, as we have no ability to modify third-party databases.
        </p>

        <h2 id="third-party-content">Third-Party Content Disclaimer</h2>
        <p>
          IPTVMine Pro displays and provides access to content sourced entirely from third-party providers. We wish to make the following absolutely clear:
        </p>
        <ul>
          <li><strong style={{ color: "#fff" }}>We do not own any content.</strong> All movies, TV shows, live TV channels, sports streams, series, actors, cast information, images, posters, and related metadata belong to their respective copyright holders.</li>
          <li><strong style={{ color: "#fff" }}>We do not host any content.</strong> No video files, stream data, or media are stored on IPTVMine Pro servers. All media is served directly from the user&apos;s configured third-party providers.</li>
          <li><strong style={{ color: "#fff" }}>We are not responsible for third-party content.</strong> The legality, accuracy, quality, and availability of content provided by third-party sources (M3U playlists, Vega extensions, metadata APIs) is the sole responsibility of those sources.</li>
          <li><strong style={{ color: "#fff" }}>User responsibility.</strong> Users are responsible for ensuring that the third-party content they access through the App is legally authorized in their jurisdiction.</li>
          <li>Copyright holders and rights owners who believe their content is being accessed unlawfully through third-party providers should contact those providers directly, as IPTVMine Pro has no control over third-party content.</li>
        </ul>

        <h2 id="external-links">External Links Disclaimer</h2>
        <p>
          IPTVMine Pro, through provider extensions and M3U playlists, may facilitate connections to external websites and streaming servers. Regarding these external connections:
        </p>
        <ul>
          <li>IPTVMine Pro does not endorse, control, or take responsibility for the content of any external website or streaming server.</li>
          <li>External websites may have their own privacy policies, terms of service, and content standards, which we do not control.</li>
          <li>We are not responsible for the content, accuracy, safety, or privacy practices of external sites.</li>
          <li>Access to external streaming content does not imply any affiliation, partnership, or endorsement with the content providers.</li>
        </ul>

        <h2 id="availability">Availability Disclaimer</h2>
        <p>
          The availability of streaming content and App features cannot be guaranteed:
        </p>
        <ul>
          <li>Third-party streaming providers may change their URLs, restructure their websites, block certain geographic regions, or cease operations at any time. IPTVMine Pro extensions may stop working as a result.</li>
          <li>Live TV channels and streams provided via M3U playlists depend entirely on the playlist source — IPTVMine Pro cannot guarantee continuous stream availability.</li>
          <li>Features that depend on web scraping may be affected by website design changes at source providers, resulting in temporary unavailability of metadata or stream links.</li>
          <li>Geographic restrictions imposed by content providers are not circumvented by IPTVMine Pro.</li>
        </ul>

        <h2 id="no-professional-advice">No Professional Advice Disclaimer</h2>
        <p>
          Nothing on this website or within the IPTVMine Pro application constitutes:
        </p>
        <ul>
          <li><strong style={{ color: "#fff" }}>Legal advice.</strong> We are not lawyers. If you have questions about the legality of streaming specific content in your jurisdiction, please consult a qualified legal professional.</li>
          <li><strong style={{ color: "#fff" }}>Technical support for third-party providers.</strong> IPTVMine Pro can only assist with App-level issues. Problems with specific content providers should be directed to those providers.</li>
          <li><strong style={{ color: "#fff" }}>Financial or investment advice.</strong> Any discussion of business models, revenue, or economic matters related to the streaming industry is informational only.</li>
        </ul>

        <h2 id="limitation-of-liability">Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, IPTVMine Pro, its developers, contributors, and maintainers shall not be liable for:
        </p>
        <ul>
          <li>Any direct, indirect, incidental, special, consequential, or punitive damages of any kind.</li>
          <li>Loss of data, profits, business, or goodwill arising from your use of or inability to use the App.</li>
          <li>Any legal action taken against you by third parties in connection with content you access through the App.</li>
          <li>Interruption, suspension, or termination of the App or any feature thereof.</li>
          <li>Actions taken by third-party provider extension authors whose extensions you have installed.</li>
          <li>Inaccurate metadata displayed from third-party data sources.</li>
        </ul>
        <p>
          This limitation of liability applies whether the claim is based in contract, tort (including negligence), strict liability, or any other legal theory, even if IPTVMine Pro has been advised of the possibility of such damages.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability for consequential or incidental damages, so some of the above limitations may not apply to you.
        </p>

        <p style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.07)", color: "var(--text-faint)", fontSize: "0.875rem" }}>
          If you have questions about this Disclaimer, contact us at <a href="mailto:legal@iptvminepro.app">legal@iptvminepro.app</a>
        </p>
      </LegalPage>
    </>
  );
}
