import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";

import ProductList from "@/components/products/product-list";
import ProductTestimoni from "@/components/products/product-testimoni";

import { products, topProducts, customer } from "@/data/locale-date";

import { RiPlantFill } from "react-icons/ri";
import {
  GiStandingPotion,
  GiGardeningShears,
  GiNewShoot,
} from "react-icons/gi";

export default function Home() {
  const [data, setdata] = useState(products);
  const [topProduct, setTopProduct] = useState(topProducts);
  const [testimonies, setTestimonies] = useState(customer);

  const allCategories = [
    "all",
    ...new Set(topProduct.map((item) => item.category)),
  ];
  const [category, setCategory] = useState(allCategories);

  const filterHandeler = (category) => {
    const newItem = topProducts.filter((item) => item.category === category);
    setTopProduct(newItem);

    if (category === "all") {
      setTopProduct(topProducts);
      return;
    }
  };

  return (
    <div className="home-page__container flex h-screen w-full flex-col items-center p-6">
      {/* Banner Hero Section */}
      <section className="hero__section mt-14 flex h-96 w-full rounded-[20px] bg-[url('../public/images/banner-hero.jpg')] bg-cover ">
        <div className="flex flex-col justify-center rounded-sm p-6 text-center  text-emerald-600 lg:max-w-md lg:text-left xl:max-w-lg">
          <h1 className="text-3xl font-bold leading-none md:text-6xl">
            Find &<span> Explore</span> Our Collection
          </h1>
          <p className="mb-8 mt-6 font-[poppins] text-2xl text-white sm:mb-12 md:text-xl">
            Dictum aliquam porta in condimentum ac integer
            <span className="hidden md:inline lg:hidden">
              turpis pulvinar, est scelerisque ligula sem{" "}
            </span>
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
            <Button link={"house-plant"}>Explore</Button>
          </div>
        </div>
      </section>

      {/* Feature Section */}

      <section className="feature__section mt-10 flex w-full flex-col items-center text-center">
        {/* Description Feature */}
        <div className="lg:max-w-md">
          <Heading
            title="We provide of what your plants need"
            desc="Nunc turpis elit, placerat nec bibendum a, efficitur id tortor.
            Donec luctus magna mattis, scelerisque nisl."
          />
        </div>
        {/* Main Content Feature */}
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-10 lg:grid-cols-4">
          <Card
            icon={<RiPlantFill />}
            cardTitle={"House Plant"}
            cardDesc={
              "Curabitur ac est sapien. Duis viverra dignissim turpis inplacerat."
            }
          />

          <Card
            icon={<GiStandingPotion />}
            cardTitle={"Vertillizer"}
            cardDesc={
              "Curabitur ac est sapien. Duis viverra dignissim turpis inplacerat."
            }
          />

          <Card
            icon={<GiGardeningShears />}
            cardTitle={"Gardening Tools"}
            cardDesc={
              "Curabitur ac est sapien. Duis viverra dignissim turpis inplacerat."
            }
          />
          <Card
            icon={<GiNewShoot />}
            cardTitle={"Articles"}
            cardDesc={
              "Curabitur ac est sapien. Duis viverra dignissim turpis inplacerat."
            }
          />
        </div>
      </section>

      <section className="trending-product__section  mt-10 flex w-full flex-col items-center text-center">
        <Heading
          title="Trending Product"
          desc="Check out our hottest product this week. We promise its worth for you to look out!"
        />

        <div className="treanding-product__list">
          <ProductList list={data} />
        </div>
      </section>

      <section className="top-selling  mt-10 flex w-full flex-col items-center text-center">
        <Heading
          title="Top Selling Product"
          desc="Check out our hottest product this week. We promise its worth for you to look out!"
        />
        <div className=" my-5 flex justify-between gap-3 md:gap-5">
          {category.map((item) => (
            <button
              key={item}
              onClick={() => filterHandeler(item)}
              className="mb:p-3 rounded-xl bg-emerald-600 p-2  px-3 text-xs text-white  transition duration-500 ease-in-out hover:bg-white hover:text-emerald-600 md:text-lg"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="top-selling-product__list">
          <ProductList list={topProduct} />
        </div>
      </section>

      <section className="product-testimonies  mt-10 flex w-full flex-col items-center text-center">
        <Heading
          title="Our Review Customer"
          desc="Check out our hottest product this week. We promise its worth for you to look out!"
        />

        <div className="product-testimonies__list">
          <ProductTestimoni listTestimonies={testimonies} />
        </div>
      </section>
    </div>
  );
}
