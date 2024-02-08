"use client";
import MenuItem from "@/components/menu/MenuItem";

import { useEffect, useState } from "react";
import Loader from "@/components/icons/Loader";
export default function HomeMenu() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch("/api/categories");
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        const menuItemsResponse = await fetch("/api/menu-items");
        const menuItemsData = await menuItemsResponse.json();
        setMenuItems(menuItemsData);

        setLoading(false);
       
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const dealsCategory = categories.find(
    (category) => category.name === "Deals"
  );
  return (
    <section className="mt-14">
      <div className="text-center text-[#FFA500] font-bold text-4xl italic mb-12">
        Our Best Sellers
      </div>
      {loading ? (
        <div className="flex items-center justify-center" style={{width:"100%"}}>
          <Loader />
        </div>
      ) : (
        <div className="grid sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 mb-12">
          {menuItems
            ?.filter((item) => item.category === dealsCategory._id)
            .map((item) => (
              <MenuItem key={item._id} {...item} />
            ))}
        </div>
      )}
    </section>
  );
}
