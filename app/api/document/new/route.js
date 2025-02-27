import { db } from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const user = await currentUser();

    console.log("User ID:", user); // Debugging

    if (!user) {
      return new NextResponse("User Not Autheticated", { status: 401 });
    }

    const createNewDoc = await db.document.create({
      data: {
        userId: user.id,
        title: "Untitled Document",
        description: "",
      },
    });
    revalidatePath("/");
    return NextResponse.json(createNewDoc, { status: 200 });
  } catch (error) {
    return new NextResponse("POST, NEW DOC ERROR", { status: 500 });
  }
}
