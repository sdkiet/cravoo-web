import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pb-20 pt-10">
        <div className="max-w-4xl mx-auto px-6">

          {/* Back Button */}
          <Link
            to="/"
            className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 mb-6"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>

          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-400 py-14 px-6 rounded-2xl mb-12 text-center shadow-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              PRIVACY <span className="text-white/80">POLICY</span>
            </h1>
            <p className="text-white/80 mt-3 text-lg">
              <strong>Last Updated: November 2025</strong>
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-14 leading-relaxed text-foreground">

            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-4 tracking-tight">Overview</h2>
              <p>
                Cravoo (“Cravoo”, “Company”, “we”, “us”, “our”) is committed to protecting the
                privacy, security, and confidentiality of the information you provide while using our
                mobile application, website, and related online services (collectively, the “Platform”).
                This Privacy Policy describes how we collect, use, disclose, store, and secure your
                information when you access or use the Platform. By using the Platform, you acknowledge
                that you have read and agree to this Policy.
              </p>
            </section>

            {/* 1 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Applicability & Scope</h2>
              <p>This Privacy Policy applies to all users in India and governs:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Information collected directly from you</li>
                <li>Information collected automatically</li>
                <li>Information from third-party partners</li>
              </ul>
              <p className="mt-3">
                It does not apply to external websites or services not operated by Cravoo.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">2. Eligibility & Parental Supervision</h2>
              <p>
                Users under age 18 may use the Platform only under supervision of a parent or legal
                guardian who accepts this Privacy Policy on their behalf.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-3xl font-bold mb-6">3. Information We Collect</h2>

              <h3 className="text-2xl font-semibold mb-2">A. Information You Provide</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Full name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Delivery addresses</li>
                <li>Profile details (optional)</li>
                <li>Order & transaction information</li>
                <li>Messages shared with customer support</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-2">B. Automatically Collected Information</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Device model & operating system</li>
                <li>Unique device identifiers</li>
                <li>Usage activity such as screens viewed and buttons clicked</li>
                <li>Crash logs and diagnostics</li>
                <li>
                  Location data (only when you grant permission)
                </li>
                <li>Cookies and tracking technologies</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-6 mb-2">C. Information From Third Parties</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Payment processors</li>
                <li>SMS & email delivery partners</li>
                <li>Google or Apple login providers</li>
                <li>Analytics services</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">4. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>To operate and provide Cravoo services</li>
                <li>To process and deliver orders efficiently</li>
                <li>To enable secure OTP-login authentication</li>
                <li>To personalize user experience and recommendations</li>
                <li>To handle cancellations, refunds, and payment issues</li>
                <li>To provide customer support and resolve complaints</li>
                <li>To detect and prevent fraud or unauthorized access</li>
                <li>To comply with applicable laws and regulations</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">5. How We Share Your Information</h2>
              <p>We do NOT sell your personal information.</p>
              <p className="mt-3">We may share data with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Payment service providers</li>
                <li>Cloud hosting providers</li>
                <li>SMS & email gateways</li>
                <li>Analytics and crash-reporting partners</li>
                <li>Delivery logistics partners (if applicable)</li>
              </ul>
              <p className="mt-3">
                These partners are required to maintain confidentiality and use data only
                for service-related tasks.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">6. Data Storage & Retention</h2>
              <p>
                Your data is stored securely on encrypted, access-controlled cloud servers.
                We retain your information as long as needed to:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Provide services</li>
                <li>Meet legal obligations</li>
                <li>Prevent fraud</li>
                <li>Resolve disputes or audits</li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">7. Data Security</h2>
              <p>We use industry-grade security practices including:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Encrypted data transmission (HTTPS/TLS)</li>
                <li>Secure payment gateways</li>
                <li>Restricted employee access</li>
                <li>Internal security audits</li>
                <li>Monitoring for suspicious activity</li>
              </ul>
              <p className="mt-3">No online system can guarantee 100% security.</p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">8. Your Rights & Choices</h2>
              <p>You may request to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Access your data</li>
                <li>Update inaccurate information</li>
                <li>Delete your account</li>
                <li>Withdraw optional permissions</li>
                <li>Opt out of marketing messages</li>
              </ul>
              <p className="mt-3">
                Email:{" "}
                <a href="mailto:hello@cravoo.co" className="text-primary underline">
                  hello@cravoo.co
                </a>
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">9. Third-Party Links</h2>
              <p>
                The Platform may contain external links. Cravoo is not responsible for their
                content, privacy practices, or data security.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">10. Changes to this Privacy Policy</h2>
              <p>
                We may update this Policy from time to time. Changes will be reflected with a new
                “Last Updated” date. Continued Platform use signifies acceptance.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">11. Contact & Grievance Redressal</h2>
              <p>
                For privacy-related queries, contact:
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@cravoo.co" className="text-primary underline">
                  hello@cravoo.co
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
