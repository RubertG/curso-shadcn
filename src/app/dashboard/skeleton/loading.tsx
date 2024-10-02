import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {
        Array.from({ length: 9 }).map((_, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-row items-center gap-3">
                <Skeleton
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-col flex-grow">
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-3 w-full" />
                </div>
              </div>
            </CardHeader>
            <CardFooter className="justify-end gap-3">
              <Skeleton className="h-9 w-16" />
              <Skeleton className="h-9 w-16" />
            </CardFooter>
          </Card>
        ))
      }
    </div>
  );
}