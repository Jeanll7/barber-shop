import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="mt-8 rounded-none">
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2024 Copyrigght Barber Shop
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
