import { useSelector } from "react-redux";
import CartItem from "@/components/cartitem/cart-item";

import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";

function CartPage() {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  return (
    <div className="cart-page__container mt-28 flex h-screen w-full flex-col px-5 md:px-28">
      <Heading
        title="Your Order"
        desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
      />

      {cart?.list && cart?.list?.length > 0 ? (
        <>
          <div className="mt-10">
            {cart?.list.map((item) => {
              return <CartItem key={item.id} list={item} />;
            })}
          </div>
          <div className="my-5 flex w-full justify-between pb-5 md:w-8/12">
            <p className="font-[poppins] text-lg font-semibold text-gray-600 md:text-2xl">
              Total
            </p>
            <p className="font-[poppins] text-xl font-semibold text-emerald-600 md:text-2xl">
              {cart?.total} ${" "}
            </p>
          </div>
        </>
      ) : (
        <div className="mb-5  flex w-60 flex-col font-[poppins] font-light  text-gray-600">
          <p className="mb-5">No item on the List</p>
          <Button link="/">Shop Now</Button>
        </div>
      )}
    </div>
  );
}
export default CartPage;
