import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import SidebarSheet from "./sidebar-sheet"

function Header() {
  return (
    <Card className="rounded-t-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          alt="Barber"
          src="/Logo.png"
          height={18}
          width={120}
          className="h-auto w-auto object-contain"
        />

        <SidebarSheet />
      </CardContent>
    </Card>
  )
}

export default Header
