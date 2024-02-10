import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;
  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientPrices?.length > 0;

  const imageHeight = "180px";
  const nameHeight = "30px";
  const descriptionHeight = "60px";
  const buttonHeight = "40px";

  return (
    <div className="relative bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all flex flex-col items-center justify-start">
      <div className="relative">
        <div className="absolute top-1 right-1 z-10 bg-[#FFA500] rounded-full h-10 w-20 flex items-center justify-center text-white">
          Rs {basePrice}
        </div>
        <div
          className="text-center h-52 md:w-56"
          style={{ height: imageHeight }}
        >
          <img
            src={image}
            className="mx-auto w-full h-full object-cover rounded-lg"
            alt="pizza"
          />
        </div>
      </div>
      <p
        className="text-gray-500 text-sm line-clamp-3 mt-2"
        style={{ height: descriptionHeight }}
      >
        {description}
      </p>
      <h4
        className="font-semibold text-xl my-3 pt-2 w-60"
        style={{ height: nameHeight }}
      >
        {name}
      </h4>
      <AddToCartButton
        image={image}
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
        style={{ height: buttonHeight }}
      />
    </div>
  );
}
