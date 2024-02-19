import { signIn } from "next-auth/react";
import Link from "next/link";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Navbar } from "~/components/Navbar";
import { Image, Input } from "@nextui-org/react";
import { BiSearch } from "react-icons/bi";
// import Image from "next/image";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();
  console.log(session);

  return (
    <main>
      <Navbar></Navbar>
      <div className="xs:flex sm:hidden md:hidden lg:hidden 2xl:hidden">
        <Input
          label="Search"
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search..."
          startContent={
            <BiSearch className="dark:text-white/90 text-slate-400 pointer-events-none mb-0.5 flex-shrink-0 text-black/50" />
          }
        />
      </div>
      <div className="relative top-4 grid h-96 grid-cols-2 bg-[#FEF0D3] sm:h-[558px]">
        {" "}
        <div className="h-80 w-60 sm:h-auto sm:w-auto sm:shrink-0  ">
          {" "}
          <img
            className="relative top-10  "
            src="/logo2.jpg"
            alt=""
            style={{ width: "100%", height: "90%", objectFit: "cover" }}
          ></img>{" "}
        </div>
        <div className="flex content-center items-center justify-center ">
          <h1 className="font-bebas text-4xl italic text-black sm:text-8xl">
            SHOP WITH
            <br />
            <span className="border-b border-third">CONFIDENCE</span>
          </h1>
        </div>
      </div>
    </main>
  );
}
