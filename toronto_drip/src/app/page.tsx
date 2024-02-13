import { signIn } from "next-auth/react";
import Link from "next/link";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { Signup } from "./components/Signup";
import { Signout } from "./components/Signout";
import { redirect } from "next/navigation";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();
  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {!session ? (
        <Signup></Signup>
      ) : (
        <div>
          You are signed in! <Signout></Signout>
        </div>
      )}
    </main>
  );
}
