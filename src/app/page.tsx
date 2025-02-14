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
    <div className="min-h-screen bg-slate-100 dark:bg-slate-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 mb-4">
            Your Gateway to Holistic Health Knowledge
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Discover comprehensive information about health, wellness, and natural healing methods.
          </p>
          
          {/* Search Command */}
          <div className="relative w-full max-w-2xl mx-auto">
            <Command className="rounded-lg border shadow-md bg-white dark:bg-slate-800">
              <div className="flex items-center border-b px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 text-slate-500" />
                <CommandInput 
                  placeholder="Search health topics..." 
                  className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500"
                />
              </div>
              <CommandList className="max-h-[300px] overflow-y-auto p-2">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  {categories.map((category) => (
                    <CommandItem 
                      key={category.title}
                      className="flex items-center px-2 py-1.5 text-sm rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                    >
                      <span className="mr-2 text-lg">{category.icon}</span>
                      <span className="text-slate-700 dark:text-slate-300">{category.title}</span>
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
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-500 mb-8 text-center">
            Explore Health Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card 
                key={category.title} 
                className="hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-50">{category.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{category.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}