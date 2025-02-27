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
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="my-2 mx-4 flex justify-between items-center py-2 ">
      {/* Logo */}
      <Logo />

      {/* Auth */}
      <div className="flex items-center gap-3 justify-center">
        <div className="flex items-center justify-center">
          <SignedOut>
            <SignInButton><Button size="sm">Sign in</Button></SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
          elements: {
            userButtonAvatarBox: "w-10 h-10", // Adjust width and height
          },
        }}/>
          </SignedIn>
        </div>
        <ModeToggle/>
      </div>
    </div>
    </header>
  );
};

export default Navbar;
