export const metadata = {
  title: "Child Safety Policy - Chubb's Army",
  description:
    "Learn about Chubb's Army commitment to child safety, protection policies, and measures we take to ensure a secure environment for all users.",
};

export default function ChildSafetyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">
        Chubb's Army – Child Safety & Protection Policy
      </h1>

      <p className="text-gray-600 mb-8">Last Updated: February 17, 2026</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment to Child Safety</h2>
        <p className="mb-4">
          At Chubb's Army, we take child safety and online protection seriously. We are
          committed to ensuring a safe and secure environment for all users and strictly
          enforce policies to prevent Child Sexual Abuse and Exploitation (CSAE).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Age Restrictions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Chubb's Army is intended for users of all ages, including children under 13.
          </li>
          <li>
            We do not knowingly allow minors to use our platform without parental knowledge
            or supervision.
          </li>
          <li>
            If we discover that a minor has registered and is being exposed to harmful or
            inappropriate content, we reserve the right to remove the account or limit its
            access immediately.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Content Moderation & Reporting</h2>
        <p className="mb-4">
          We have strict guidelines and enforcement mechanisms to prevent harmful content on
          Chubb's Army:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Prohibited Content:</strong> Any content involving child exploitation,
            nudity, or abuse is strictly forbidden and will be removed immediately and
            reported to relevant law enforcement or child protection agencies.
          </li>
          <li>
            <strong>User Reporting System:</strong> All users can report any suspicious,
            harmful, or unsafe activity or content. Every report is reviewed promptly, and
            appropriate action is taken, including banning accounts and notifying authorities
            when necessary.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Safety Measures</h2>
        <p className="mb-4">
          To safeguard all users, including minors, we have implemented the following
          protocols:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Profile Verification:</strong> We take steps to discourage fake accounts
            and impersonation through registration validation.
          </li>
          <li>
            <strong>Chat & Interaction Controls:</strong> Users can block, mute, or report
            others if they feel unsafe or threatened in any way.
          </li>
          <li>
            <strong>Live Stream Monitoring:</strong> Our team monitors live sessions using a
            mix of automated alerts and user feedback to prevent misuse of the feature.
          </li>
          <li>
            <strong>Data Protection & Privacy:</strong> Chubb's Army does not sell or share
            personal data with third parties unless required by law or consented by the user.
            Our practices are aligned with COPPA and GDPR standards.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Compliance & Law Enforcement Collaboration</h2>
        <p className="mb-4">
          Chubb's Army complies with child protection laws and platform policies including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>COPPA (Children's Online Privacy Protection Act)</li>
          <li>GDPR (General Data Protection Regulation)</li>
          <li>Google Play & Apple App Store CSAE policies</li>
        </ul>
        <p className="mt-4">
          Any violations involving child abuse or exploitation are immediately reported to law
          enforcement agencies and child protection organizations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact for Child Safety Concerns</h2>
        <p className="mb-4">
          If you have concerns or inquiries regarding child safety on Chubb's Army, please
          contact our team at:
        </p>
        <p className="text-lg font-semibold">
          <a href="mailto:info@chubbsarmy.com" className="text-blue-600 hover:underline">
            info@chubbsarmy.com
          </a>
        </p>
        <p className="mt-6">
          We are committed to maintaining a secure and positive environment for all users and
          are continuously working to improve our child safety policies and tools.
        </p>
      </section>
    </div>
  );
}
