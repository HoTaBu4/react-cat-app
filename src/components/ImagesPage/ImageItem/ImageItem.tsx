import React from "react";
import { CatImage } from "../../../types/catType";
import { useCatContext } from "../../Home/Home";

interface ImageItemType {
  item: CatImage;
}

const ImageItem: React.FC<ImageItemType> = ({ item }) => {
  const { favourites,toggleFavourite } = useCatContext();
  const isFavourite = favourites.includes(item.id);

  const handleClick = () => {
    toggleFavourite(item.id)
  }

  return (
    <div className="flex flex-col h-80 border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-5/6 bg-gray-100">
        <img
          src={item.url}
          alt={item.breeds && item.breeds[0]?.name || 'Cat Image'}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-between items-center p-2 bg-white h-1/6">
        <span className="text-gray-800 font-medium text-sm truncate">
          {item.breeds && item.breeds[0]?.name ? item.breeds[0].name : "No Name Available"}
        </span>

        <svg
          className="cursor-pointer"
          fill={isFavourite ? "red" : "none"}
          height="25px"
          width="27px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 51.997 51.997"
          stroke="red"
          strokeWidth="2"
          onClick={handleClick}
        >
          <path
            d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
            c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
            c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
            C52.216,18.553,51.97,16.611,51.911,16.242z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ImageItem;
