import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jean</h2>
        <p>Segunda-feira, 05 de agosto</p>

        <div className="mt-6 flex justify-between gap-2">
          <Input
            className="focus:outline-none"
            placeholder="Faça sua busca..."
          />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores barbeiros"
          />
        </div>
      </div>
    </div>
  )
}
