import Image from "next/image";
import Button from "../ui/button";
import ButtonLinkRound from "../ui/button-round";

import { FiShoppingBag, FiHeart, FiArrowRight } from "react-icons/fi";

function CardProducts(props) {
  return (
    <div className="card-product___container mb-1 h-80 w-40 rounded-[12px] text-left   md:mb-10 md:w-60">
      <div className="card-product___cover relative w-40 md:w-60">
        <div className="card-product___cover-hero group">
          <Image
            src={`/${props.image}`}
            alt="gambar"
            className=" rounded-[12px]"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="card-product___cover-action absolute top-0 hidden h-full w-full items-end justify-center pb-5 opacity-0 transition delay-500 ease-in-out group-hover:flex group-hover:opacity-100">
            <div className="card-action flex justify-evenly gap-3">
              <Button>
                <FiShoppingBag />
              </Button>
              <Button>
                <FiHeart />
              </Button>
              <ButtonLinkRound link={props.link}>
                <FiArrowRight />
              </ButtonLinkRound>
            </div>
          </div>
        </div>
      </div>
      <div className="card-product__info mt-2 flex justify-between">
        <div className="font-[poppins]">
          <h4 className="mb-2 text-sm font-semibold text-gray-600 md:text-base">
            {props.name}
          </h4>
          <p className="text-xs italic text-gray-500 md:text-sm">
            {props.seller}
          </p>
        </div>
        <p className="p-2  text-lg font-bold text-emerald-600">
          ${props.price}
        </p>
      </div>
    </div>
  );
}
export default CardProducts;
