export const getGifts = async (category) => {
    const apiKey = "AvcdGeNzW40xzmpObLOlBeUE3mFU67k3";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=5`;
  
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gifts = data.map((gift) => {
      return {
        id: gift.id,
        title: gift.title,
        url: gift.images.downsized_medium.url,
      };
    });
    return gifts;
  };