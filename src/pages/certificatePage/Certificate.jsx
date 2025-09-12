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
          <h1
            className="relative z-1 flex items-center justify-center gap-3 p-4 w-full
            text-2xl text-white font-bold text-center 
            bg-color-for-tilte rounded-xl shadow-lg"
          >
            <Award className="w-8 h-8 text-white" />
            Certificates
          </h1>
          {/* Graduation Hat nằm sau title */}
          {/* <div className="absolute -top-24 right-10 z-2">
            <GraduationHatAnimation />
          </div> */}

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4 justify-items-center">
            {listCertificate.map((certificate) => (
              <CertificateCard
                key={certificate.name}
                name={certificate.name}
                desc={certificate.desc}
                view={certificate.view}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
