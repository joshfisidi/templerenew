'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Search } from "lucide-react"

export default function Home() {
  const categories = [
    { title: 'Nutrition', icon: '🥗', description: 'Diet and nutritional guidance' },
    { title: 'Exercise', icon: '💪', description: 'Physical fitness and movement' },
    { title: 'Mental Health', icon: '🧠', description: 'Emotional and psychological wellbeing' },
    { title: 'Sleep', icon: '😴', description: 'Rest and recovery' },
    { title: 'Holistic Health', icon: '🌿', description: 'Natural and alternative medicine' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-amber-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-amber-600">TempleRenew</h1>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-amber-600 hover:text-amber-700">Home</a>
                <a href="/protocols" className="text-amber-600 hover:text-amber-700">Protocols</a>
                <a href="#" className="text-amber-600 hover:text-amber-700">About</a>
              </nav>
              <button className="p-2 text-amber-600 hover:text-amber-700">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-amber-800 mb-4">
            Your Gateway to Holistic Health Knowledge
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover comprehensive information about health, wellness, and natural healing methods.
          </p>
          
          {/* Search Command */}
          <div className="relative w-full max-w-2xl mx-auto">
            <Command className="rounded-lg border shadow-md bg-white">
              <div className="flex items-center border-b px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 text-gray-500" />
                <CommandInput 
                  placeholder="Search health topics..." 
                  className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500"
                />
              </div>
              <CommandList className="max-h-[300px] overflow-y-auto p-2">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  {categories.map((category) => (
                    <CommandItem 
                      key={category.title}
                      className="flex items-center px-2 py-1.5 text-sm rounded-md hover:bg-gray-100"
                    >
                      <span className="mr-2 text-lg">{category.icon}</span>
                      <span>{category.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-amber-800 mb-8 text-center">
            Explore Health Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card 
                key={category.title} 
                className="hover:shadow-lg transition-shadow bg-white border border-gray-200"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{category.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-50 py-8">
        <div className="container mx-auto px-4 text-center text-amber-800">
          <p>© 2025 TempleRenew. Your journey to holistic health starts here.</p>
        </div>
      </footer>
    </div>
  )
}