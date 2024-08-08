import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import BarbershopItem from "./_components/barbershop-item"
import { db } from "./_lib/prisma "

export default async function Home() {
  // chamar banco de dados
  const barbershops = await db.barbershop.findMany({})
  // console.log({ barbershops })
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jean</h2>
        <p>Segunda-feira, 05 de agosto</p>

        {/* BUSCAR */}
        <div className="mt-6 flex justify-between gap-2">
          <Input
            className="focus:outline-none"
            placeholder="Faça sua busca..."
          />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores barbeiros"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTOS */}
        <h2 className="mb-3 mt-6 text-sm font-semibold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit opacity-80">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png"
                    alt="avatar"
                  />
                </Avatar>
                <p className="text-sm">Vintage Barber</p>
              </div>
            </div>
            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-6">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">10:45</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-sm font-semibold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}
