import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import DropDown, { Breed } from "./dropdown/Dropdown";
import { breeds } from "../../data/breeds";
import { useQuery, UseQueryResult } from "react-query";
import { fetchCats } from "../fetchs/main";

export interface CatContextType {
  filters: Breed[];
  catFetch: UseQueryResult<any, unknown>;
  favourites: string[];
  toggleFavourite: (value: string) => void

}

const CatContext = createContext<CatContextType | null>(null);

export const useCatContext = (): CatContextType => {
  const context = useContext(CatContext);

  if (!context) {
    throw new Error("useCatContext must be used with a CatContext.Provider");
  }
  return context;
  
};

const Home = () => {    
  const [filters, setFilters] = useState<Breed[]>([]);
  const apiKey =
"live_CSt5mccR05NCebfAkLzp8yvQGcgw1WxQf5jWDcrNHrupajoTn6El9yMAvgM2FDgG";
  const [favourites,setFavourites] = useState<string[]>([])

  const breedIds = filters.map((filter) => filter.id);

  const catFetch = useQuery(
    ["cats", breedIds],
    () => fetchCats(breedIds, apiKey),
    {
      enabled: true,
    }
  );

  const toggleFavourite = (id: string) => {
    setFavourites((prev) => {
      const isFavourite = prev.includes(id);
      const updatedFavourites = isFavourite
        ? prev.filter((favId) => favId !== id) 
        : [...prev, id]; 

      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      return updatedFavourites;
    });
  };

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  const handleFilterChange = (value: Breed) => {
    const newFilters =
      filters.findIndex((f) => f.breed === value.breed) !== -1
        ? filters.filter((d) => d.breed !== value.breed)
        : [...filters, value];

    setFilters(newFilters);
  };

  return (
    <CatContext.Provider value={{ filters, catFetch,favourites, toggleFavourite }}>
      <div className="flex flex-col">
        <header className="flex flex-row justify-center gap-5 p-4 border-b">
          <Link
            to="images"
            className="block border-solid border-black border rounded-md p-5"
          >
            Images
          </Link>
          <Link
            to="Favorite"
            className="block border-solid border-black border rounded-md p-5"
          >
            Favorite
          </Link>
        </header>
        <div className=" flex-1 pt-5 px-5">
          <div>
            <DropDown
              list={breeds}
              onChange={handleFilterChange}
              selectedValue={filters}
            />
          </div>
          <Outlet/>
        </div>
      </div>
    </CatContext.Provider>
  );
};

export default Home;
