import * as api from "./Api";

export async function getartistsWithMostAlbum() {
  let url = "/artist/count/album";
  return await api.get(url);
}