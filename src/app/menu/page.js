"use client";
import { useEffect, useState, useRef } from "react";
import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import { categories, menuItems } from "@/components/menu/MenuList";
export default function MenuPage() {
  // const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  console.log("menujjj", menuItems);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const scrollEnabledRef = useRef(true);
  const activeCategoryRef = useRef("");

  useEffect(() => {
    scrollEnabledRef.current = scrollEnabled;
  }, [scrollEnabled]);

  useEffect(() => {
    activeCategoryRef.current = activeCategory;
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollEnabledRef.current) return;

      const categorySections = document.querySelectorAll(".category-section");
      let newActiveCategory = activeCategoryRef.current;

      categorySections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
          newActiveCategory = section.id;
        }
      });

      if (newActiveCategory !== activeCategoryRef.current) {
        setActiveCategory(newActiveCategory);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document?.getElementById(id);
    if (section) {
      const categoryContainerHeight =
        document.querySelector(".menu-container")?.offsetHeight || 0;
      const sectionTop = section.offsetTop;

      window.scrollTo({
        top: sectionTop - categoryContainerHeight,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (categoryName) => {
    setScrollEnabled(false);
    setActiveCategory(categoryName);
    scrollToSection(categoryName.toLowerCase());

    setTimeout(() => {
      setScrollEnabled(true);
    }, 800);
  };

  return (
    <section className="mt-8">
      <div className="menu-container bg-gray-200 shadow-lg shadow-gray-200/200 mb-10 hidden lg:block sm:block pb-1">
        <div className="grid sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 mt-6 mb-12">
          {categories?.map((category) => (
            <button
              key={category._id}
              type="button"
              className={`mt-4 rounded-full w-40 px-8 py-2 ml-3 ${
                activeCategory === category.name.toLowerCase()
                  ? "bg-[#FFA500] text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handleClick(category.name.toLowerCase())}
            >
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
      {categories?.map((c) => (
        <div key={c._id}>
          <div
            className="text-center category-section mb-14"
            id={c.name.toLowerCase()}
          >
            <SectionHeaders mainHeader={c.name} />
          </div>
          <div className="grid sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 mb-36">
            {/* {menuItems
              .filter((item) => item.category === c._id)
              .map((item) => (
                <MenuItem key={item._id} {...item} />
              ))} */}
            {(() => {
              const filteredItems = menuItems.filter(
                (item) => item.category.toLowerCase() === c.name.toLowerCase()
              );

              console.log("Filtered Items:", filteredItems); // <-- Console log here

              return filteredItems.map((item) => (
                // <MenuItem key={item._id} {...item} />
                <MenuItem key={item._id} menuItem={item} />
              ));
            })()}
          </div>
        </div>
      ))}
    </section>
  );
}
