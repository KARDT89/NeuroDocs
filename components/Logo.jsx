"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Karla } from "next/font/google";
import { cn } from "@/lib/utils";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { useTheme } from "next-themes";
import { Brain } from "lucide-react";

const karla = Karla({ subsets: ["latin"], weight: "500" });

const Logo = () => {
  return (
    <div className="flex gap-2 items-center text-xl font-bold">
      <Brain className="h-6 w-6 text-primary" />
      <span>Neurodocs</span>
    </div>
  );
};

export default Logo;
