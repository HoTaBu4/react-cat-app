
const apiKey =
"live_CSt5mccR05NCebfAkLzp8yvQGcgw1WxQf5jWDcrNHrupajoTn6El9yMAvgM2FDgG";

export const fetchCats = async (breedIds: string[]) => {
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

export const fetchCatById = async (id: string) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/${id}`, 
    {
      headers: {
        "x-api-key": apiKey,  // Assuming apiKey is defined elsewhere in your project
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cat image by ID");
  }

  return response.json();
};