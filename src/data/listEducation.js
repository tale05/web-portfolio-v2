import doc1 from "../assets/doc1.pdf";
import doc2 from "../assets/doc2.pdf";
import doc1_inDEU from "../assets/doc1_inDEU.pdf";
import doc2_inDEU from "../assets/doc2_inDEU.pdf";
import doc1_certificate from "../assets/Certication_University.pdf";

export const listEducation = [
  {
    translationKey: "university",
    name: "Ho Chi Minh City University of Industry and Trade",
    yearGraduated: "Year: 2020 - 2024",
    typeGraduated:
      "Graduated – Bachelor of Engineering in Software Engineering",
    linkMyDegree: doc1,
    linkMyDegree_inDEU: doc1_inDEU,
    linkCertify: doc1_certificate,
    more: "https://huit.edu.vn/",
  },
  {
    translationKey: "highSchool",
    name: "Marie Curie High School",
    yearGraduated: "Year: 2017 - 2020",
    typeGraduated: "Graduated - High School Diploma",
    linkMyDegree: doc2,
    linkMyDegree_inDEU: doc2_inDEU,
    linkCertify: null,
    more: "https://thptmariecurie.hcm.edu.vn/",
  },
];
