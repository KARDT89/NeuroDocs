"use client";

import { useAuth } from "@clerk/nextjs";
import IntroPage from "./IntroPage";
import NewDocument from "./new-document";

export default function Dashboard() {
  const { userId } = useAuth(); // Works in a client component

  if (!userId) {
    return <IntroPage />;
  }

  return (
    <div>
      {/* new document */}
      <NewDocument/>
      {/* recent document */}
    </div>
  );
}
