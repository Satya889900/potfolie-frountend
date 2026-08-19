export interface NavLink {
  name: string;
  href: string;
  comingSoon?: boolean;
}

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Resume",
    href: "/resume",
  },
];