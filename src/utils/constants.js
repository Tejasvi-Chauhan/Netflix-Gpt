export const LOGO =
  "https://loodibee.com/wp-content/uploads/Netflix-logo.png";

export const USER_AVATAR =
  "https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v2/feature/profile/38_jv.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
