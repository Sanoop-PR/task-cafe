import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router";
import { baseUrl } from "../lib/baseUrl";
import { IItem } from "../lib/type";

function MenuItems() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const title = urlParams.get('title');

  // Check if the title is null or empty, and handle it accordingly
  if (!title) {
    return <div>No title provided in the URL</div>;
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allMenuItems", title], // Adding title to the queryKey to invalidate the cache when it changes
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/item/${title}`);
      return res.data;
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="min-h-96 text-white">
      <h1 className="text-3xl sm:text-5xl text-center font-bold [text-shadow:_4px_3px_0px_rgba(253,8,8,0.89)] max-sm:py-15 uppercase">{title}</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data && data ? (
          data.map((item: IItem, index: number) => (
            <div key={index}>
              <div className="flex justify-between items-center text-xl font-bold">
                <h1 className="uppercase flex-1">{item.title}</h1>
                <span>${item.price}</span>
              </div>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))
        ) : (
          <div>No menu items available.</div>
        )}
      </section>
    </main>
  );
}

export default MenuItems;
