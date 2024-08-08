import { Avatar, AvatarImage } from "@radix-ui/react-avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

// TODO receber agendamento como prop
const BookingItem = () => {
  return (
    <>
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
    </>
  )
}

export default BookingItem