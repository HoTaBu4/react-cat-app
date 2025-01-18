import ImageItem from "./ImageItem/ImageItem";
import { useCatContext } from "../Home/Home";
import DropDown from "../Home/dropdown/Dropdown";
import { breeds } from "../../data/breeds";

const ImagesPage = () => {
  const { catFetch,filters,handleFilterChange } = useCatContext();
  const { data, isLoading } = catFetch;
  return (
    <div className=" mt-5 border border-black p-9 rounded-md">
      <DropDown 
        list={breeds}
        selectedValue={filters}
        onChange={handleFilterChange}
      />
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
