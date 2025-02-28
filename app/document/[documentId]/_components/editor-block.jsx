"use client";

import { DockIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Editor from "@/components/Editor";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { toast } from "react-toastify";
import DrawerAi from "./drawer-ai";

const FormSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2),
});

const EditorBlock = ({ document }) => {
  if (!document) {
    redirect("/");
  }

  const EditorForm = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: document.title || "",
      description: document.description || "",
    },
  });

  async function onUpdateChange(values) {
    console.log(values);

    try {
      await axios.put(`/api/document/${document?.id}`, values);
      toast.success("Document Successfully Updated", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "dark",
      });
      revalidatePath("/");
      revalidatePath("/document/" + document?.id);
    } catch (error) {
      console.log(error);
    }
  }

  async function onDocumentDelete() {
    try {
      await axios.delete(`/api/document/${document?.id}`);
      toast.success("Document Deleted Successfully", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "dark",
      });
      redirect("/");
      revalidatePath("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="px-4">
      <div className="flex float-right my-2 space-x-4">
        
        <DrawerAi description={document.description}/>
        <form onSubmit={onDocumentDelete} className="flex float-right">
          <Button type="submit" variant="destructive">
            Delete
          </Button>
        </form>
      </div>
      <Form {...EditorForm}>
        <form
          onSubmit={EditorForm.handleSubmit(onUpdateChange)}
          className="space-y-8"
        >
          <FormField
            control={EditorForm.control}
            name="title"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormControl>
                  <Input placeholder="Enter Title here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>

          <FormField
            control={EditorForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Editor {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button type="submit">Save Changes</Button>
        </form>
      </Form>
    </div>
  );
};

export default EditorBlock;
