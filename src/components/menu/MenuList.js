// components/menu/categories.js

export const categories = [
  { _id: "1", name: "Soup" },
  { _id: "2", name: "Pizza" },
  { _id: "3", name: "Broast" },
  { _id: "4", name: "Fries" },
  { _id: "5", name: "Appetizer" },
  { _id: "6", name: "Burger" },
  { _id: "7", name: "Wrap" },
  { _id: "8", name: "Pasta" },
  { _id: "9", name: "Steak" },
  { _id: "10", name: "Chowmein" },
  { _id: "11", name: "Sandwich" },
];

export const menuItems = [
  //Soup
  {
    _id: "c1",
    name: "Chicken Corn Soup",
    description:
      "Chicken corn soup is a comforting and flavorful dish that combines tender chicken with sweet corn kernels in a rich, savory broth    ",
    basePrice: 280,
    image: "/CCS.webp",
    category: "soup",
    sizes: [
      { _id: "s1", name: "Single", price: 0 },
      { _id: "s2", name: "Family Bowl", price: 820 },
    ],
  },
  {
    _id: "c2",
    name: "Hot and Sour Soup",
    description:
      "white pepper, soy sauce, and sometimes chili paste or chili oil for an extra kick of heat",
    basePrice: 290,
    image: "/HSS.jpg",
    category: "soup",
    sizes: [
      { _id: "s1", name: "Single", price: 0 },
      { _id: "s2", name: "Family Bowl", price: 850 },
    ],
  },
  //Broast
  {
    _id: "1",
    name: "Broast",
    description:
      "Golden-fried, juicy, and seasoned to perfection – taste the crunch you’ll crave!",
    basePrice: 700,
    image: "/broastt1.jpg",
    category: "broast",
    sizes: [
      {
        _id: "s1",
        name: "Quater 1-Leg, 1-Thigh",
        price: 0,
      },
      {
        _id: "s2",
        name: "Half Broast 1-Leg, 1-Thigh, 1-Breast, 1-Wing, 1-Bun, 1-fries, 2-Dips",
        price: 500,
      },
      {
        _id: "s3",
        name: "Full Broast 2-Leg, 2-Thigh, 2-Breast, 2-Wing, 2-Bun, 2-fries, 4-Dips",
        price: 1600,
      },
    ],
  },

  //Pizza
  {
    _id: "p1",
    name: "Vegetarian Pizza",
    description:
      "A Vegetarian Pizza is a delicious pizza that does not contain any meat or animal products. Instead, it is topped with a variety of flavorful vegetables and other vegetarian-friendly ingredients. Common toppings for a Vegetarian Pizza include bell peppers, onions, mushrooms, tomatoes, olives, artichoke hearts, spinach, and fresh herbs. Cheese, such as mozzarella or feta, is often used to add creaminess and richness to the pizza. The crust can be either traditional pizza dough or a whole wheat or gluten-free crust for those with dietary restriction",
    basePrice: 600,
    image: "/VP.webp",
    category: "pizza",
    sizes: [
      { _id: "s1", name: "small", price: 0 },
      { _id: "s2", name: "medium", price: 450 },
      { _id: "s3", name: "Large", price: 750 },
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
    _id: "p2",
    name: "Cheese Lover  Pizza",
    description:
      "A Cheese Lover Pizza is a pizza that caters specifically to cheese enthusiasts, featuring an abundance of cheese as the main focus. This type of pizza typically starts with a traditional pizza crust, onto which a variety of cheeses are generously layered. Common cheeses used in a Cheese Lover Pizza include mozzarella, cheddar, parmesan, provolone, and sometimes even blue cheese or goat cheese for added flavor complexity. Some versions of the pizza may also include a cheese-stuffed crust for an extra indulgent experience",
    basePrice: 600,
    image: "/CP.jpg",
    category: "pizza",
    sizes: [
      { _id: "s1", name: "small", price: 0 },
      { _id: "s2", name: "medium", price: 450 },
      { _id: "s3", name: "Large", price: 750 },
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
    _id: "p3",
    name: "Tikka  Pizza",
    description:
      "Tikka Pizza is a fusion dish that combines elements of South Asian cuisine with the popular Italian dish, pizza. In this unique creation, the pizza crust is typically topped with chicken tikka, a flavorful and marinated chicken dish commonly found in Indian and Pakistani cuisine. To make Tikka Pizza, the pizza dough is rolled out and spread with a layer of tomato sauce or a yogurt-based sauce infused with spices. Cooked pieces of chicken tikka, which are marinated in a mixture of yogurt and various spices such as ginger, garlic, cumin, coriander, and chili powder, are then scattered over the sauce",
    basePrice: 650,
    image: "/TP.webp",
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
    _id: "p4",
    name: "Fajita  Pizza",
    description:
      "Fajita Pizza is a delicious fusion dish that combines elements of Mexican cuisine with the popular Italian dish, pizza. In this unique creation, the pizza crust is typically topped with ingredients inspired by traditional fajitas. To make Fajita Pizza, the pizza dough is rolled out and spread with a layer of salsa or enchilada sauce, providing a flavorful base. Cooked strips of seasoned chicken or beef, along with sautéed bell peppers and onions, are then scattered over the sauce. Additional toppings such as sliced jalapeños, black olives, and shredded cheese may be added for extra flavor and heat.",
    basePrice: 650,
    image: "/FP.webp",
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
    _id: "p3",
    name: "Mexican  Pizza",
    description:
      "A Mexican Pizza is a delicious variation of pizza that incorporates flavors and ingredients commonly found in Mexican cuisine. This pizza typically starts with a crispy tortilla or pizza dough base, which is then topped with seasoned ground beef or shredded chicken, refried beans, salsa, and shredded cheese",
    basePrice: 700,
    image: "/MP.jpg",
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
    _id: "p4",
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
    _id: "p6",
    name: "Peri Peri Pizza",
    description:
      "Chicken Supreme Pizza include bell peppers, onions, mushrooms, and sometimes tomatoes or olives. Additional toppings such as pepperoni, bacon, or sausage may also be included for extra flavor. The pizza is then baked until the crust is golden and crispy, resulting in a satisfying and flavorful meal that is enjoyed by pizza lovers everywhere",
    basePrice: 700,
    image: "/PPP.jpeg",
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
    _id: "p7",
    name: "Grill-X Special Pizza",
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
    _id: "p8",
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
    _id: "p9",
    name: "Malai Boti Pizza",
    description:
      "Malai Boti Pizza is a fusion dish that blends elements of Pakistani or Indian cuisine with the popular Italian dish, pizza. In this unique creation, the pizza crust is typically topped with Malai Boti, a creamy and flavorful marinated chicken dish. To make Malai Boti Pizza, the pizza crust is first spread with a layer of creamy sauce, often made with yogurt, cream, and spices such as ginger, garlic, cumin, coriander, and chili powder. The cooked Malai Boti, which is marinated in a mixture of yogurt, cream, and various spices to impart a rich and savory flavor, is then arranged on top of the sauce.",
    basePrice: 800,
    image: "/MBP.jpg",
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
    _id: "p10",
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
    _id: "p11",
    name: "Kabab Stuffer Pizza",
    description:
      "Kababs meet pizza in this delicious fusion dish, packed with flavorful, spiced meat inside a crispy pizza crust.Each bite delivers juicy kabab goodness combined with melted cheese and zesty tomato sauce.Perfectly seasoned with traditional spices, it offers a rich and satisfying taste experience.Ideal for those craving a hearty, indulgent meal that blends two favorite comfort foods.",
    basePrice: 800,
    image: "/KSP.webp",
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

  //Steak
  {
    _id: "s6",
    name: "Tarragon Chicken Steak",
    description:
      "Tarragon Steak is a dish featuring a tender steak seasoned with aromatic tarragon herb. The steak is typically seasoned with salt, pepper, and fresh or dried tarragon before being grilled, broiled, or pan-seared to desired doneness.",
    basePrice: 1050,
    image: "/TSTEAK.jpg",
    category: "steak",
  },
  {
    _id: "s15",
    name: "Moroccan Chicken Steak",
    description:
      "A tender, juicy **chicken breast** is marinated in bold **Moroccan spices** like cumin, paprika, garlic, and coriander, then grilled to perfection. The steak is full of smoky, earthy flavor with a hint of citrus. Served with a side of **roasted vegetables**, **herbed couscous**, or a light **yogurt sauce**, this dish brings the vibrant taste of Morocco to your plate.",
    basePrice: 1050,
    image: "/MCS.jpg",
    category: "steak",
  },
  {
    _id: "s95",
    name: "Garlic Chicken Mushroom Steak",
    description:
      "Garlic Mushroom Steak is a delectable dish featuring a tender steak topped with savory garlic-infused mushrooms. The steak is typically seasoned with salt, pepper, and minced garlic before being grilled, broiled, or pan-seared to desired doneness. Meanwhile, sliced mushrooms are sautéed with garlic, butter, and perhaps some herbs like thyme or rosemary until golden and tender..",
    basePrice: 1050,
    image: "/GCMS.jpg",
    category: "steak",
  },
  {
    _id: "s50",
    name: "Chicken Mushroom Steak",
    description:
      "Mushroom Steak is a savory dish featuring a tender steak accompanied by a generous serving of sautéed mushrooms. The steak is typically seasoned with salt, pepper, and any desired herbs or spices before being grilled, broiled, or pan-seared to perfection.",
    basePrice: 1050,
    image: "/MSS.jpeg",
    category: "steak",
  },
  {
    _id: "s50",
    name: "Chicken Pepper Steak",
    description:
      "Pepper Steak is a dish featuring tender strips of beef cooked with bell peppers, onions, and a flavorful sauce. The beef is typically seasoned with salt, pepper, and sometimes other spices before being stir-fried or sautéed until browned and cooked to desired doneness. accompanied by a generous serving of sautéed mushrooms. The steak is typically seasoned with salt, pepper, and any desired herbs or spices before being grilled, broiled, or pan-seared to perfection.",
    basePrice: 1050,
    image: "/PS.webp",
    category: "steak",
  },

  //Burger
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
    _id: "b2",
    name: "Bun Plaster",
    description:
      "Bun Pluster appears to be a term that is not widely recognized or commonly used in English. It's possible that it might be a regional or niche term specific to a certain cuisine or context",
    basePrice: 260,
    image: "/BPB.jpg",
    category: "burger",
  },
  {
    _id: "b3",
    name: "Patty Burger",
    description:
      "A thick, juicy **beef patty** sits between two soft, toasted **burger buns**, slightly glossy from melted butter. The patty is grilled to perfection with seared edges and tender, flavorful meat. Topped with **melted cheddar cheese**, crisp **lettuce**, fresh **tomato slices**, **pickles**, and a drizzle of **burger sauce**, the burger is stacked high and ready to be enjoyed. The top bun is gently pressed down, holding everything together in a perfect handheld meal.",
    basePrice: 310,
    image: "/PB.jpg",
    category: "burger",
  },
  {
    _id: "b4",
    name: "Chicken Fajita Burger",
    description:
      "A tender, grilled chicken breast is marinated in fajita spices, bursting with smoky, zesty flavor. It’s stacked in a soft, toasted burger bun with sautéed bell peppers and onions, adding a colorful, savory crunch. A layer of melty cheese and a spoonful of creamy chipotle sauce tie it all together, making this burger a bold fusion of fajita and classic sandwich goodness.",
    basePrice: 380,
    image: "/FBB.jpg",
    category: "burger",
  },
  {
    _id: "b5",
    name: "Zinger Burger",
    description:
      "A Zinger Burger is a spicy and flavorful chicken sandwich typically consisting of a crispy breaded chicken fillet seasoned with a blend of spices, served on a soft bun with lettuce, mayonnaise or spicy sauce, and sometimes topped with cheese and pickles..",
    basePrice: 450,
    image: "/ZB.jpg",
    category: "burger",
  },
  {
    _id: "b6",
    name: "Crispy Crunch Burger",
    description:
      "A perfectly fried crispy chicken fillet is the star of this burger, coated in a golden, crunchy batter that delivers a satisfying bite. It's stacked inside a soft, toasted bun with fresh lettuce, tomato slices, and a layer of creamy mayo or spicy sauce. The contrast between the crunchy chicken and the soft bun makes every bite flavorful and irresistible—a true crispy delight!",
    basePrice: 500,
    image: "/CCB.jpg",
    category: "burger",
  },
  {
    _id: "b7",
    name: "Grilled Chicken Burger",
    description:
      "A Grilled Chicken Burger features a succulent grilled chicken breast served on a soft burger bun, accompanied by crisp lettuce, ripe tomato slices, and creamy mayonnaise or tangy barbecue sauce. It offers a lighter alternative to traditional beef burgers while still delivering delicious flavor and satisfaction.",
    basePrice: 510,
    image: "/GCB.jpg",
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
    _id: "b9",
    name: "Texas Chicken Burger",
    description:
      "A Texas Chicken Burger is a hearty and flavorful sandwich featuring a grilled or fried chicken patty seasoned with Texas-style spices, such as barbecue seasoning or chili powder. It's typically served on a soft bun with toppings like crispy bacon, melted cheese, lettuce, tomato, onion, and a tangy barbecue sauce. This burger offers a taste of the bold and robust flavors often associated with Texan cuisine..",
    basePrice: 580,
    image: "/TCB.jpeg",
    category: "burger",
  },
  {
    _id: "b10",
    name: "Zinger Tower Burger",
    description:
      "A Zinger Tower Burger is a variation of the classic Zinger Burger, featuring an extra layer of flavor and texture. It typically consists of a spicy breaded chicken fillet, lettuce, mayonnaise or spicy sauce, cheese, and sometimes bacon, all sandwiched between two soft buns. The tower aspect comes from the additional layers of ingredients, providing a more substantial and indulgent eating experience.",
    basePrice: 610,
    image: "/ZTB.jpeg",
    category: "burger",
  },
  {
    _id: "b11",
    name: "Classic Beef Burger",
    description:
      "A juicy, flame-grilled beef patty rests on a toasted sesame seed bun, packed with timeless flavors. It’s topped with melted cheddar cheese, crisp lettuce, ripe tomato slices, onions, and pickles, finished with a dollop of ketchup and mustard. Simple, hearty, and satisfying—this is the burger that never goes out of style.",
    basePrice: 690,
    image: "/CBB.jpeg",
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

  //Platter
  {
    _id: "csw9",
    name: "Chicken Shawarma",
    description:
      "Chicken Shawarma is a popular Middle Eastern dish made from thinly sliced marinated chicken that is typically grilled on a vertical rotisserie. The marinated chicken is layered onto a large rotating skewer and slow-roasted until tender and juicy.",
    basePrice: 260,
    image: "/CSW.jpg",
    category: "wrap",
  },
  {
    _id: "csw10",
    name: "Paratha Roll",
    description:
      "A Paratha Roll is a popular South Asian street food consisting of a flaky and layered flatbread called paratha,which is typically filled with a savory mixture and rolled into a cylindrical shapenated chicken is layered onto a large rotating skewer and slow-roasted until tender and juicy",
    basePrice: 310,
    image: "/PRW.jpg",
    category: "wrap",
  },
  {
    _id: "csw10",
    name: "Chuttney Roll",
    description:
      "A Chutney Roll typically refers to a savory snack or appetizer consisting of a flatbread or tortilla spread with chutney—a flavorful condiment made from fruits, vegetables, herbs, and spices—then rolled up tightly into a cylindrical shape",
    basePrice: 320,
    image: "/CRW.png",
    category: "wrap",
  },
  {
    _id: "csw11",
    name: "Chicken and cheese shawarma",
    description:
      "A soft, warm flatbread or pita is tightly wrapped around juicy, spiced chicken shawarma, cooked on a vertical rotisserie and sliced thin. The filling includes melted cheese, crisp lettuce, tomatoes, and a creamy garlic or tahini sauce. Each bite is rich, cheesy, and packed with bold Middle Eastern flavors, making it a perfect handheld meal.",
    basePrice: 320,
    image: "/CCSW.jpeg",
    category: "wrap",
  },
  {
    _id: "csw12",
    name: "Zinger shawarma",
    description:
      "A soft flatbread is rolled around a crispy, spicy zinger-style fried chicken fillet, giving it a crunchy bite with bold flavor. Inside, it’s filled with fresh lettuce, cabbage, pickles, and a drizzle of garlic mayo or spicy sauce. The combination of hot, crispy chicken and cool, creamy fillings makes this shawarma a perfect fusion of crunch and spice in every bite..",
    basePrice: 410,
    image: "/ZSW.jpg",
    category: "wrap",
  },
  {
    _id: "csw13",
    name: "Zinger Paratha",
    description:
      "A flaky, buttery paratha wraps around a crispy, spicy zinger-style chicken fillet, offering a perfect blend of crunch and tenderness. Inside, it's loaded with shredded lettuce, onions, cheese, and a rich layer of spicy mayo or garlic sauce. Hot, flavorful, and satisfying, this fusion wrap brings the best of fried chicken and South Asian street food together in one bite",
    basePrice: 420,
    image: "/ZPW.jpg",
    category: "wrap",
  },
  {
    _id: "csw14",
    name: "Zinger Wrap",
    description:
      "A Zinger Wrap is a delicious and flavorful wrap made with a crispy breaded or battered chicken fillet, typically seasoned with a spicy blend of spices. The chicken fillet is then wrapped in a soft tortilla or flatbread along with lettuce, tomato, and mayonnaise or spicy sauce.",
    basePrice: 580,
    image: "/ZW.jpeg",
    category: "wrap",
  },
  {
    _id: "csw14",
    name: "Nugg Wrap",
    description:
      "A soft, warm tortilla wrap filled with crispy chicken nuggets, fresh lettuce, juicy tomato slices, and a drizzle of creamy mayo or spicy sauce. The nuggets add a fun, crunchy bite, perfectly balanced by the fresh veggies and soft wrap. It’s a quick, tasty, and satisfying snack—great on the go!",
    basePrice: 580,
    image: "/NW.jpg",
    category: "wrap",
  },
  {
    _id: "csw15",
    name: "Crunchy Chick Wrap",
    description:
      "A Crunchy Chicken Wrap is a delicious and satisfying wrap featuring crispy breaded or battered chicken strips, typically seasoned with flavorful spices. These crispy chicken strips are then wrapped in a soft tortilla or flatbread along with fresh lettuce, ripe tomato slices, and creamy mayonnaise or a zesty sauce",
    basePrice: 590,
    image: "/CCW.jpeg",
    category: "wrap",
  },
  {
    _id: "csw16",
    name: "Tortilla Wrap",
    description:
      "A Tortilla Wrap is a versatile and convenient way to enjoy a variety of fillings wrapped inside a soft, thin flatbread called a tortilla. The tortilla is typically made from flour or corn and is heated briefly on a griddle or skillet to make it pliable before adding fillings.",
    basePrice: 600,
    image: "/TW.jpeg",
    category: "wrap",
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

  //PAsta
  {
    _id: "11",
    name: "Penny Arabiata",
    description:
      "A bowl of penne pasta is coated in a bold and spicy Arrabbiata sauce, made from ripe tomatoes, garlic, and a kick of red chili flakes. The sauce clings to every piece of pasta, delivering heat and rich flavor in every bite. Garnished with fresh parsley and a sprinkle of grated Parmesan cheese, it’s a fiery and satisfying Italian classic.",
    basePrice: 720,
    image: "/PAP.jpeg",
    category: "pasta",
  },
  {
    _id: "p11",
    name: "Fettuccine Alfredo",
    description:
      "Fettuccine Alfredo is a classic Italian pasta dish made with long, flat noodles (fettuccine) tossed in a creamy sauce made from butter, heavy cream, and Parmesan cheese.",
    basePrice: 750,
    image: "/FAPASTA.jpg",
    category: "pasta",
  },
  {
    _id: "p12",
    name: "Spicy Fettuccine",
    description:
      "Spicy Fettuccine is a flavorful pasta dish featuring long, flat noodles (fettuccine) cooked until al dente and then tossed in a spicy sauce. The sauce typically includes ingredients such as garlic, red pepper flakes, chili powder, or hot sauce to add heat and flavor.",
    basePrice: 780,
    image: "/SF.jpg",
    category: "pasta",
  },
  {
    _id: "p31",
    name: "Special Crunchy Pasta",
    description:
      "This unique dish features al dente pasta tossed in a creamy, flavorful sauce and topped with a layer of crispy breadcrumbs or crunchy fried cheese. The contrast between the smooth, rich sauce and the crunchy topping creates a delicious texture in every bite. Finished with herbs and a sprinkle of Parmesan, it’s a comforting and satisfying twist on traditional pasta..",
    basePrice: 780,
    image: "/SCP.jpeg",
    category: "pasta",
  },
  //Chowmein
  {
    _id: "13",
    name: "Chicken Chowmein",
    description:
      "Chicken Chow Mein is a classic Chinese dish featuring stir-fried noodles tossed with tender pieces of chicken, crisp vegetables, and a savory sauce. The dish typically starts with marinating chicken strips in a mixture of soy sauce, garlic, ginger, and other seasonings.",
    basePrice: 680,
    image: "/CC.jpg",
    category: "chowmein",
  },
  {
    _id: "c13",
    name: "Vegetable Chowmein",
    description:
      "Vegetable Chow Mein is a popular Chinese dish consisting of stir-fried noodles tossed with a variety of fresh vegetables and a savory sauce. The dish typically starts with boiling noodles until al dente and then draining them. Meanwhile, a mixture of vegetables such as bell peppers, carrots, cabbage, onions, and bean sprouts are stir-fried in a hot wok or skillet until crisp-tender..",
    basePrice: 600,
    image: "/VC.png",
    category: "chowmein",
  },
  {
    _id: "14",
    name: "Grilled Chicken and Cheese Sandwich",
    description:
      "A Grilled Chicken and Cheese Sandwich is a delicious combination of tender grilled chicken and melted cheese sandwiched between two slices of bread. The grilled chicken is typically seasoned with herbs and spices, then grilled until cooked through and flavorful.",
    basePrice: 520,
    image: "/GCCS.png",
    category: "sandwhich",
  },

  //Fries
  {
    _id: "1f",
    name: "Plain fries",
    description:
      "Plain fries are typically made by cutting potatoes into thin strips or wedges, frying them until golden and crispy, and then seasoning them with salt to taste.and fresh or dried tarragon before being grilled, broiled, or pan-seared to desired doneness.",
    basePrice: 250,
    image: "/plainfries.avif",
    category: "fries",
    sizes: [
      { _id: "s1", name: "Small", price: 0 },
      { _id: "s2", name: "Large", price: 150 },
    ],
  },
  {
    _id: "2f",
    name: "Masala fries",
    description:
      "Masala fries are a flavorful and aromatic variation of traditional French fries, infused with Indian spices for a delicious twist..",
    basePrice: 280,
    image: "/MFries.png",
    category: "fries",
    sizes: [
      { _id: "s1", name: "Small", price: 0 },
      { _id: "s2", name: "Large", price: 150 },
    ],
  },
  {
    _id: "3f",
    name: "Garlic Mayo fries",
    description:
      "Garlic mayo fries are crispy golden fries tossed with savory garlic seasoning and topped with a creamy garlic mayonnaise drizzle. They offer a rich, flavorful twist perfect for garlic lovers.",
    basePrice: 350,
    image: "/masalafries.jpg",
    category: "fries",
    sizes: [
      { _id: "s1", name: "Small", price: 0 },
      { _id: "s2", name: "Large", price: 130 },
    ],
  },
  {
    _id: "3f",
    name: "Garlic Mayo fries",
    description:
      "Garlic mayo fries are crispy golden fries tossed with savory garlic seasoning and topped with a creamy garlic mayonnaise drizzle. They offer a rich, flavorful twist perfect for garlic lovers.",
    basePrice: 350,
    image: "/PFRIES.png",
    category: "fries",
    sizes: [
      { _id: "s1", name: "Small", price: 0 },
      { _id: "s2", name: "Large", price: 130 },
    ],
  },
  {
    _id: "4f",
    name: "Pizza fries",
    description:
      "Pizza fries are a mouthwatering fusion of crispy fries topped with tangy pizza sauce, melted mozzarella cheese, and a sprinkle of Italian herbs. They deliver the bold, cheesy flavor of pizza in every bite-sized fry. Perfect as a snack or indulgent side dish, they're a crowd favorite.",
    basePrice: 420,
    image: "/pizzafries.jpg",
    category: "fries",
    sizes: [
      { _id: "s1", name: "Small", price: 0 },
      { _id: "s2", name: "Large", price: 230 },
    ],
  },
  {
    _id: "5f",
    name: "Loaded fries",
    description:
      "Loaded fries are a deliciously indulgent dish packed with a variety of toppings to create a flavor explosion",
    basePrice: 420,
    image: "/LF.jpg",
    category: "fries",
    sizes: [
      { _id: "s1", name: "Small", price: 0 },
      { _id: "s2", name: "Large", price: 230 },
    ],
  },

  //appetizer

  {
    _id: "12",
    name: "Crispy Chicken Strips",
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
    _id: "1a",
    name: "Honey Wings",
    description:
      "Honey Chili Wings are succulent chicken wings coated in a sticky and sweet honey chili sauce, offering a perfect balance of sweetness and spiciness. These wings are typically baked or fried until crispy and then tossed in the flavorful sauce, creating a mouthwatering combination of flavors",
    basePrice: 390,
    image: "/HWA.jpg",
    category: "appetizer",
    sizes: [
      { _id: "s1", name: "5-pieces", price: 0 },
      { _id: "s2", name: "10-pieces", price: 330 },
    ],
  },
  {
    _id: "2a",
    name: "Chicken Nugget with Fries",
    description:
      "Chicken nuggets are bite-sized pieces of chicken that are breaded and fried until crispy and golden brown. They're typically made from ground or finely chopped chicken meat mixed with seasonings and binders, then coated in breadcrumbs or batter before frying.",
    basePrice: 390,
    image: "/CNA.jpg",
    category: "appetizer",
  },
  {
    _id: "3a",
    name: "Chicken Tender with Fries",
    description:
      "Golden, crispy chicken tenders served beside a heap of hot, seasoned fries.The tenders are juicy inside with a crunchy coating, perfect for dipping.Presented in a casual basket with a side of ketchup or creamy sauce.",
    basePrice: 470,
    image: "/CTA.webp",
    category: "appetizer",
  },
  {
    _id: "4a",
    name: "Crispy Chicken strips with fries",
    description:
      "crispy chicken strips lie side by side on a plate, their crunchy breadcrumb coating glistening slightly with heat. Each strip is perfectly cooked—juicy and tender on the inside, with a satisfying crunch on the outside. Beside them, a generous serving of hot, seasoned fries is piled high, lightly salted and golden brown. A small dipping cup of creamy ranch or spicy ketchup adds the finishing touch, making this a classic, mouthwatering comfort food combo.",
    basePrice: 550,
    image: "/CCFA.jpg",
    category: "appetizer",
  },
  {
    _id: "5a",
    name: "Fish and Chips (seasonal)",
    description:
      "Fish and chips is a classic dish consisting of battered and deep-fried fish, typically cod or haddock, served alongside crispy fried potatoes, known as chips in British English or fries in American English.",
    basePrice: 980,
    image: "/FCA.jpg",
    category: "appetizer",
  },

  //sandwhich
  {
    _id: "c1",
    name: "Chicken Sandwich",
    description:
      "A Chicken Sandwich is a popular and versatile dish consisting of cooked chicken placed between two slices of bread or served on a bun. The chicken can be prepared in various ways, such as grilled, roasted, fried, or shredded, depending on personal preference.",
    basePrice: 310,
    image: "/CS.avif",
    category: "sandwich",
  },
  {
    _id: "c1",
    name: "Chicken Tikka Sandwich",
    description:
      "A Chicken Sandwich is a popular and versatile dish consisting of cooked chicken placed between two slices of bread or served on a bun. The chicken can be prepared in various ways, such as grilled, roasted, fried, or shredded, depending on personal preference.",
    basePrice: 310,
    image: "/CS.webp",
    category: "sandwich",
  },
  {
    _id: "c2",
    name: "Chicken Sandwich",
    description:
      "Tender, marinated chicken tikka pieces are grilled to perfection and packed into a fresh toasted sandwich bun or bread slices. The chicken is full of smoky, spiced flavor and is paired with crisp lettuce, onion slices, and a layer of mint yogurt chutney or creamy mayo. Each bite offers a delicious fusion of bold Indian spices and classic sandwich comfort.",
    basePrice: 380,
    image: "/CTS.jpeg",
    category: "sandwich",
  },
  {
    _id: "c3",
    name: "Grilled Chicken and cheese Sandwich",
    description:
      "A Grilled Chicken and Cheese Sandwich is a delicious combination of tender grilled chicken and melted cheese sandwiched between two slices of bread. The grilled chicken is typically seasoned with herbs and spices, then grilled until cooked through and flavorful..",
    basePrice: 510,
    image: "/GCCS.png",
    category: "sandwich",
  },
  {
    _id: "c4",
    name: "Classic Club Sandwich",
    description:
      "A classic sandwich typically consists of two slices of bread with a filling placed between them. The filling can vary widely and may include ingredients such as sliced meats (like ham, turkey, or roast beef), cheese, lettuce, tomato, onion, pickles, and condiments like mayonnaise, mustard, or ketchup",
    basePrice: 550,
    image: "/CCSS.jpg",
    category: "sandwich",
  },
  {
    _id: "c6",
    name: "Oven baked Sandwich",
    description:
      "An Oven-Baked Sandwich is a delicious and convenient way to enjoy a warm and toasty sandwich with melted cheese and flavorful fillings. To make an oven-baked sandwich, the desired fillings such as sliced meats, cheese, vegetables, and condiments are placed between two slices of bread.",
    basePrice: 780,
    image: "/OBS.png",
    category: "sandwich",
  },
];
