import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BookText } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";

const RecentDocument = () => {
  const { theme } = useTheme();
  const [documents, setDocuments] = useState([]); // ✅ Fix 1: Initialize as an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get("/api/document/all"); // ✅ Fix 2: Fetch from API route
        setDocuments(response.data); // ✅ Fix 3: Store response data
      } catch (error) {
        console.error("Error fetching documents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="w-10/12 mx-auto my-4">
      <h1 className="font-semibold text-sm mb-4">Recent Documents</h1>
      <div className="flex gap-8 flex-wrap">
        {loading ? (
          <p className="text-sm">Loading...</p>
        ) : documents.length > 0 ? ( // ✅ Fix 4: Ensure `documents` is an array before mapping
          documents.map((document) => (
            
      
            <div key={document.id} className="w-[150px]">
              
              <Link href={`/document/${document.id}`}>
                <Card className="w-[150px] hover:cursor-pointer">
                <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
                  <CardHeader />
                  <CardContent className="flex justify-center mx-auto">
                    <BookText size={60} />
                  </CardContent>
                  <CardFooter />
                  </MagicCard>
                </Card>
              </Link>
             
              <p className="text-sm mt-2">{document.title}</p>
            </div>
           
          ))
        ) : (
          <p className="text-sm">
            Once you start writing, your recent documents will appear here...
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentDocument;
