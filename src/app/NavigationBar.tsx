import HomeButton from "../../public/home-icon-silhouette.svg";
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
      </div>
    </section>
  );
}
