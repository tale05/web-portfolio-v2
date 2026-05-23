import certificate1 from "../assets/ZertifikateA1_digital.pdf";
import certificate2 from "../assets/Certificate_TOEIC.jpg";
import certificate3 from "../assets/Certificate_HAT.pdf";
import certificate4 from "../assets/Zertifikat_B1.pdf";

export const listCertificate = [
  {
    translationKey: "goetheA1",
    name: "GOETHE ZERTIFIKAT A1",
    desc: "Goethe-Institut",
    link: "https://www.goethe.de/de/index.html",
    view: certificate1,
  },
  {
    translationKey: "telcB1",
    name: "TELC ZERTIFIKAT B1",
    desc: "telc",
    link: "https://results.telc.net/vb?credential=telc-4fA0HbT",
    view: certificate4,
  },
  {
    translationKey: "toeic",
    name: "TOEIC 605",
    desc: "Educational Testing Service (ETS)",
    link: "https://iigvietnam.com",
    view: certificate2,
  },
  {
    translationKey: "appreciation",
    name: "CERTIFICATE OF APPRECIATION",
    desc: "H.A.T Tours and Service Company Limited",
    link: "https://dulichhat.com",
    view: certificate3,
  },
];
