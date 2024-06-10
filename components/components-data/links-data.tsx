import { RiLinkedinFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import { PhoneCall } from "lucide-react";

// MARK: NAVIGATION LINKS
export const navigationlinks = [
  { url: "/", name: "Home" },
  { url: "/services", name: "My Services" },
  { url: "/contact", name: "Contact" },
];

// MARK: SOCIAL DATA
export const social = [
  {
    url: "https://www.linkedin.com/feed/?trk=nav_back_to_linkedin",
    name: <RiLinkedinFill />,
  },
  {
    url: "https://twitter.com/LucianRosuATC",
    name: <FaXTwitter />,
  },
  {
    url: "mailto:lucian.rosu.atc@gmail.com",
    name: <TfiEmail />,
  },
  {
    url: "tel:07505",
    name: <PhoneCall size={31} />,
  },
];
