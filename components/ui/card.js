function Card(props) {
  return (
    <div className="card__container-card w-48 rounded-[12px] p-5 text-left text-emerald-600 shadow-md  sm:w-64 md:w-56">
      <div className="card__card-icon mb-4 text-3xl">{props.icon}</div>
      <div className="card__main-content">
        <h2 className="mb-3 font-[poppins] text-lg">{props.cardTitle}</h2>
        <p className="mb-5 text-sm text-gray-600">{props.cardDesc}</p>
      </div>
    </div>
  );
}
export default Card;
