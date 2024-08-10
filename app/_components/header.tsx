import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import SidebarButton from "./sidebar-button"

function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image
          alt="Barber"
          src="/Logo.png"
          height={18}
          width={120}
          className="h-auto w-auto object-contain"
        />

        <SidebarButton />
      </CardContent>
    </Card>
  )
}

export default Header
