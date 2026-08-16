export const languages = {
  en: 'EN',
  es: 'ES',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'site.title': 'jsisques — links',
    'site.description':
      'jsisques — software developer. Building things, breaking things, learning in public.',
    'profile.role': 'software developer',
    'profile.tagline': 'building things, breaking things, learning in public.',
    'social.github': 'GitHub',
    'social.linkedin': 'LinkedIn',
    'social.blog': 'Blog',
    'social.email': 'Email',
    'social.instagram': 'Instagram · coming soon',
    'social.tiktok': 'TikTok · coming soon',
    'social.youtube': 'YouTube · coming soon',
    'contact.cta': 'contact me',
    'labs.title': 'sisques labs',
    'labs.subtitle': 'got a project? that’s my dev agency',
    'resources.label': '// resources',
    'resource.title': 'Add a resource',
    'resource.subtitle': 'title · short description',
    'visits.label': 'visits',
    'lang.switch': 'Switch language',
  },
  es: {
    'site.title': 'jsisques — enlaces',
    'site.description':
      'jsisques — software developer. Construyendo cosas, rompiendo cosas, aprendiendo en público.',
    'profile.role': 'software developer',
    'profile.tagline':
      'construyendo cosas, rompiendo cosas, aprendiendo en público.',
    'social.github': 'GitHub',
    'social.linkedin': 'LinkedIn',
    'social.blog': 'Blog',
    'social.email': 'Email',
    'social.instagram': 'Instagram · próximamente',
    'social.tiktok': 'TikTok · próximamente',
    'social.youtube': 'YouTube · próximamente',
    'contact.cta': 'contáctame',
    'labs.title': 'sisques labs',
    'labs.subtitle': '¿tienes un proyecto? mi agencia de desarrollo',
    'resources.label': '// recursos',
    'resource.title': 'Añade un recurso',
    'resource.subtitle': 'título · descripción corta',
    'visits.label': 'visitas',
    'lang.switch': 'Cambiar idioma',
  },
} as const;
