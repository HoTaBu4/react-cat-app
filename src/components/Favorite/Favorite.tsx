import { useEffect } from "react";
import { useCatContext } from "../Home/Home";
import ImageItem from "../ImagesPage/ImageItem/ImageItem";
import { CatImage } from "../../types/catType";
import { useQuery, useQueryClient } from "react-query";
import { fetchCatById } from "../fetchs/main";

const Favorite = () => {
  const { favourites } = useCatContext();
  const queryClient = useQueryClient();

  const query = useQuery(
    ['favoriteCats', favourites],
    () =>
      Promise.all(
        favourites.map(id => fetchCatById(id))
      ),
    {
      enabled: favourites.length > 0,
      retry: false,
    }
  );

  const { data: favoriteImages, isLoading, isError} = query;

  useEffect(() => {
    if (favourites.length === 0) {
      queryClient.setQueryData(['favoriteCats', favourites], []);
    }
  }, [favourites, queryClient]);

  return (
    <div className="mt-5 border border-black p-9 rounded-md">
      <h1 className="text-xl font-bold mb-5">Favorite Cats</h1>

      {isLoading && <div>Loading favorites...</div>}
      {isError && <div className="text-red-500">Failed to load favorite images.</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
        {favoriteImages && favoriteImages.length > 0 ? (
          favoriteImages.map((image: CatImage) => (
            <ImageItem item={image} key={image.id} />
          ))
        ) : (
          !isLoading && !isError && (
            <div>No favorite images yet.</div>
          )
        )}
      </div>
    </div>
  );
};

export default Favorite;
