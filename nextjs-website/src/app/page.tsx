import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <Card>
        <CardHeader>
          <CardTitle>Home Page</CardTitle>
          <CardDescription>This is my home page</CardDescription>
        </CardHeader>
        <CardContent>
          <span>Hello, welcome to my website!</span>
        </CardContent>
        <CardFooter>
          <div className="flex w-full justify-end">
            <Button asChild>
              <Link href="/fish">Button</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
