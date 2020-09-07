import api from '../services/baseApi';

async function GetImage(post) {
  const url = post._links["wp:attachment"][0].href.split("v2")[1];
  const { data } = await api.get(url);
  return data[0].guid.rendered;
}

export default GetImage
