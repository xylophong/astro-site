import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://xylophong.com/", // replace this with your deployed domain
  author: "Dinh-Phong Nguyen",
  desc: "Blog & portfolio",
  title: "xylophong",
  // ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/xylophong",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dinh-phong-nguyen-5122a867/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
];
