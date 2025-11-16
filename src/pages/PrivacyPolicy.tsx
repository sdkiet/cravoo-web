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

          {/* Content */}
          <div className="space-y-14 leading-relaxed text-foreground">
            {/* INTRO */}
            <section>
              <p>
                Cravoo (“Cravoo”, “Company”, “we”, “us”, “our”) is committed to
                protecting the privacy, security, and confidentiality of the
                information you provide while using our mobile application,
                website, and related online services (collectively, the
                “Platform”). This Privacy Policy describes our policies and
                procedures for the collection, use, disclosure, storage,
                transfer, and protection of your information when you access,
                install, register, or use the Platform, or when you communicate
                with us through any mode including but not limited to email,
                SMS, WhatsApp, or customer support channels.
              </p>

              <p className="mt-4">
                By accessing the Platform, creating an account, or using any
                feature of the Platform, you acknowledge that you have read,
                understood, and agreed to this Privacy Policy and consent to our
                processing of your information as described herein. If you do
                not agree with this Privacy Policy, please discontinue the use
                of the Platform immediately.
              </p>

              <p className="mt-4">
                This Privacy Policy is incorporated by reference into and is
                governed by the Cravoo Terms of Service.
              </p>
            </section>

            {/* 1 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                1. Applicability & Scope
              </h2>
              <p>
                This Privacy Policy applies to all users located in India. It
                governs:
              </p>

              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Information collected directly from you</li>
                <li>Information automatically collected from your device</li>
                <li>
                  Information obtained from third-party partners such as
                  analytics, login providers, etc.
                </li>
                <li>
                  Information exchanged during customer support interactions
                </li>
              </ul>

              <p className="mt-4">
                This Privacy Policy does not apply to third-party services or
                websites not directly controlled by Cravoo.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                2. Eligibility & Parental Supervision
              </h2>

              <p>
                The Platform may be used by individuals under the age of 18 only
                under the active supervision of a parent or legal guardian who
                consents to this Privacy Policy on their behalf.
              </p>

              <p className="mt-4">The parent or legal guardian confirms:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>They accept the Privacy Policy on behalf of the minor.</li>
                <li>
                  They assume full responsibility for the minor’s actions on the
                  Platform.
                </li>
                <li>
                  They consent to collection and processing of the minor’s data.
                </li>
                <li>They ensure the minor follows all terms and policies.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                3. Information We Collect
              </h2>

              <p>
                We collect various types of information through direct
                submission, automated technologies, and third-party
                integrations.
              </p>

              {/* A */}
              <h3 className="text-2xl font-semibold mt-6 mb-2">
                A. Information You Provide
              </h3>

              <h4 className="text-xl font-semibold mt-4">
                1. Personal Information
              </h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Full name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Delivery addresses</li>
                <li>Gender, date of birth (optional)</li>
                <li>Profile information</li>
                <li>Communication preferences</li>
                <li>Referral or shared contact information</li>
              </ul>

              <h4 className="text-xl font-semibold mt-4">
                2. Account & Login Credentials
              </h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Encrypted authentication tokens</li>
                <li>Google/Apple login identifiers</li>
                <li>Account settings</li>
              </ul>

              <h4 className="text-xl font-semibold mt-4">
                3. Order & Transaction Information
              </h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Items ordered</li>
                <li>Prices, discounts, charges</li>
                <li>Payment method</li>
                <li>Transaction status</li>
                <li>Delivery instructions & timestamps</li>
              </ul>

              <h4 className="text-xl font-semibold mt-4">
                4. Communications & Customer Support
              </h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Support chats & emails</li>
                <li>Phone call recordings (if applicable)</li>
                <li>Reviews, feedback, dispute information</li>
              </ul>

              <h4 className="text-xl font-semibold mt-4">
                5. Optional Information
              </h4>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Profile photo</li>
                <li>Delivery notes</li>
                <li>Referral contacts</li>
              </ul>

              {/* B */}
              <h3 className="text-2xl font-semibold mt-10 mb-2">
                B. Information Collected Automatically
              </h3>

              <h4 className="text-xl font-semibold mt-4">
                1. Device Information
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Device model & OS</li>
                <li>Unique device IDs (Android ID, IDFV)</li>
                <li>Network & carrier details</li>
                <li>App version, performance logs, crash data</li>
              </ul>

              <h4 className="text-xl font-semibold mt-4">2. Usage Data</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Pages & screens viewed</li>
                <li>Features used & time spent</li>
                <li>Clickstream data</li>
                <li>Error logs</li>
              </ul>

              <h4 className="text-xl font-semibold mt-4">
                3. Location Information
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Approximate location (IP-based)</li>
                <li>Precise GPS location (only with permission)</li>
                <li>Live delivery tracking updates</li>
              </ul>

              <h4 className="text-xl font-semibold mt-4">
                4. Cookies & Tracking Technologies
              </h4>
              <p className="mt-2">
                Used to authenticate sessions, maintain login state, personalize
                content, and collect analytics data.
              </p>

              {/* C */}
              <h3 className="text-2xl font-semibold mt-10 mb-2">
                C. Information From Third Parties
              </h3>

              <ul className="list-disc list-inside space-y-1">
                <li>Payment processors</li>
                <li>SMS/email service partners</li>
                <li>Google/Apple login providers</li>
                <li>Analytics & marketing partners (with consent)</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                4. How We Use Your Information
              </h2>

              <ul className="list-disc list-inside space-y-1">
                <li>Operate and maintain Cravoo services</li>
                <li>Process orders, payments, refunds & cancellations</li>
                <li>Deliver orders accurately and efficiently</li>
                <li>
                  Improve app performance, reliability, and recommendations
                </li>
                <li>Detect and prevent fraud</li>
                <li>Send transactional updates and alerts</li>
                <li>Perform legal compliance and audits</li>
                <li>Provide customer support</li>
              </ul>

              <p className="mt-4">
                Marketing messages are sent only with your explicit consent.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                5. How We Share Your Information
              </h2>

              <p>Cravoo never sells your personal information.</p>

              <h3 className="text-xl font-semibold mt-4">
                A. Service Providers
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Payment partners</li>
                <li>SMS & email delivery providers</li>
                <li>Cloud hosting providers</li>
                <li>Analytics & crash-reporting tools</li>
                <li>Logistics partners</li>
              </ul>

              <h3 className="text-xl font-semibold mt-4">
                B. Legal Requirements
              </h3>
              <p>
                We may disclose information to comply with laws, regulations,
                government requests, or to protect safety and prevent fraud.
              </p>

              <h3 className="text-xl font-semibold mt-4">
                C. Business Transfers
              </h3>
              <p>
                If Cravoo undergoes restructuring, acquisition, merger, or asset
                sale, user data may be transferred with equivalent protection.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                6. Data Storage & Retention
              </h2>

              <p>
                Data is stored securely using encrypted, access-controlled cloud
                systems.
              </p>

              <p className="mt-4">Information is retained until:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Services are provided</li>
                <li>Legal obligations are fulfilled</li>
                <li>Fraud & disputes are resolved</li>
              </ul>

              <p className="mt-4">
                Even after account deletion, some data may be retained to comply
                with legal and regulatory requirements.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">7. Data Security</h2>

              <p>We implement strong security measures including:</p>

              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>HTTPS/TLS encrypted communication</li>
                <li>Secure payment gateways</li>
                <li>Restricted internal access controls</li>
                <li>Log & threat monitoring</li>
                <li>Routine internal audits</li>
              </ul>

              <p className="mt-4">
                Despite these measures, no digital platform can guarantee
                complete security. You are responsible for maintaining
                confidentiality of login credentials.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                8. Your Rights & Choices
              </h2>

              <p>You may request to:</p>

              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Access your data</li>
                <li>Update incorrect information</li>
                <li>Delete your account</li>
                <li>Withdraw optional permissions</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <p className="mt-4">
                To exercise any right, contact us at{" "}
                <a
                  href="mailto:hello@cravoo.co"
                  className="text-primary underline"
                >
                  hello@cravoo.co
                </a>
                .
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                9. Third-Party Links & Services
              </h2>
              <p>
                The Platform may contain third-party links. Cravoo is not
                responsible for third-party privacy practices or data handling.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                10. Changes to this Privacy Policy
              </h2>

              <p>
                Cravoo may update this Privacy Policy anytime. Updated versions
                will include a new “Last Updated” date. Continued use of the
                Platform means you accept the changes.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                11. Contact Us & Grievance Redressal
              </h2>

              <p>
                For privacy-related concerns or grievances, contact us at:
                <br />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:hello@cravoo.co"
                  className="text-primary underline"
                >
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
