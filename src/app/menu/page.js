"use client";

// import SectionHeaders from "@/components/layout/SectionHeaders";
// import MenuItem from "@/components/menu/MenuItem";
// import { useEffect, useState } from "react";

// export default function MenuPage() {
//   const [categories, setCategories] = useState([]);
//   const [menuItems, setMenuItems] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("");
//   const [scrollEnabled, setScrollEnabled] = useState(true);

//   useEffect(() => {
//     fetch("/api/categories").then((res) => {
//       res.json().then((categories) => setCategories(categories));
//     });
//     fetch("/api/menu-items").then((res) => {
//       res.json().then((menuItems) => setMenuItems(menuItems));
//     });
//   }, []);


//   useEffect(() => {
//     if (categories.length > 0) {
//       setActiveCategory(categories[0].name.toLowerCase());
//     }
//   }, [categories]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (scrollEnabled) {
//         const categorySections = document.querySelectorAll(".category-section");
//         categorySections.forEach((section) => {
//           const rect = section.getBoundingClientRect();
//           if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//             setActiveCategory(section.id);
//           }
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrollEnabled]);

//   const handleClick = (categoryName) => {
//     setActiveCategory(categoryName);
//     scrollToSection(categoryName.toLowerCase());
//     setScrollEnabled(false);
//     setTimeout(() => {
//       setScrollEnabled(true);
//     }, 1000)
//   };

//   const categoryContainerHeight =
//     document.querySelector(".menu-container")?.offsetHeight;

//   const scrollToSection = (id) => {
//     const section = document?.getElementById(id);
//     if (section) {
//       const sectionTop = section.offsetTop;
//       window.scrollTo({
//         top: sectionTop - categoryContainerHeight,
//         behavior: "smooth",
//       });
//     }
//   };
//   return (
//     <section className="mt-8">
//       <div className="menu-container bg-gray-200 shadow-lg shadow-gray-200/200 mb-10 hidden lg:block sm:block pb-1">
//         <div className="grid sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 mt-6 mb-12">
//           {categories?.map((category) => (
//             <button
//               key={category._id}
//               type="button"
//               className={`mt-4 rounded-full w-40 px-8 py-2 ml-3 ${
//                 activeCategory === category.name.toLowerCase()
//                   ? "bg-[#FFA500] text-white"
//                   : "bg-gray-200"
//               }`}
//               onClick={() => handleClick(category.name.toLowerCase())}
//             >
//               <span>{category.name}</span>
//             </button>
//           ))}
//         </div>
//       </div>
//       {categories?.length > 0 &&
//         categories.map((c) => (
//           <div key={c._id}>
//             <div className="text-center category-section mb-14" id={c.name.toLowerCase()}>
//               <SectionHeaders mainHeader={c.name} />
//             </div>
//             <div className="grid sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 mb-36">
//               {menuItems
//                 .filter((item) => item.category === c._id)
//                 .map((item) => (
//                   <MenuItem key={item._id} {...item} />
//                 ))}
//             </div>
//           </div>
//         ))}
//     </section>
//   );
// }
import { useEffect, useState } from "react";

import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";

export default function MenuPage() {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [scrollEnabled, setScrollEnabled] = useState(true);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((categories) => setCategories(categories));

    fetch("/api/menu-items")
      .then((res) => res.json())
      .then((menuItems) => setMenuItems(menuItems));
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategory(categories[0].name.toLowerCase());
    }
  }, [categories]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollEnabled) {
        const categorySections = document.querySelectorAll(".category-section");
        categorySections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setActiveCategory(section.id);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollEnabled]);

  const handleClick = (categoryName) => {
    setActiveCategory(categoryName);
    scrollToSection(categoryName.toLowerCase());
    setScrollEnabled(false);
    setTimeout(() => {
      setScrollEnabled(true);
    }, 1000);
  };

  const scrollToSection = (id) => {
    const section = document?.getElementById(id);
    if (section) {
      const categoryContainerHeight = document.querySelector(".menu-container")?.offsetHeight;
      const sectionTop = section.offsetTop;
      window.scrollTo({
        top: sectionTop - categoryContainerHeight,
        behavior: "smooth",
      });
    }
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
          <div className="text-center category-section mb-14" id={c.name.toLowerCase()}>
            <SectionHeaders mainHeader={c.name} />
          </div>
          <div className="grid sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 mb-36">
            {menuItems
              .filter((item) => item.category === c._id)
              .map((item) => (
                <MenuItem key={item._id} {...item} />
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
