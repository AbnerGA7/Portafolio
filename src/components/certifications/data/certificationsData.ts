import analistaImage from "@/assets/certificates/analista-programador.png";
import congresoImage from "@/assets/certificates/congreso-ia.png";
import challengeImage from "@/assets/certificates/autonoma-challenge-2026.png";
import type { Certification } from "@/types/Certification";

export const certificationsData: Certification[] = [
  {
    title: "certifications.challenge.title",
    issuer: "certifications.ua",
    date: "certifications.challenge.date",
    detail: "certifications.challenge.detail",
    image: challengeImage,
    landscape: true,
    documentUrl: "/documents/diploma-autonoma-challenge-2026.pdf",
    verifyUrl: "https://virtual.autonoma.edu.pe/Certificados",
    verifyCode: "ADM-00458-2026",
  },
  {
    title: "certifications.analista.title",
    issuer: "certifications.ua",
    date: "certifications.analista.date",
    detail: "certifications.analista.detail",
    image: analistaImage,
    documentUrl: "/documents/diploma-analista-programador.pdf",
    verifyUrl: "https://virtual.autonoma.edu.pe/Certificados",
    verifyCode: "ISW-00093-2025",
  },
  {
    title: "certifications.congreso.title",
    issuer: "certifications.ua",
    date: "certifications.congreso.date",
    detail: "certifications.congreso.detail",
    image: congresoImage,
    documentUrl:
      "https://virtual.autonoma.edu.pe/ConstanciasRA/W2024012520419EC8C.pdf",
    verifyUrl: "https://virtual.autonoma.edu.pe/Certificados",
    verifyCode: "SIS-00003-2024",
  },
];
