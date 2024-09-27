import API from "../_config";

export function userLogin(data: any) {
  return API.post(`accounts/login/`, data)
    .then((response: any) => {
      return response.data;
    })
    .catch((e: any) => {
      throw e;
    });
}

export function userSignUp(data: any) {
  return API.post(`accounts/users/register/`, data)
    .then((response: any) => {
      return response.data;
    })
    .catch((e: any) => {
      throw e;
    });
}

export function sendOTPCode(data: any) {
  return API.post(`accounts/users/send-sms-code/`, data)
    .then((response: any) => {
      return response.data;
    })
    .catch((e: any) => {
      throw e;
    });
}

export function userProfile() {
  return API.get(`accounts/dashboard/`)
    .then((response: any) => {
      return response.data;
    })
    .catch((e: any) => {
      throw e;
    });
}
