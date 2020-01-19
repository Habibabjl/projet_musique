import * as api from "./Api";

export async function getStatsAboutLyricsLanguages() {
  let url = "/song/lyrics/language/popularity";
  return await api.get(url);
}

export async function getGenresByPopularity(limit = 20) {
    let url = "/artist/genres/popularity?limit=" + limit;
    return await api.get(url);
}