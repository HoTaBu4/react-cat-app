import React, { useEffect, useState } from "react";
import { useCatContext } from "../Home/Home";
import ImageItem from "../ImagesPage/ImageItem/ImageItem";

const Favorite = () => {
  const { favourites } = useCatContext();
  const [favoriteImages, setFavoriteImages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (favourites.length > 0) {
      const fetchFavorites = async () => {
        setIsLoading(true);
        setError(null);

        try {
          const responses = await Promise.all(
            favourites.map((id) =>
              fetch(`https://api.thecatapi.com/v1/images/${id}`).then((res) => res.json())
            )
          );

          setFavoriteImages(responses);
        } catch (err) {
          setError("Failed to load favorite images.");
        } finally {
          setIsLoading(false);
        }
      };

      fetchFavorites();
    }
  }, [favourites]);


  return (
    <div className="mt-5 border border-black p-9 rounded-md">
    <h1 className="text-xl font-bold mb-5">Favorite Cats</h1>

    {isLoading && <div>Loading favorites...</div>}
    {error && <div className="text-red-500">{error}</div>}

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
      {favoriteImages.map((image) => (
        <ImageItem item={image} key={image.id}/>
      ))}

      {!isLoading && !error && favoriteImages.length === 0 && (
        <div>No favorite images yet.</div>
      )}
    </div>
  </div>
  );
};

export default Favorite;
