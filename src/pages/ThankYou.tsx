import StatusPage, { primaryButton, secondaryButton } from "./StatusPage";
import { projectSnapshot } from "../data";

export default function ThankYou() {
  return (
    <StatusPage
      title="Thank You | ARS Svaasa by ARS Infraa"
      eyebrow="Enquiry received"
      heading="Thank you for your interest in ARS Svaasa"
    >
      <p className="text-sm sm:text-base text-white/75 leading-relaxed">
        Our relationship team will call you shortly to share pricing, floor plans and a time for your site visit.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <a href="/" className={primaryButton}>
          Back to ARS Svaasa
        </a>
        <a href={`tel:${projectSnapshot.phoneRaw}`} className={secondaryButton}>
          Call {projectSnapshot.phonePrimary}
        </a>
      </div>
    </StatusPage>
  );
}
