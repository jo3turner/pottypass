import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — PottyPass',
  description: 'Privacy Policy for PottyPass.',
};

const sections = [
  {
    title: '1. Who We Are',
    content: (
      <p>
        PottyPass (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a NYC-based mobile app and restroom reservation network. Our website is{' '}
        <a href="https://pottypassapp.com" className="text-[#4CB6F4] hover:underline">pottypassapp.com</a>.
      </p>
    ),
  },
  {
    title: '2. What Information We Collect',
    content: (
      <>
        <p className="mb-4">We collect the following when you join our waitlist, interact with our ads, or use our services:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-medium">Contact information:</span> name, email address, phone number</li>
          <li><span className="font-medium">Location data:</span> city or neighborhood (to match you with nearby restrooms)</li>
          <li><span className="font-medium">Usage data:</span> how you interact with our website and app</li>
          <li><span className="font-medium">Device data:</span> browser type, device type, IP address</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. How We Use Your Information',
    content: (
      <>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Add you to the PottyPass launch waitlist</li>
          <li>Send you product updates, launch announcements, and marketing communications</li>
          <li>Understand demand and improve our product before and after launch</li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. How We Share Your Information',
    content: (
      <>
        <p className="mb-4">We do not sell your personal information. We may share data with:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Service providers who help us operate our platform (e.g., email tools, analytics platforms)</li>
          <li>Advertising platforms such as Meta (Facebook/Instagram) to run and optimize our ad campaigns</li>
          <li>Legal authorities if required by law</li>
        </ul>
      </>
    ),
  },
  {
    title: '5. Meta Advertising',
    content: (
      <p>
        We run advertising campaigns on Meta platforms (Facebook and Instagram). Meta may collect data about your interaction with our ads in accordance with Meta&apos;s Data Policy. We use Meta Lead Ads and Instant Forms to collect waitlist signups and survey responses.
      </p>
    ),
  },
  {
    title: '6. Your Rights & Choices',
    content: (
      <>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Opt out of marketing emails at any time via the unsubscribe link in any email</li>
          <li>Request access to the personal data we hold about you</li>
          <li>Request deletion of your personal data by contacting us</li>
        </ul>
      </>
    ),
  },
  {
    title: '7. Data Retention',
    content: (
      <p>We retain your information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.</p>
    ),
  },
  {
    title: '8. Security',
    content: (
      <p>We take reasonable measures to protect your information. However, no method of transmission over the internet is 100% secure.</p>
    ),
  },
  {
    title: "9. Children's Privacy",
    content: (
      <p>PottyPass is not directed at children under 13. We do not knowingly collect data from children.</p>
    ),
  },
  {
    title: '10. Changes to This Policy',
    content: (
      <p>We may update this policy from time to time. We&apos;ll update the &ldquo;Last Updated&rdquo; date at the top when we do.</p>
    ),
  },
  {
    title: '11. Contact Us',
    content: (
      <>
        <p className="mb-4">Questions? Reach us at:</p>
        <p className="font-medium text-[#1F4D7A] mb-2">PottyPass</p>
        <p>
          📧{' '}
          <a href="mailto:hello@pottypassapp.com" className="text-[#4CB6F4] hover:underline">
            hello@pottypassapp.com
          </a>
        </p>
        <p>
          🌐{' '}
          <a href="https://pottypassapp.com" className="text-[#4CB6F4] hover:underline">
            pottypassapp.com
          </a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/* Header */}
      <div className="bg-[#1F4D7A] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <a href="/" className="text-[#4CB6F4] text-sm font-medium hover:underline mb-6 inline-block">
            ← Back to PottyPass
          </a>
          <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/60 text-sm">PottyPass &nbsp;·&nbsp; Last Updated: June 22, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-[#1F4D7A] mb-4">{section.title}</h2>
              <div className="text-[#334155]/70 leading-relaxed text-sm space-y-2">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#E5E7EB] py-8 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[#334155]/40 text-sm">© 2026 PottyPass</span>
          <a href="/" className="text-[#334155]/40 hover:text-[#4CB6F4] text-sm transition-colors">
            pottypassapp.com
          </a>
        </div>
      </footer>

    </div>
  );
}
