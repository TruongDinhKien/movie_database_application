import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "welcome_message": "Welcome to React and react-i18next",
      "image_load_error": "Failed to load image",
      "loading_image": "Loading image...",
      "now_playing": "Now Playing",
      "by_alp_odr": "By alphabetical order",
      "by_rating": "By rating",
      "by_release_date": "By release date",
      "sort_by": "Sort By",
      "search": "Search",
      "upcoming": "Upcoming",
      "popular": "Popular",
      'load_more': "Load More",
      "user_score": "User Score"
    }
  },
  vi: {
    translation: {
      "welcome_message": "Bienvenue à React et react-i18next"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
