export const languages: Record<string, { code: string; name: string }> = {
  es: { code: "es", name: "Español" },
  en: { code: "en", name: "English" },
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.index": "Inicio",
    "nav.projects": "Proyectos",
    "nav.profile": "Perfil",
  },
  en: {
    "nav.index": "Home",
    "nav.projects": "Projects",
    "nav.profile": "About me",
  },
} as const;

export const routes = {
  en: {
    index: "home",
    projects: "projects",
    profile: "profile",
  },
  es: {
    index: "inicio",
    projects: "projects",
    profile: "profile",
  },
};
