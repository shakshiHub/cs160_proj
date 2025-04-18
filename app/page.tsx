import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className = 'text-center pt-10 px-5'>Hi everyone! so this is just the main page, idk maybe we should make a home screen? But ill link the different webpages on here!</h1>
      <Link href="/SignInPage">Sign In Page</Link>
    </main>
  );
}
