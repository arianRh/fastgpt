import API from "../_config";

export function sendComment(data: any) {
  return API.post(`comments/`, data)
    .then((response: any) => {
      return response.data;
    })
    .catch((e: any) => {
      throw e;
    });
}

export function getComments() {
  return API.get(`comments/`)
    .then((response: any) => {
      return response.data;
    })
    .catch((e: any) => {
      throw e;
    });
}
