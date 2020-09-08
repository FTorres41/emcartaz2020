// import api from '../services/baseApi';

// async function GetImage(post) {
//   const url = post._links["wp:attachment"][0].href.split("v2")[1];
//   const { data } = await api.get(url);

//   return data[0].guid.rendered;
// }

async function GetImage(post) {
  const regex = new RegExp('src=(.*?)alt');
  const content = post.content.rendered;

  if (regex.test(content)) {
    let matches = regex.exec(content);
    let imageUrl = matches[0].split('="')[1].replace('" alt', '');

    if (imageUrl.indexOf('450x') !== -1) 
      imageUrl = imageUrl.replace(/-450x\d{3}/, '');

    return imageUrl;
  }
}

export default GetImage;
