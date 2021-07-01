async function getApi(gateway) {
  const axios = require('axios');
  const url = 'https://606baa00f8678400172e6751.mockapi.io/' + gateway;
  const request = await axios.get(url).then(
    (response) => {
      // console.log(response.data);
      return response.data;
    },
    (error) => {
      console.log(error);
      return error;
    },
  );
  return request;
}
export default getApi;
