import axios from 'axios';
import * as api from "./Api";

export const getArtistsWithMostAlbum = async limit => {
  let url = `/artist/count/album?limit=${limit}`;
  const response = await api.get(url);
  return response;
}

export const getMembersWithMostBands = async limit => {
    let url = `/artist/member/count/band?limit=${limit}`;
    const responseM = await api.get(url);
    return responseM;
}


export const getArtistAlbums = async limit => {

  let url = `/search/artist_id/56d93d84ce06f50c0fed8747/album/count`;

  const response = await api.get(url);
  return response;
}

export const getArtistDataByid = async function(artistId){
  let url= 'artist/id/'+artistId;

  const response = await api.get(url);
  return response;
}

export const getArtistDataByName = async function(artistName){
  let url= 'artist/name/'+artistName;

  const response = await api.get(url);
  return response;
}

export const getArtistsByName= async function(request){
  try {
    const response = await axios.get(`https://wasabi.i3s.unice.fr/search/fulltext/`+request);
    return response && response.data;
  } catch (error) {
    return error;
  }
}