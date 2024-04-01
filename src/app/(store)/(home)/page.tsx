import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid-rows-6 grid max-h-[860px] grid-cols-9 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src={"/moletom-ai-side.png"}
          width={860}
          height={860}
          quality={100}
          alt=""
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="max-2-[280px] absolute bottom-28 right-28 flex h-12 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4">
            R$129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src={"/moletom-java.png"}
          width={860}
          height={860}
          quality={100}
          alt=""
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="max-2-[280px] absolute bottom-10 right-10 flex h-12 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4">
            R$129
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src={"/camiseta-dowhile-2022.png"}
          width={860}
          height={860}
          quality={100}
          alt=""
          className="transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="max-2-[280px] absolute bottom-10 right-10 flex h-12 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4">
            R$129
          </span>
        </div>
      </Link>
    </div>
  );
}
