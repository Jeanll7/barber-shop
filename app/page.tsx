import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import BarbershopItem from "./_components/barbershop-item"
import { db } from "./_lib/prisma "
import { quickSerachOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import SearchBar from "./_components/search-bar"

export default async function Home() {
  // chamar banco de dados
  const barbershops = await db.barbershop.findMany({})
  const populaBarberShops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jean</h2>
        <p>Segunda-feira, 05 de agosto</p>

        {/* BUSCAR */}
        <SearchBar />

        {/* BUSCA RAPIDA */}
        <div className="mt-6 flex items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {quickSerachOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>
        {/* BUSCA RAPIDA */}

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
        <BookingItem />

        <h2 className="mb-3 mt-6 text-sm font-semibold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-sm font-semibold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {populaBarberShops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card className="mt-8 rounded-none">
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2024 Copyrigght Barber Shop
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}
