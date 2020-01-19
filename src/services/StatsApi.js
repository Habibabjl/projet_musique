import * as api from "./Api";

export async function getStatsAboutLyricsLanguages() {
  let url = "/song/lyrics/language/popularity";
  return await api.get(url);
}
