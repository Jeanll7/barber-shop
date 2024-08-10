import Image from "next/image"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOut, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const SidebarButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        <div className="flex items-center gap-3 border-b border-solid py-5">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAxfHxBdmF0YXJlc3xlbnwwfHwwfHx8Mg%3D%3D" />
          </Avatar>

          <div>
            <span className="font-bold">John Doe</span>
            <p className="text-xs">johndoe@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b border-solid py-5">
          <SheetClose asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>
          <Button className="justify-start gap-2" variant="ghost">
            <CalendarIcon size={18} />
            Agendamentos
          </Button>
        </div>

        <div className="flex flex-col gap-2 border-b border-solid py-5">
          {quickSearchOptions.map((option) => (
            <Button
              key={option.title}
              className="justify-start gap-2"
              variant="ghost"
            >
              <Image
                src={option.imageUrl}
                height={18}
                width={18}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="flex items-center py-5">
          <Button variant="ghost" className="justify-start gap-2">
            <LogOut size={18} />
            Sair da conta
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarButton
