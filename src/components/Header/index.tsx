import Link from "next/link";
import Image from "next/image";
import { CartWidget } from "./components/CartWidget";
import { SearchForm } from "@/components/SearchForm";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          Dev Store
        </Link>
        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="h-4 w-px bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src={"https://github.com/FPPaschoal.png"}
            className="h-6 w-6 rounded-full"
            alt=""
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  );
}
