import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Check, ArrowRight, Github } from "lucide-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { SignInButton } from "@clerk/nextjs";
import { ShineBorder } from "@/components/magicui/shine-border";


export default function IntroPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Main Hero Section */}
      <div className="flex-1 px-44">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Document Collaboration{" "}
                    <span className="text-primary">Powered by AI</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Neurodocs combines the familiarity of Google Docs with the
                    power of AI to help you create, edit, and collaborate on
                    documents more efficiently.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <SignInButton>
                    <RainbowButton size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </RainbowButton>
                  </SignInButton>
                  <Link href={'https://github.com/KARDT89'} target="_blank">
                  <Button size="lg" variant="outline">
                    <span>
                      <Github />
                    </span>
                    Visit Github
                  </Button>
                  </Link>
                  
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Free Forever</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-primary" />
                    <span>No Credit Card</span>
                  </div>
                </div>
              </div>
              
              <div className="mx-auto flex items-center justify-center">
              
                <div className="relative w-full max-w-[600px] overflow-hidden rounded-xl border shadow-2xl">
                <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                  <div className="bg-muted p-2 flex items-center gap-1 border-b">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center text-xs font-medium">
                      Untitled Document - Neurodocs
                    </div>
                  </div>
                  <div className="bg-background p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-6 w-24 rounded bg-muted"></div>
                      <div className="h-6 w-24 rounded bg-muted"></div>
                      <div className="h-6 w-24 rounded bg-muted"></div>
                      <div className="h-6 w-24 rounded bg-muted"></div>
                    </div>
                    <div className="h-8 w-3/4 rounded bg-muted mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-full rounded bg-muted"></div>
                      <div className="h-4 w-full rounded bg-muted"></div>
                      <div className="h-4 w-5/6 rounded bg-muted"></div>
                      <div className="h-4 w-full rounded bg-muted"></div>
                      <div className="h-4 w-4/5 rounded bg-muted"></div>
                    </div>
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div className="rounded-lg border bg-card p-2 text-xs">
                        <p className="font-medium">AI Assistant</p>
                        <p className="text-muted-foreground">
                          I can help improve this paragraph. Would you like
                          suggestions?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center gap-1 text-lg font-semibold">
          <Brain className="h-5 w-5 text-primary" />
          <span>Neurodocs</span>
        </div>
        <p className="text-xs text-muted-foreground sm:ml-4">
          &copy; {new Date().getFullYear()} Neurodocs. Made with ❤️ by DT89
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="https://www.linkedin.com/in/tamal-sarkar-099342221/" className="text-xs hover:underline underline-offset-4" target="_blank">
            LinkedIn
          </Link>
          <Link href="https://www.youtube.com/@kardt89" className="text-xs hover:underline underline-offset-4">
            Youtube
          </Link>
          <Link href="https://discord.gg/fV8tGmgpuR" className="text-xs hover:underline underline-offset-4">
            Join Discord
          </Link>
        </nav>
      </footer>
    </div>
  );
}
