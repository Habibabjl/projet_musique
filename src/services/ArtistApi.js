import * as api from "./Api";

export const getArtistsWithMostAlbum = async limit => {
  let url = `/artist/count/album?limit=${limit}`;
  const response = await api.get(url);
  return response;
}

export async function getArtistsWithMostBand(signal = null) {
  let url = "/artist/member/count/band";
  let result;
  if (signal == null) {
    result = await api.get(url);
  } else {
    result = await api.get(url, signal);
  }
  return result;
}

export const getArtistAlbums = async limit => {
  //let artistId

  let url = `/search/artist_id/56d93d84ce06f50c0fed8747/album/count`;
  //let url = `/artist/albums/album?limit=${limit}`;

  const response = await api.get(url);
  return response;
}

