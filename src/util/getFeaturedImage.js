import api from '../services/baseApi';

async function GetFeaturedImage(slug) {
  let imageUrl;

  const { data } = await api.get(`posts?_embed&slug=${slug}`);
  const featuredMedia = data[0]._embedded["wp:featuredmedia"]; 
  
  if (featuredMedia) 
   imageUrl = featuredMedia[0].source_url;

  return imageUrl;
}

export default GetFeaturedImage;
