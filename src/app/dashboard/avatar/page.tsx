import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Page() {
  return (
    <div className="flex gap-3 flex-wrap">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}