import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface ContactInfo {
  icon: any;
  title: string;
  details: string[];
}

export const contactInfos: ContactInfo[] = [
  {
    icon: faHome,
    title: "Office Address",
    details: ["4517 Washington Ave. Manchester, Kentucky 39495"],
  },

  {
    icon: faPhone,
    title: "Contact number",
    details: ["(603) 555-0123", "(319) 555-0115"],
  },
  {
    icon: faEnvelope,
    title: "Email Address",
    details: ["example@gmail.com", "example2@gmail.com"],
  },
];
