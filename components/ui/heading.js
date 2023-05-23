function Heading(props) {
  return (
    <div className="Heading lg:max-w-md">
      <h1 className=" mb-5 font-[poppins] text-xl font-semibold text-gray-600 md:text-3xl">
        {props.title}
      </h1>
      <p className="font-light text-gray-600">{props.desc}</p>
    </div>
  );
}
export default Heading;
