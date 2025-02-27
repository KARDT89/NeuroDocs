import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Logo from "./Logo";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  return (
    <div className="my-2 mx-4 flex justify-between items-center py-2">
      {/* Logo */}
      <Logo />

      {/* Auth */}
      <div className="flex items-center gap-8">
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
