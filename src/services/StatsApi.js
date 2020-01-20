import * as api from "./Api";

export async function getStatsAboutLyricsLanguages() {
  let url = "/song/lyrics/language/popularity";
  return await api.get(url);
}

export const getGenresByPopularity = async limit => {
  let url = `/artist/genres/popularity?limit=${limit}`;
  const response = await api.get(url);
  return response;
}
