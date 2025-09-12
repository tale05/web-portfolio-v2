import { Award } from "lucide-react";
import Cat from "../../components/lotties/CatAnimation";
import CertificateCard from "./CertificateCard";
import { listCertificate } from "../../data/listCertificate";

export default function CertificateMobile() {
  return (
    <div className="p-4">
      <div className="relative flex justify-center">
        <h1
          className="relative z-12 flex items-center justify-center gap-3 p-2 w-full
          text-xl text-white font-bold text-center 
          bg-color-for-tilte rounded-xl shadow-lg"
        >
          <Award className="w-8 h-8 text-white" />
          Certificates
        </h1>
        <div className="absolute -top-16 right-0 z-10">
          <Cat />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 py-3">
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
  );
}
