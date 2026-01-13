import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Chubb’s Army",
  description:
    "Read the privacy policy for Chubb’s Army app, including information we collect, how we use it, sharing details, your privacy rights, and more.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Chubb’s Army — Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p>We may collect:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Information you provide (like username, email, or profile details).
          </li>
          <li>Content you post, upload, or share.</li>
          <li>
            Basic usage data (like app activity, device type, crash reports).
          </li>
          <li>
            If allowed, limited data from cookies or similar technologies.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Information
        </h2>
        <p>We use your information to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide and improve the app.</li>
          <li>Keep the app safe and prevent misuse.</li>
          <li>
            Communicate with you (support, updates, or important notices).
          </li>
          <li>Show content or features that may be more relevant to you.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Sharing Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We do not sell your personal information.</li>
          <li>
            We may share limited data with trusted service providers who help us
            run the app (e.g., hosting, analytics, customer support).
          </li>
          <li>
            We may share information if required by law, to protect safety, or
            in connection with a merger, acquisition, or sale of assets.
          </li>
          <li>
            The app may contain links to or integrations with third-party
            services. Their use is subject to their own privacy policies and
            practices, which we do not control.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Your Privacy Rights</h2>
        <p>Depending on where you live, you may have special rights:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            GDPR (Europe): You have the right to access, correct, delete, or
            download your data. You can also object to or limit how we use it.
          </li>
          <li>
            CCPA/CPRA (California): You can request details about what personal
            data we collect, request deletion, and opt out of data sharing. We
            do not sell personal data.
          </li>
          <li>
            Other regions: We respect similar rights where local laws apply
            (such as Brazil LGPD or Canada PIPEDA).
          </li>
        </ul>
        <p>
          To exercise your rights, contact us at{" "}
          <Link
            href={"mailto:info@chubbsarmy.com"}
            className="underline text-[var(--primary-dark)]"
          >
            info@chubbsarmy.com
          </Link>
          . We may need to verify your request.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
        <p>
          We retain personal data only as long as necessary to provide the app,
          comply with legal obligations, and resolve disputes. When data is no
          longer needed, we delete or anonymize it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Children’s Privacy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The app is not for children under 13 (or the higher age required by
            law in your country).
          </li>
          <li>
            We do not knowingly collect data from children. If we discover we’ve
            collected data from a child, we will delete it.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. International Users</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We store and process data in the United States.</li>
          <li>
            By using the app, you consent to your data being transferred to and
            processed in countries outside your own, which may have different
            data protection laws.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Security</h2>
        <p>
          We take reasonable technical and organizational steps to protect your
          data, but no system is completely secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          9. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy. If we make major changes, we will
          notify you in the app or by email.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p>
          If you have questions about these Terms or Privacy Policy, or if you
          want to exercise your privacy rights, contact us at:
        </p>
        <p>
          Email:{" "}
          <Link
            href={"mailto:info@chubbsarmy.com"}
            className="underline text-[var(--primary-dark)]"
          >
            info@chubbsarmy.com
          </Link>
        </p>
        <p>
          Website:{" "}
          <Link href={"https://chubbsarmy.com/"} className="underline text-[var(--primary-dark)]">
            chubbsarmy.com
          </Link>
        </p>
      </section>
    </div>
  );
}
