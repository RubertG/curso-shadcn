"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([])
  const shorDate = date?.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
  const shortMultipleDate = multipleDate?.map((date) => date.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }))

  return (
    <div className="flex gap-4 flex-wrap">
      <div>
        <h2 className="text-lg font-medium mb-2">Sin sabados ni domingos</h2>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
          disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        />
      </div>
      <div>
        <h2 className="text-lg font-medium mb-2">Sin dias despues del actual</h2>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
          disabled={(date) => date > new Date()}
        />
      </div>
      <div>
        <h2 className="text-lg font-medium mb-2">Multiples fechas</h2>
        <Calendar
          mode="multiple"
          selected={multipleDate}
          onSelect={setMultipleDate}
          className="rounded-md border shadow"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold">Fecha seleccionada</h2>
        <p>{shorDate}</p>
        <p>{shortMultipleDate?.join(", ")}.</p>
      </div>
    </div>
  )
}