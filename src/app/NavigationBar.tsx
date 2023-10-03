import HomeButton from "../../public/home-icon-silhouette.svg";
import AddButton from "../../public/plus-circle-svgrepo-com.svg";
import ClosetButton from "../../public/closet-svgrepo-com.svg";

import Image from "next/image";

export default function NavigationBar() {
  return (
    <section>
      <div id="nav-bar" className="flex flex-row justify-around">
        <button className="m-10">
          <Image
            src={HomeButton}
            className="w-10 h-10"
            height={100}
            width={100}
            alt="Navigate to home page"
          />
        </button>
        <button>
          <Image
            src={AddButton}
            className="w-10 h-10"
            height={90}
            width={90}
            alt="Add action"
          />
        </button>
        <button>
          <Image
            src={ClosetButton}
            className="w-10 h-10"
            height={90}
            width={90}
            alt="View action"
          />
        </button>
      </div>
    </section>
  );
}
