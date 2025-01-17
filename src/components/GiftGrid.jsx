//todo usar use effect
const getGifts = async (category) => {
  const apiKey = "AvcdGeNzW40xzmpObLOlBeUE3mFU67k3";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;

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
// eslint-disable-next-line react/prop-types
export const GiftGrid = ({ category }) => {
  getGifts(category);
  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
