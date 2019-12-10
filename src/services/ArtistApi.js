import * as api from "./Api";

export const getArtistsWithMostAlbum = async limit => {
  let url = `/artist/count/album?limit=${limit}`;
  const response = await api.get(url);
  return response;
}