import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";

const NewDocument = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const createNewDoc = async ({ title = "Untitled Document", description = "" }) => {
    try {
      const response = await axios.post("/api/document/new", {
        title: title,
        description: description,
      });
      toast.success("Document Created", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "dark",
      });
      router.push(`/document/${response.data.id}`);
    } catch (error) {}
  };

  const TemplateMap = [
    {
      component: (
        <button onClick={() => createNewDoc()}>
          <Card className="w-[150px] hover:cursor-pointer">
            <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
            <CardHeader></CardHeader>
            <CardContent className="flex justify-center mx-auto">
              <Plus size={80} />
            </CardContent>
            <CardFooter></CardFooter>
            </MagicCard>
          </Card>
        </button>
      ),
      footer: "Blank Document",
    },
    {
      component: (
        <button
          onClick={() =>
            createNewDoc({
              title: "Story telling template",
              description: `Title: [Your Story Title Here]
              
              1. Introduction:
              Hook: [Engaging opening line or question]
              Setting: [Where and when does the story take place?]
              Characters: [Introduce main characters]
              Conflict/Problem: [What is the central problem or challenge?]
              `,
            })
          }
        >
          <Card className="w-[150px] hover:cursor-pointer">
            <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
            <CardHeader></CardHeader>
            <CardContent className="flex justify-center mx-auto">
              <Plus size={80} />
            </CardContent>
            <CardFooter></CardFooter>
            </MagicCard>
          </Card>
        </button>
      ),
      footer: "Story Telling Template",
    },
    {
      component: (
        <button
          onClick={() =>
            createNewDoc({
              title: "Resume Template",
              description: `
              [Your Name]  
            
              **Contact Information**  
              - Phone: [Your Phone Number]  
              - Email: [Your Email Address]  
              - LinkedIn: [Your LinkedIn URL]  
              - Portfolio/GitHub: [Your Portfolio or GitHub URL]  
            
              ---
            
              **Professional Summary**  
              [Brief summary of your skills, experience, and career goals. Keep it concise and impactful.]  
            
              ---
            
              **Skills**  
              
              ---
            
              **Work Experience**  
              **[Job Title]** – [Company Name] (Start Date – End Date)  
              - [Responsibility or achievement 1]  
              - [Responsibility or achievement 2]  

              ---
            
              **Education**  
              **[Degree]** – [University Name] (Year of Graduation)  
            
              ---
            
              **Certifications & Training**  
              - [Certification Name] – [Issuing Organization] (Year)  
         
            
              ---
            
              **Projects**  
              **[Project Name]** – [Short description of the project, technologies used, and your role]  
              - [Key achievement or functionality]  

            
              ---
            
              **Awards & Achievements**  
              - [Award or achievement 1]  
    
            
              ---
            
              **Additional Information**  
              - Languages: [List any languages spoken]  
              - Volunteer Work: [Any relevant volunteer experience]  
              - Interests: [Optional section to add personal interests]`
            }
            )
          }
        >
          <Card className="w-[150px] hover:cursor-pointer">
            <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
            <CardHeader></CardHeader>
            <CardContent className="flex justify-center mx-auto">
              <Plus size={80} />
            </CardContent>
            <CardFooter></CardFooter>
            </MagicCard>
          </Card>
        </button>
      ),
      footer: "Resume Template",
    },
  ];

  return (
    <div className="bg-background h-[300px] flex flex-row md:flex-col justify-center flex-wrap">
      <div className="flex flex-col space-y-4 w-10/12 mx-auto flex-wrap">
        <h3 className="text-muted-foreground text-sm">Start a new document</h3>
        <div className="flex space-x-4 flex-wrap">
          <div className="flex space-x-4 flex-wrap">
            {TemplateMap.map((template) => (
              <div key={template.footer}>
                {template.component}
                <p className="text-sm mt-2 ml-2">{template.footer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDocument;
