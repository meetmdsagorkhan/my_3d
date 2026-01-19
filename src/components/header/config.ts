import { Link } from "@/types";

const links: Link[] = [
  {
    title: "Home",
    href: "/",
    thumbnail: "/assets/nav-link-previews/landing.png",
  },
  {
    title: "About",
    href: "/about",
    thumbnail: "/assets/nav-link-previews/landing.png",
  },
  {
    title: "Experience",
    href: "/#experience",
    thumbnail: "/assets/nav-link-previews/landing.png",
  },
  {
    title: "Projects",
    href: "/#projects",
    thumbnail: "/assets/nav-link-previews/projects.png",
  },
  {
    title: "Blog", // <--- Added this back!
    href: "/blogs",
    thumbnail: "/assets/nav-link-previews/landing.png", // You can create a blog.png later if you want
  },
  {
    title: "Contact",
    href: "/contact",
    thumbnail: "/assets/nav-link-previews/contact.png",
  },
];

export { links };