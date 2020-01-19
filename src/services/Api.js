
import axios from 'axios';

let url_base = "https://wasabi.i3s.unice.fr/api/v1";

export const get = async url => {
  try {
    const response = await axios.get(`${url_base}/${url}`);
    return response && response.data;
  } catch (error) {
    return error;
  }
}

export const post = async (url, body) => {
  try {
    const response = await axios.post(`${url_base}/${url}`, body);
    return response && response.data;
  } catch (error) {
    return error;
  }
}


export const put = async (url, body) => {
  try {
    const response = await axios.put(`${url_base}/${url}`, body);
    return response && response.data;
  } catch (error) {
    return error;
  }
}

export const del = async url => {
  try {
    const response = await axios.delete(`${url_base}/${url}`);
    return response && response.data;
  } catch (error) {
    return error;
  }
}

