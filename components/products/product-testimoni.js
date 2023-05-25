import Image from "next/image";

function ProductTestimoni({ listTestimonies }) {
  return (
    <div className="terstimonies___container mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
      {listTestimonies.map((testimonies) => (
        <div
          key={testimonies.id}
          className="terstimonies___card flex flex-col items-center p-3 shadow-lg md:flex-row md:p-5"
        >
          <div className="terstimonies___avatar h-20 w-20 rounded-full md:w-full">
            <Image
              src={`/${testimonies.image}`}
              alt={testimonies.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-full"
            />
          </div>
          <div className="terstimonies___main-content ml-3 p-3 text-center md:text-left">
            <h4 className="text-lg font-bold text-emerald-600">
              {testimonies.name}
            </h4>
            <p className="font-[poppins] text-xs font-semibold text-gray-500">
              {testimonies.post}
            </p>
            <p className="mt-3 w-72 font-[poppins]  text-xs italic text-gray-400 sm:w-96 md:w-full ">
              "{testimonies.desc}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductTestimoni;
