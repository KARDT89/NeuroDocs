"use client";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { geminiAI } from "@/utils/gemini";
import { Loader } from "lucide-react";

function DrawerAi({ description }) {
  const [open, setOpen] = useState(false);
  const [AiSuggession, setAiSuggession] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log("description ===", description);

  const handleAiSuggession = async () => {
    setIsLoading(true);
    try {
      const response = await geminiAI(description);
      setAiSuggession(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("Ai says: ", AiSuggession);

  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger className="flex float-right">
          <Button variant="outline" onClick={handleAiSuggession}>
            Ask AI ⚡
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Gemini will help you with the Doc!😎</DrawerTitle>

            {isLoading ? (
              <Loader className="flex mx-auto justify-center animate-spin" />
            ) : (
              <DrawerDescription className="whitespace-pre-wrap">
                {AiSuggession.length > 0 && <p>{AiSuggession}</p>}
              </DrawerDescription>
            )}
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default DrawerAi;
