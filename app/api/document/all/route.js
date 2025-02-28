import { db } from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const user = await currentUser();

    if (!user) {
      return new NextResponse("User Not Autheticated", { status: 401 });
    }

    const userDocuments = await db.document.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    revalidatePath("/");
    return NextResponse.json(userDocuments, { status: 200 });
  } catch (error) {
    return new NextResponse("POST, NEW DOC ERROR", { status: 500 });
  }
}
