let url_base = "https://wasabi.i3s.unice.fr/api/v1/";

export function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url_base + url, {
      method: "get"
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        return resolve(json);
      })
      .catch(error => {
        return reject(error);
      });
  });
}

export function post(url, body) {
  return new Promise((resolve, reject) => {
    fetch(url_base + url, {
      method: "post",
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        return resolve(json);
      })
      .catch(error => {
        return reject(error);
      });
  });
}

export function put(url, body) {
  return new Promise((resolve, reject) => {
    fetch(url_base + url, {
      method: "put",
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        return resolve(json);
      })
      .catch(error => {
        return reject(error);
      });
  });
}

export function del(url, body) {
  return new Promise((resolve, reject) => {
    fetch(url_base + url, {
      method: "delete"
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        return resolve(json);
      })
      .catch(error => {
        return reject(error);
      });
  });
}