export const metadata = {
  title: "Terms and Conditions - Chubb’s Army",
  description:
    "Read the terms and conditions for using Chubb’s Army app, including user responsibilities, content ownership, safety guidelines, and more.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Using the App</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            You must be at least 13 years old, or the minimum legal age required
            in your country (for example, 16 in the EU unless local law allows a
            lower age).
          </li>
          <li>
            You are responsible for what you post, share, or do in the app.
          </li>
          <li>
            Be respectful — no harassment, bullying, hate speech, illegal
            activity, or harmful content.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Content</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You own the content you post.</li>
          <li>
            By posting, you grant Chubb’s Army a worldwide, royalty-free,
            transferable, sublicensable license to use, host, display,
            reproduce, and share your content for the purposes of operating,
            promoting, and improving the app.
          </li>
          <li>
            We may remove, restrict, or block content that breaks these rules or
            that we determine may harm the app or its community.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Safety</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Do not use the app to spam, scam, or harm others.</li>
          <li>Report anything unsafe or against the rules.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Our Rights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We may update, change, or end the app at any time.</li>
          <li>
            We may suspend or delete accounts that break these Terms or for any
            other reason at our discretion.
          </li>
          <li>
            You may delete your account at any time through the app or by
            contacting us.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Limitation of Liability
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Chubb’s Army is provided “as is” and “as available.” We make no
            guarantees that the app will be uninterrupted or error-free.
          </li>
          <li>
            To the fullest extent permitted by law, we are not responsible for
            indirect, incidental, consequential, or punitive losses, damages, or
            problems caused by using the app.
          </li>
          <li>
            Our total liability to you will not exceed the greater of $100 or
            the amount you paid to use the app in the last 12 months.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Chubb’s Army, its affiliates,
          officers, and employees from any claims, damages, or expenses arising
          out of your use of the app, your User Content, or your violation of
          these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. Governing Law & Disputes
        </h2>
        <p>
          These Terms are governed by the laws of the State of Texas, U.S.A.,
          without regard to conflict of law principles. Any disputes must be
          resolved exclusively in the courts of Dallas County, Texas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
        <p>
          We may update these Terms. If we make major changes, we will notify
          you in the app or by email. Continued use of the app means you accept
          the updated Terms.
        </p>
      </section>
    </div>
  );
}
