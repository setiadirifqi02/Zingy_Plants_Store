import Link from "next/link";
import { useState } from "react";
import links from "./links";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function NavLinks(props) {
  function onClick() {
    props.onClick();
  }
  const [subLink, setSubLink] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="group px-3 text-left md:cursor-pointer">
            <h1
              className="group flex cursor-pointer items-center justify-between py-7 pr-5 hover:text-emerald-600 md:pr-0"
              onClick={() =>
                subLink !== link.name ? setSubLink(link.name) : setSubLink("")
              }
            >
              {link.name}
              <span className="inline text-xl md:hidden">
                {subLink === link.name ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
              <span className="hidden  text-xl group-hover:rotate-180 md:ml-2 md:mt-1  md:block">
                <IoIosArrowDown />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-14 hidden hover:md:block group-hover:md:block">
                  <div className="py-3">
                    <div className="absolute left-3 mt-1 h-4 w-4 rotate-45 bg-green-200"></div>
                  </div>

                  <div className="rounded-lg bg-green-200 p-3.5">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.sublink}>
                        {mysublinks.sublink.map((itemLink) => (
                          <li
                            key={itemLink.name}
                            className="my-2.5 text-sm text-gray-600"
                          >
                            <Link
                              href={itemLink.link}
                              className="text-gray-600 hover:text-emerald-600"
                            >
                              {itemLink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Navlinks Display */}
                <div
                  className={`${
                    subLink === link.name ? "md:hidden" : "hidden"
                  }`}
                >
                  {link.sublinks.map((sublink) => (
                    <div key={sublink.sublink} className="md:hidden">
                      <div>
                        {sublink.sublink.map((itemLink) => (
                          <Link key={itemLink.name} href={itemLink.link}>
                            <h2
                              onClick={onClick}
                              className="py-4 pl-7 pr-5 text-gray-400 hover:text-emerald-600 md:pr-0"
                            >
                              {itemLink.name}
                            </h2>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
export default NavLinks;
