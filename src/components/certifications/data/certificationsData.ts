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
  },
  {
    title: "certifications.analista.title",
    issuer: "certifications.ua",
    date: "certifications.analista.date",
    detail: "certifications.analista.detail",
    image: analistaImage,
    documentUrl: "/documents/diploma-analista-programador.pdf",
  },
  {
    title: "certifications.congreso.title",
    issuer: "certifications.ua",
    date: "certifications.congreso.date",
    detail: "certifications.congreso.detail",
    image: congresoImage,
    documentUrl:
      "https://virtual.autonoma.edu.pe/ConstanciasRA/W2024012520419EC8C.pdf",
  },
];
