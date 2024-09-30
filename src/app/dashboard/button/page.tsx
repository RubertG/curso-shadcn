import { Button } from "@/components/ui/button";
import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid gap-3 grid-cols-3">
      <Button>Normal button</Button>
      <Button variant="secondary">Secondary button</Button>
      <Button variant="destructive">Destructive button</Button>
      <Button variant="ghost">Ghost button</Button>
      <Button variant="link">Link button</Button>
      <Button variant="outline">Outline button</Button>
      <Button variant="success" capitalize={false}>Outline button</Button>
      <Button disabled>Disable button</Button>

      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>

      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>

      <Button asChild>
        <Link href="/login">Link</Link>
      </Button>
    </div>
  );
}