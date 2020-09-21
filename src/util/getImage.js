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
