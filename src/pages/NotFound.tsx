import StatusPage, { primaryButton, secondaryButton } from "./StatusPage";
import { projectSnapshot } from "../data";

export default function NotFound() {
  return (
    <StatusPage
      title="Page Not Found | ARS Svaasa by ARS Infraa"
      eyebrow="Error 404"
      heading="This page doesn't exist"
    >
      <p className="text-sm sm:text-base text-white/75 leading-relaxed">
        The link may be broken or the page may have moved. Head back to explore ARS Svaasa residences on Sarjapura Road.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <a href="/" className={primaryButton}>
          Go to homepage
        </a>
        <a href={`tel:${projectSnapshot.phoneRaw}`} className={secondaryButton}>
          Call {projectSnapshot.phonePrimary}
        </a>
      </div>
    </StatusPage>
  );
}
