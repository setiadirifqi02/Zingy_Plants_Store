import Link from "next/link";

function Button(props) {
  if (props.link) {
    return (
      <Link
        className="rounded-lg bg-emerald-600 px-8 py-3 text-lg font-semibold  text-white "
        href={props.link}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className="mb:p-3 rounded-full bg-emerald-600  p-2 text-lg  text-white transition duration-500 ease-in-out hover:bg-white hover:text-emerald-600"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
export default Button;
