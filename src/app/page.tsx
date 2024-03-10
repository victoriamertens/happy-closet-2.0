import ClerkSignInButtons from "./_lib/ClerkAuth/ClerkSignInButtons";
import HCLogo from "./_lib/happy-closet-icon.jpg";
import Image from "next/image";

export default async function Home() {
  return (
    <main
      id="main"
      className=" flex h-screen items-center justify-center bg-teal-100/100"
    >
      <div
        id="signInCard"
        className="min-w-96 m-5 flex flex-col items-center justify-center rounded-xl border bg-white p-5 shadow-2xl"
      >
        <div
          id="headerLinks"
          className="flex w-full flex-row-reverse justify-between"
        >
          <a
            className=""
            href="https://github.com/victoriamertens/happy-closet-2.0"
          >
            <svg
              id="githubIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgb(0, 128, 128)"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </a>
          <svg
            id="smileyIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="rgb(0, 128, 128)"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.508 13.941c-1.513 1.195-3.174 1.931-5.507 1.931-2.335 0-3.996-.736-5.509-1.931l-.492.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.492-.493zm.492-3.939l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002zm-7 0l-.755.506s-.503-.948-1.746-.948c-1.207 0-1.745.948-1.745.948l-.754-.506c.281-.748 1.205-2.002 2.499-2.002 1.295 0 2.218 1.254 2.501 2.002z" />
          </svg>
        </div>
        <Image
          alt="logo of smiley face with hanger"
          src={HCLogo}
          className="drop-shadow-intense m-5 w-48 rounded-full"
        />
        <h1 className="m-4 text-5xl font-bold">Happy Closet</h1>

        <ClerkSignInButtons />
      </div>
    </main>
  );
}
