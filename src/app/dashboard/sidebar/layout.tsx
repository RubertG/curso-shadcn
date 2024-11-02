import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative">
        <SidebarTrigger className="absolute top-4 right-4" />
        {children}
      </main>
    </SidebarProvider>
  )
}
