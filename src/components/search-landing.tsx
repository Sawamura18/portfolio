import { useState, useEffect } from "react"
import { Search, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"

const SearchLanding = () => {
  const [searchQuery, setSearchQuery] = useState("Utkarsh Singh")
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate("/results")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen bg-search-background flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Logo/Brand */}
        <div className="text-center">
          <h1 className="text-6xl font-light text-foreground mb-2">
            Port<span className="text-link">folio</span>
          </h1>
          <p className="text-muted-foreground">Search for information about developers</p>
        </div>

        {/* Search Box */}
        <div className="relative">
          <div className="flex items-center bg-search-input border border-search-input-border rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 focus-within:shadow-lg focus-within:border-search-input-focus">
            <Search className="h-5 w-5 text-muted-foreground ml-4" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 border-0 bg-transparent px-4 py-3 text-lg focus:outline-none focus:ring-0 rounded-full"
              placeholder="Search for developers..."
            />
            <Mic className="h-5 w-5 text-muted-foreground mr-4 cursor-pointer hover:text-foreground" />
          </div>
        </div>

        {/* Search Buttons */}
        <div className="flex justify-center gap-4">
          <Button
            onClick={handleSearch}
            className="bg-search-button hover:bg-search-button-hover text-search-button-foreground px-6 py-2 rounded shadow-sm border border-transparent"
          >
            Portfolio Search
          </Button>
          <Button
            variant="outline"
            onClick={handleSearch}
            className="px-6 py-2 rounded shadow-sm"
          >
            I'm Feeling Lucky
          </Button>
        </div>

        {/* Search Stats */}
        <div className="text-center text-sm text-muted-foreground">
          Portfolio search available in: English
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-center text-sm text-muted-foreground">
        <p>© 2024 Portfolio Search Engine</p>
      </div>
    </div>
  )
}

export default SearchLanding