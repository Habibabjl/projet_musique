import React from "react"
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


