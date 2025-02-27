import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Karla } from "next/font/google";

const karla = Karla({subsets: ['latin'], weight: "500"})

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image src={"/logo.svg"} height={40} width={40} alt="logo" />
      </Link>
      <h2></h2>
    </div>
  );
};

export default Logo;
