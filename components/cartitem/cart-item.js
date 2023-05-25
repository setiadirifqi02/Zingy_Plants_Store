import Image from "next/image";
import Button from "../ui/button";

import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeProduct } from "@/redux/slice/cartSlice";

function CartItem({ list }) {
  const dispatch = useDispatch(list?.quantity);
  const [quantity, setQuantity] = useState(list?.quantity);
  const [totalPrice, setTotalPrice] = useState(+list?.price * +list?.quantity);

  const changeQuantityHandler = (event) => {
    const itemValue =
      parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 1;
    setQuantity(itemValue);
  };

  const removeProductHandler = () => {
    dispatch(removeProduct({ id: list?.id }));
  };

  useEffect(() => {
    setTotalPrice(list?.price * quantity);
    dispatch(updateQuantity({ id: list?.id, quantity }));
  }, [quantity, list?.price, list?.id, dispatch]);
  return (
    <div className="md: my-5 flex w-full md:w-10/12">
      <div className="card-product___image flex w-5/12 md:w-4/12">
        <Image
          src={`/${list.image}`}
          alt={`gambar ${list.id}`}
          className=" rounded-[12px]"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="card-product__main flex w-7/12 flex-col ">
        <div className="card-product__info ml-3 flex w-full flex-col justify-between md:ml-5">
          <div className="font-[poppins]">
            <h4 className="mb-2 text-sm font-semibold text-gray-600 md:text-base">
              {list.name}
            </h4>
            <p className="text-xs italic text-gray-500 md:text-sm">
              {list.seller}
            </p>
          </div>
          <p className="font-[poppins] text-sm text-gray-600 md:text-lg">
            Price :{" "}
            <span className="text-sm  text-emerald-600 md:text-lg">
              {list.price} $
            </span>
          </p>
          <p className="font-[poppins] text-sm text-gray-600 md:text-lg">
            Price :{" "}
            <span className="text-sm  text-emerald-600 md:text-lg">
              {totalPrice} $
            </span>
          </p>
          <div className="flex items-center">
            <p className="font-[poppins] text-sm">Quantity :</p>
            <input
              type="number"
              className=" border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 ml-2 w-10  rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-emerald-600 focus:border-t-transparent focus:outline-0 disabled:border-0"
              value={quantity}
              onChange={changeQuantityHandler}
            />
          </div>
        </div>
        <div className="card-product__action ml-5 mt-10 flex items-center gap-5">
          <Button onClick={() => setQuantity((prev) => prev + 1)}>
            <FaPlus />
          </Button>
          <Button
            onClick={() => {
              if (quantity > 1) {
                setQuantity((prev) => prev - 1);
              }
            }}
          >
            <FaMinus />
          </Button>
          <Button onClick={removeProductHandler}>
            <FaTrash />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
