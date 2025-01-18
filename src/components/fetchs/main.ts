export const fetchCats = async (breedIds: string[], apiKey: string) => {
  const queryParam = breedIds.length > 0 ? `breed_ids=${breedIds.join(",")}` : "";
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?${queryParam}&limit=50`, // Add your filters as query params
    {
      headers: {
        "x-api-key": apiKey,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cat images");
  }

  return response.json();
};