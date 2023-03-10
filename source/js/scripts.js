const i18n = {

  "en": {
    "app-title": "Hello, I'm Arthur Bréant",
    "app-subtitle": "Welcome to my home 👋",
    "app-first-sentence": "I am currently a consultant and trainer at ThinkR. Passionate about the web and tech in general, I am curious and always want to discover new things...",
    "app-second-sentence": "From the mock-up, to the development of the code until the final integration, I wish to discover and share my knowledge and my creations.",
    "app-know-more": "You want to know more:",
    "app-open-apps": "Open apps",
    "app-apps": '<i class=" fa fa-lock" aria-hidden="true"></i> My apps',
    "lang": "Changez de langue",
  },

  "fr": {
    "app-title": "Salut, je suis Arthur Bréant",
    "app-subtitle": "Bienvenue dans mon espace 👋",
    "app-first-sentence": "Je suis actuellement consultant et formateur chez ThinkR. Passioné par le web et la tech en général, je suis curieux et souhaite toujours en apprendre davantage...",
    "app-second-sentence": "Depuis la maquette, au développement du code jusqu'à son intégration finale, je souhaite découvrir et partager mes connaissances et mes créations.",
    "app-know-more": "En savoir plus :",
    "app-open-apps": "Apps ouvertes",
    "app-apps": '<i class="fa fa-lock" aria-hidden="true"></i> Mes apps',
    "lang": "Change the language",
  },
};

const defaultLocale = "en";

document.addEventListener("DOMContentLoaded", () => {
  searchTranslation(defaultLocale);
  SwitcherTranslation(defaultLocale);
});

function SwitcherTranslation() {

  const switcher = document.querySelector("[data-i18n-switcher]");

  switcher.onchange = () => {
    searchTranslation(switcher.value);
  };
}

function searchTranslation(language) {
  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    el.innerHTML = i18n[language][el.dataset.i18nKey];
    console.log(el.dataset.i18nKey)
    console.log(i18n[language][el.dataset.i18nKey])
  });
}