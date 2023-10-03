import HomeButton from "../../public/home-icon-silhouette.svg";
import AddButton from "../../public/plus-circle-svgrepo-com.svg";
import ClosetButton from "../../public/closet-svgrepo-com.svg";

import Image from "next/image";

export default function NavigationBar() {
  return (
    <section>
      <div>
        <Image
          src={HomeButton}
          className="w-10 h-10"
          height={100}
          width={100}
          alt="Navigation Button: to Home"
        />
        <Image
          src={AddButton}
          className="w-10 h-10"
          height={90}
          width={90}
          alt="Navigation Button: to Home"
        />
        <Image
          src={ClosetButton}
          className="w-10 h-10"
          height={90}
          width={90}
          alt="Navigation Button: to Home"
        />
      </div>
    </section>
  );
}
