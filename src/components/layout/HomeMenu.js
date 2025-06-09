"use client";
import MenuItem from "@/components/menu/MenuItem";

import { useEffect, useState } from "react";
import Loader from "@/components/icons/Loader";
export default function HomeMenu() {
  const [loading, setLoading] = useState(true);

  const mockMenuItems = [
    {
      _id: "1",
      name: "Broast",
      description:
        "Golden-fried, juicy, and seasoned to perfection – taste the crunch you’ll crave!",
      basePrice: 700,
      image: "/broastt1.jpg",
      category: "broast",
      sizes: [
        { _id: "s1", name: "Quater", price: 0 },
        { _id: "s2", name: "Half Broast", price: 500 },
        { _id: "s3", name: "Full Broast", price: 1600 },
      ],
    },
    {
      _id: "2",
      name: "Special Pizza",
      description:
        "A Special Pizza is a term used to describe a pizza that typically features a combination of various toppings, making it a more elaborate and flavorful option than a standard pizza. The toppings included on a Special Pizza can vary depending on the preferences of the pizzeria or the customer, but they often include a mix of meats, vegetables, and sometimes even unique ingredients or gourmet toppings. Common toppings found on a Special Pizza may include pepperoni, sausage, mushrooms, onions, bell peppers, olives, tomatoes, and various types of cheese. Some Special Pizzas may also feature premium toppings such as prosciutto, artichoke hearts, sun-dried tomatoes, or truffle oil",
      basePrice: 750,
      image: "/pizza11.jpg",
      category: "pizza",
      sizes: [
        { _id: "s1", name: "small", price: 0 },
        { _id: "s2", name: "medium", price: 500 },
        { _id: "s3", name: "Large", price: 900 },
      ],
      extraIngredientPrices: [
        { _id: "s1", name: "Extra Topping Cheese small", price: 150 },
        { _id: "s2", name: "Extra Topping Cheese medium", price: 200 },
        { _id: "s3", name: "Extra Topping Cheese large", price: 250 },
        { _id: "s4", name: "Extra Topping Chicken small", price: 150 },
        { _id: "s5", name: "Extra Topping Chicken medium", price: 200 },
        { _id: "s6", name: "Extra Topping Chicken large", price: 250 },
      ],
    },
    {
      _id: "3",
      name: "Behari Kabab Pizza",
      description:
        "Behari Kabab Pizza is a flavorful fusion dish that combines elements of South Asian cuisine with the beloved Italian classic, pizza. In this unique creation, the pizza crust is typically topped with Bihari kabab, a spiced and marinated meat dish originating from the Bihar region of India. Bihari kabab is known for its tender texture and aromatic spices, often including ingredients like ginger, garlic, cumin, coriander, and chili powder.        ",
      basePrice: 800,
      image: "/BP.jpg",
      category: "pizza",
      sizes: [
        { _id: "s1", name: "small", price: 0 },
        { _id: "s2", name: "medium", price: 500 },
        { _id: "s3", name: "Large", price: 900 },
      ],
      extraIngredientPrices: [
        { _id: "s1", name: "Extra Topping Cheese small", price: 150 },
        { _id: "s2", name: "Extra Topping Cheese medium", price: 200 },
        { _id: "s3", name: "Extra Topping Cheese large", price: 250 },
        { _id: "s4", name: "Extra Topping Chicken small", price: 150 },
        { _id: "s5", name: "Extra Topping Chicken medium", price: 200 },
        { _id: "s6", name: "Extra Topping Chicken large", price: 250 },
      ],
    },
    {
      _id: "4",
      name: "Chicken Supreme Pizza",
      description:
        "Chicken Supreme Pizza include bell peppers, onions, mushrooms, and sometimes tomatoes or olives. Additional toppings such as pepperoni, bacon, or sausage may also be included for extra flavor. The pizza is then baked until the crust is golden and crispy, resulting in a satisfying and flavorful meal that is enjoyed by pizza lovers everywhere",
      basePrice: 700,
      image: "/SP.jpg",
      category: "pizza",
      sizes: [
        { _id: "s1", name: "small", price: 0 },
        { _id: "s2", name: "medium", price: 500 },
        { _id: "s3", name: "Large", price: 900 },
      ],
      extraIngredientPrices: [
        { _id: "s1", name: "Extra Topping Cheese small", price: 150 },
        { _id: "s2", name: "Extra Topping Cheese medium", price: 200 },
        { _id: "s3", name: "Extra Topping Cheese large", price: 250 },
        { _id: "s4", name: "Extra Topping Chicken small", price: 150 },
        { _id: "s5", name: "Extra Topping Chicken medium", price: 200 },
        { _id: "s6", name: "Extra Topping Chicken large", price: 250 },
      ],
    },
    {
      _id: "5",
      name: "Crown Crust Pizza",
      description:
        "A Crown Crust Pizza is a unique and indulgent pizza variant that features a special crust filled with a complementary or contrasting flavor to the toppings. In this type of pizza, the crust is typically stuffed with a flavorful filling such as cheese, sausage, or even mini cheeseburgers or chicken nuggets, depending on the specific variation offered by the pizza chain. The toppings on the pizza can vary widely and may include classic ingredients such as tomato sauce, cheese, pepperoni, vegetables, and meats. The Crown Crust Pizza is known for its innovative and decadent crust, which adds an extra layer of flavor and excitement to the traditional pizza experience.",
      basePrice: 800,
      image: "/CCP.webp",
      category: "pizza",
      sizes: [
        { _id: "s1", name: "small", price: 0 },
        { _id: "s2", name: "medium", price: 500 },
        { _id: "s3", name: "Large", price: 900 },
      ],
      extraIngredientPrices: [
        { _id: "s1", name: "Extra Topping Cheese small", price: 150 },
        { _id: "s2", name: "Extra Topping Cheese medium", price: 200 },
        { _id: "s3", name: "Extra Topping Cheese large", price: 250 },
        { _id: "s4", name: "Extra Topping Chicken small", price: 150 },
        { _id: "s5", name: "Extra Topping Chicken medium", price: 200 },
        { _id: "s6", name: "Extra Topping Chicken large", price: 250 },
      ],
    },
    {
      _id: "6",
      name: "Tarragon Steak",
      description:
        "Tarragon Steak is a dish featuring a tender steak seasoned with aromatic tarragon herb. The steak is typically seasoned with salt, pepper, and fresh or dried tarragon before being grilled, broiled, or pan-seared to desired doneness.",
      basePrice: 1050,
      image: "/TSTEAK.jpg",
      category: "steak",
    },
    {
      _id: "15",
      name: "Mushroom Steak",
      description:
        "A Grilled Chicken and Cheese Sandwich is a delicious combination of tender grilled chicken and melted cheese sandwiched between two slices of bread. The grilled chicken is typically seasoned with herbs and spices, then grilled until cooked through and flavorful.",
      basePrice: 1050,
      image: "/MS.jpg",
      category: "steak",
    },
    {
      _id: "15",
      name: "Tarragon Chicken Steak",
      description:
        "Tarragon Steak is a dish featuring a tender steak seasoned with aromatic tarragon herb. The steak is typically seasoned with salt, pepper, and fresh or dried tarragon before being grilled, broiled, or pan-seared to desired doneness.",
      basePrice: 1050,
      image: "/TCS.png",
      category: "steak",
    },
    {
      _id: "7",
      name: "Shami Burger",
      description:
        "Shami Burger is a flavorful and spicy burger that features a patty made from Shami kebab",
      basePrice: 250,
      image: "/SB.jpg",
      category: "burger",
    },
    {
      _id: "8",
      name: "Yum Pum Burger",
      description:
        "Yum Pum Burger is a flavorful burger featuring a juicy beef patty topped with tangy barbecue sauce, melted cheese, crispy bacon, and fresh lettuce and tomato, all nestled within a soft sesame seed bun. It's a mouthwatering delight that satisfies cravings with every bite.",
      basePrice: 550,
      image: "/YPB.jpg",
      category: "burger",
    },
    {
      _id: "10",
      name: "Fish Burger(Seasonal)",
      description:
        "A Fish Burger is a delicious sandwich made with a breaded or battered fish fillet, typically deep-fried until golden and crispy. It's served on a soft bun and often accompanied by lettuce, tomato, tartar sauce, and sometimes cheese. This burger offers a flavorful alternative to traditional meat-based burgers and is enjoyed by seafood lovers looking for a tasty and satisfying meal.",
      basePrice: 750,
      image: "/FB.jpg",
      category: "burger",
    },
    {
      _id: "9",
      name: "Shawarma Platter",
      description:
        "A Shawarma Platter typically consists of thinly sliced, marinated meat—such as chicken, beef, or lamb—that has been cooked on a vertical rotisserie. The meat is served on a large platter alongside accompaniments such as rice, salad, pickled vegetables, hummus, tahini sauce, and pita bread or flatbread..",
      basePrice: 630,
      image: "/SPLATER.jpg",
      category: "wrap",
    },
    {
      _id: "11",
      name: "Fettuccine Alfredo",
      description:
        "Fettuccine Alfredo is a classic Italian pasta dish made with long, flat noodles (fettuccine) tossed in a creamy sauce made from butter, heavy cream, and Parmesan cheese.",
      basePrice: 750,
      image: "/FAPASTA.jpg",
      category: "pasta",
    },
    {
      _id: "12",
      name: "Crispy Chicken Stripes",
      description:
        "Chicken Stripe Wings could potentially refer to chicken wings that have been prepared.",
      basePrice: 350,
      image: "/CWS.png",
      category: "appetizer",
      sizes: [
        { _id: "s1", name: "5-Pieces", price: 0 },
        { _id: "s2", name: "10-Pieces", price: 330 },
      ],
    },
    {
      _id: "13",
      name: "Chicken Chowmein",
      description:
        "Chicken Chow Mein is a classic Chinese dish featuring stir-fried noodles tossed with tender pieces of chicken, crisp vegetables, and a savory sauce. The dish typically starts with marinating chicken strips in a mixture of soy sauce, garlic, ginger, and other seasonings.",
      basePrice: 680,
      image: "/CC.jpg",
      category: "chowmein",
    },
    // {
    //   _id: "14",
    //   name: "Grilled Chicken and Cheese Sandwich",
    //   description:
    //     "A Grilled Chicken and Cheese Sandwich is a delicious combination of tender grilled chicken and melted cheese sandwiched between two slices of bread. The grilled chicken is typically seasoned with herbs and spices, then grilled until cooked through and flavorful.",
    //   basePrice: 520,
    //   image: "/GCCS.png",
    //   category: "sandwhich",
    // },
  ];
  return (
    <section className="mt-14">
      <div className="text-center text-[#FFA500] font-bold text-4xl italic mb-12">
        Our Best Sellers
      </div>
      <div className="grid sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 mb-12">
        {mockMenuItems.map((item) => (
          <MenuItem key={item._id} menuItem={item} />
        ))}
      </div>
    </section>
  );
}
