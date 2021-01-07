import {PATH_URL} from '../env/environment';

export const verifyNumberPhone = async (numberPhone, code, rol) => {
	let data = {};
	let routeApi = "";

	if(rol === "numberPhoneRequest"){
		data = {number: numberPhone}
		routeApi = "requestNumberPhone";

	} else if(rol === "verify-code"){
		data = {code: code, number: numberPhone}
		routeApi = "verify-code-sms";
	}

  console.log(code)
  console.log(numberPhone)

  console.log(`${PATH_URL}/${routeApi}`)

  return await fetch(`${PATH_URL}/${routeApi}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
