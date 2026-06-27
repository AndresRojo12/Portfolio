import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { siteConfig } from "../config/site";

export const socialLinks = [
  {
    icon: FaGithub,
    href: siteConfig.github,
    label: "GitHub",
  },

  {
    icon: FaLinkedin,
    href: siteConfig.linkedin,
    label: "LinkedIn",
  },

  {
    icon: FaEnvelope,
    href: `mailto:${siteConfig.email}`,
    label: "Email",
  },
];