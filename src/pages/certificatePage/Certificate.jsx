import CertificateMobile from "./CertificateMobile";
import CertificateCard from "./CertificateCard";
import { useIsMobile } from "../../hooks/useIsMobile";
import { listCertificate } from "../../data/listCertificate";
import { Award } from "lucide-react";

export default function Language() {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <div>
          <CertificateMobile />
        </div>
      ) : (
        <div className="max-w-[1300px] h-auto mx-auto py-4 relative">
          <div className="mx-auto my-6 flex w-full max-w-[800px] items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/50" />

            <h1
              className="
                inline-flex items-center gap-3 rounded-full
                border border-cyan-500/20 bg-cyan-500/10
                px-5 py-3 text-lg font-bold text-cyan-700
                shadow-[0_10px_30px_rgba(8,145,178,0.12)]
                backdrop-blur-xl
                dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200
                sm:text-xl
              "
            >
              <Award className="w-8 h-8 text-cyan-700" />
              Certificates
            </h1>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/50" />
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4 justify-items-center">
            {listCertificate.map((certificate) => (
              <CertificateCard
                key={certificate.name}
                name={certificate.name}
                desc={certificate.desc}
                view={certificate.view}
                link={certificate.link}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
