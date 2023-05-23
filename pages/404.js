import Image from "next/image";
import Button from "@/components/ui/button";

import notFoundImage from "../public/images/404-not-found.png";
function NotFoundPage() {
  return (
    <div className="grid h-full w-full grid-cols-1 items-center justify-center bg-[url('../public/images/banner-404.jpg')] bg-cover md:grid-cols-2">
      <div className="order-2 hidden h-screen w-full items-center justify-center md:order-1  md:flex"></div>

      {/* main Content of Banner */}
      <div className="order-1 flex h-screen w-full flex-col items-center justify-center rounded-xl bg-white p-6 md:order-2 ">
        <div className="mt-20">
          <Image src={notFoundImage} alt="404" className=" lg:w-70 w-full " />
          <div className="mt-5 text-center">
            <div className="mb-10 font-light text-gray-600 md:mb-16">
              <h1 className="mb-8 text-3xl font-black uppercase text-emerald-600 lg:text-3xl">
                You seem to be lost!
              </h1>
              <p>The page you're looking for isn't available.</p>
              <p className="mb-10">
                Try searching again or use the Go Back button below.
              </p>
              <Button link={"/"}>Back to Home</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFoundPage;
