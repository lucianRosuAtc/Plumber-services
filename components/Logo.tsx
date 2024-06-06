import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
          src="/images/plumbing-logo-rmbg.png"
        width={240}
        height={64}
        alt="Logo"
        className="object-cover object-center rounded-full w-20 h-20 overflow-hidden cursor-pointer p-2  transition-all shadow-lg dark:bg-secondary/80 dark:border dark:border-primary"
        priority
      />
    </Link>
  );
}
