import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-dynamic"
export const revalidate = 0

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return Array.from({ length: 9 }).map((_, index) => ({
    name: `Shadcn ${index + 1}`,
    image: `https://github.com/shadcn.png`,
  }));
}

export default async function Page() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {
        data.map(({ name, image }) => (
          <Card key={name}>
            <CardHeader>
              <div className="flex flex-row items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={image}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Shadcn</CardTitle>
                  <CardDescription>@shadcn</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardFooter className="justify-end gap-3">
              <Button variant="ghost">Info</Button>
              <Button>Más</Button>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  );
}
