import Link from "next/link";

function ButtonLinkRound(props) {
  return (
    <Link
      className="w-full rounded-full bg-emerald-600 p-2  text-base text-white  transition duration-500 ease-in-out hover:bg-white hover:text-emerald-600 md:p-3"
      href={props.link}
    >
      {props.children}
    </Link>
  );
}
export default ButtonLinkRound;
