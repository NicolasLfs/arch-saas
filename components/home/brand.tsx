import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link
      href="#top"
      className="group flex items-center gap-3"
      aria-label="ArchSaaS - início"
    >
      <Image
        src="/logo.png"
        alt="ArchSaaS"
        width={260}
        height={80}
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        priority
      />
    </Link>
  );
}
