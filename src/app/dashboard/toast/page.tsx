"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export default function Page() {
  const { toast } = useToast()

  return (
    <div className="flex gap-4 flex-wrap">
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }}
      >
        Show Toast
      </Button>

      <Button
        variant="destructive"
        onClick={() => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          })
        }}
      >
        Show Destructive Toast
      </Button>
      
      <Button
        variant="success"
        onClick={() => {
          toast({
            variant: "success",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        }}
      >
        Show Destructive Toast
      </Button>
    </div>
  )
}
