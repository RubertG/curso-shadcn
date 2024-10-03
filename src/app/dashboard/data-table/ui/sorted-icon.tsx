import { ChevronDownIcon } from "@radix-ui/react-icons"
import { SortDirection } from "@tanstack/react-table"

export const SortedIcon = ({ isSorted }: { isSorted: SortDirection | false }) => {
  if (isSorted === "desc") {
    return (
      <ChevronDownIcon className="ml-2 h-4 w-4" />
    )
  }

  if (isSorted === "asc") {
    return (
      <ChevronDownIcon className="ml-2 h-4 w-4 rotate-180" />
    )
  }

  return null
}