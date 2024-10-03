"use client"

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Page() {
  const date = new Date().toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
  });

  return (
    <div className="flex gap-4">
      <Button
        onClick={() =>
          toast("Event has been created", {
            description: date,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show info toast
      </Button>
      
      <Button
        onClick={() =>
          toast.info("Event has been created", {
            description: date,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show toast
      </Button>
    </div>
  );
}
