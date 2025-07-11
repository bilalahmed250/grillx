"use client";
import { CartContext, cartProductPrice } from "@/components/AppContext";
import SectionHeaders from "@/components/layout/SectionHeaders";
import CartProduct from "@/components/menu/CartProduct";
import { useContext, useEffect, useState } from "react";

import AddressCheckout from "@/components/layout/AddressCheckout";

export default function CartPage() {
  const { cartProducts, removeCartProduct, handleDecrement, handleIncrement } =
    useContext(CartContext);
  const [address, setAddress] = useState({});

  function handleAddressChange(propName, value) {
    setAddress((prevAddress) => ({ ...prevAddress, [propName]: value }));
  }

  if (cartProducts?.length === 0) {
    return (
      <section className="mt-8 text-center">
        <SectionHeaders mainHeader="Cart" />
        <p className="mt-4">Your shopping cart is empty 😔</p>
      </section>
    );
  }

  let subtotal = 0;
  for (const p of cartProducts) {
    subtotal += cartProductPrice(p) * p.count;
  }

  const count = cartProducts.reduce(
    (totalCount, item) => totalCount + item.count,
    0
  );
  const itemNameCount = new Set(cartProducts.map((item) => item.name)).size;

  // function sendwhatsapp() {
  //   if (cartProducts.length === 0) {
  //     // Show an alert
  //     alert(
  //       "PLEASE GENERATE THE CHECKOUT DETAILS FIRST \nOR \nCALL US FOR HOME DELIVERY 0300-4002687 "
  //     );
  //     return;
  //   } else {
  //     const phonenumber = "+923004002687";

  //     const itemsInfo = cartProducts.map((item) => {
  //       const sizeName = item?.size?.name || "Regular";
  //       const basePrice = item?.basePrice;
  //       const sizePrice = item?.size?.price
  //         ? basePrice + item.size.price
  //         : basePrice;

  //       const totalPrice = sizePrice;

  //       const extras =
  //         item?.extras && item.extras.length > 0
  //           ? `Extras: ${item.extras.map((extra) => extra.name).join(", ")}`
  //           : "";

  //       const extrasText = extras ? `, ${extras}` : "";

  //       return `*Food Name*: ${item?.name}, Qty: ${item?.count}, Size: ${sizeName}, price: ${totalPrice} ${extrasText}`;
  //     });
  //     const itemsText = itemsInfo.join("%0a");
  //     console.log("itemsText", itemsText);

  //     var url =
  //       "https://wa.me/" +
  //       phonenumber +
  //       "?text=" +
  //       "" +
  //       itemsText +
  //       "%0a" +
  //       "*Total Items:* " +
  //       itemNameCount +
  //       "%0a" +
  //       "*Total Quantity Order:* " +
  //       count +
  //       "%0a" +
  //       "*Total Bill:* " +
  //       subtotal +
  //       "%0a%0a" +
  //       "*Phone Number:* " +
  //       address?.phone +
  //       "%0a%0a" +
  //       "*Address:* " +
  //       address?.streetAddress;

  //     window.open(url, "_blank").focus();
  //   }
  // }
  function sendwhatsapp() {
    if (cartProducts.length === 0) {
      alert(
        "PLEASE GENERATE THE CHECKOUT DETAILS FIRST \nOR \nCALL US FOR HOME DELIVERY 0300-4002687 "
      );
      return;
    }

    const phonenumber = "923004002687"; // No plus sign
    const itemsInfo = cartProducts.map((item) => {
      const sizeName = item?.size?.name || "Regular";
      const basePrice = item?.basePrice || 0;
      const sizePrice = item?.size?.price
        ? basePrice + item.size.price
        : basePrice;

      const extras =
        item?.extras && item.extras.length > 0
          ? `Extras: ${item.extras.map((extra) => extra.name).join(", ")}`
          : "";

      const extrasText = extras ? `, ${extras}` : "";

      return `*Food Name:* ${item?.name}, Qty: ${item?.count}, Size: ${sizeName}, price: Rs ${sizePrice} ${extrasText}`;
    });

    const itemsText = itemsInfo.join("\n");

    const message =
      `${itemsText}\n\n` +
      `*Total Items:* ${itemNameCount}\n` +
      `*Total Quantity Order:* ${count}\n` +
      `*Total Bill:* Rs ${subtotal}\n\n` +
      `*Phone Number:* ${address?.phone || ""}\n` +
      `*Address:* ${address?.streetAddress || ""}`;

    const encodedMessage = encodeURIComponent(message);

    // ✅ Use this updated URL:
    const url = `https://api.whatsapp.com/send/?phone=${phonenumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    window.open(url, "_blank");
  }

  return (
    <section className="mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Cart" />
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2 sm:grid-cols-1">
        <div className="cartClass">
          {cartProducts?.length === 0 && (
            <div>No products in your shopping cart</div>
          )}
          {cartProducts?.length > 0 &&
            cartProducts.map((product, index) => (
              <CartProduct
                key={index}
                product={product}
                onRemove={removeCartProduct}
                index={index}
                handleDecrement={() => handleDecrement(index)}
                handleIncrement={() => handleIncrement(index)}
              />
            ))}
          <div className="py-2 pr-16 flex justify-end items-center">
            <div className="text-gray-500">
              Total Item:
              <br />
              QTY:
              <br />
              Total:
            </div>

            <div className="font-semibold pl-2 text-right">
              {itemNameCount}
              <br />
              {count}
              <br />
              Rs {subtotal}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <span className="text-gray-400 text-center text-lg">
              {" "}
              Call for Order
            </span>
            <span className="text-[#FFA500] text-center text-lg">
              {" "}
              0300-400-26-87
            </span>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2>Checkout</h2>
            <form
              onSubmit={(ev) => {
                ev.preventDefault();
                sendwhatsapp();
              }}
            >
              <AddressCheckout
                addressProps={address}
                setAddressProp={handleAddressChange}
              />
              <button type="submit">Pay Rs {subtotal}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
