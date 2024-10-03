import { payments } from "@/data/payments.data";
import { DataTable } from "./ui/data-table";
import { columns } from "./ui/colums";

async function fetchData() {
  return payments
}

export default async function Page() {
  const data = await fetchData()

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
