import React from "react";
import ImageItem from "./ImageItem/ImageItem";
import { useCatContext } from "../Home/Home";

const ImagesPage = () => {
  const { catFetch } = useCatContext();
  const { data, isLoading, isError } = catFetch;
  console.log(data)
  return (
    <div className=" mt-5 border border-black p-9 rounded-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
        {isLoading && (<div>...loading</div>)}
        {!isLoading && data?.map((elem:any,i:any) => (
          <ImageItem item={elem} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default ImagesPage;
