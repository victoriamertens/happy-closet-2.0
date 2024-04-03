import HomeButton from "../../../public/home-icon-silhouette.svg";
import AddButton from "../../../public/plus-circle-svgrepo-com.svg";
import ClosetButton from "../../../public/closet-svgrepo-com.svg";
import RouteToButton from "./RouteToButton";

import Image from "next/image";

export default function NavigationBar() {
  return (
    <section>
      <div id="nav-bar" className="flex flex-row justify-around">
        <RouteToButton newUrl="app/home">
          <Image
            src={HomeButton}
            className="h-10 w-10"
            height={100}
            width={100}
            alt="Navigate to home page"
          />
        </RouteToButton>
        <RouteToButton newUrl="app/additem">
          <Image
            src={AddButton}
            className="h-10 w-10"
            height={90}
            width={90}
            alt="Add action"
          />
        </RouteToButton>
        {/* <RouteToButton newUrl="app/closet"> */}

        <div className="group relative flex">
          <Image
            src={ClosetButton}
            className="h-10 w-10"
            height={90}
            width={90}
            alt="View action"
            data-tooltip-target="closetbtn"
          />
          <span
            className="absolute left-1/2 m-4 mx-auto -translate-y-5 translate-x-1/2 rounded-md bg-gray-800 px-1 
    text-sm text-gray-100 opacity-0 transition-opacity group-hover:opacity-100"
          >
            Coming Soon
          </span>
        </div>
        {/* </RouteToButton> */}
      </div>
    </section>
  );
}
