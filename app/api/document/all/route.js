import { db } from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await currentUser();

    if (!user) {
      return new NextResponse("User Not Authenticated", { status: 401 });
    }

    const userDocuments = await db.document.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" }, // ⬅️ Descending for recent documents first
    });

    return NextResponse.json(userDocuments, { status: 200 });
  } catch (error) {
    console.error("Error fetching documents:", error); // ⬅️ Log actual error
    return new NextResponse("Error fetching documents", { status: 500 });
  }
}
