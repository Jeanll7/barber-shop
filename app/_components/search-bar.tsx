import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const SearchBar = () => {
  return (
    <div className="mt-6 flex justify-between gap-2">
      <Input className="focus:outline-none" placeholder="Faça sua busca..." />
      <Button>
        <SearchIcon />
      </Button>
    </div>
  )
}

export default SearchBar
