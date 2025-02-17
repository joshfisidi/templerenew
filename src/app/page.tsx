'use client'

import React, { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Search } from "lucide-react"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { title: "Nutrition", icon: "🥗", description: "Diet and nutritional guidance" },
    { title: "Exercise", icon: "💪", description: "Physical fitness and movement" },
    { title: "Mental Health", icon: "🧠", description: "Emotional and psychological wellbeing" },
    { title: "Sleep", icon: "😴", description: "Rest and recovery" },
    { title: "Holistic Health", icon: "🌿", description: "Natural and alternative medicine" },
  ]

  // Filter categories based on the search query.
  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories
    return categories.filter((category) =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, categories])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Gateway to Holistic Health Knowledge
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover comprehensive information about health, wellness, and natural healing methods.
          </p>

          {/* Search Command */}
          <div className="relative w-full max-w-2xl mx-auto">
            <Command className="rounded-lg border shadow-md bg-popover">
              <div className="flex items-center border-b px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                <CommandInput
                  value={searchQuery}
                  onValueChange={(value) => setSearchQuery(value)}
                  placeholder="Search health topics..."
                  className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <CommandList className="max-h-[300px] overflow-y-auto p-2">
                {filteredCategories.length === 0 ? (
                  <CommandEmpty>No results found.</CommandEmpty>
                ) : (
                  <CommandGroup heading="Suggestions">
                    {filteredCategories.map((category) => (
                      <CommandItem
                        key={category.title}
                        onSelect={() => setSearchQuery(category.title)}
                        className="flex items-center px-2 py-1.5 text-sm rounded-md cursor-pointer"
                      >
                        <span className="mr-2 text-lg">{category.icon}</span>
                        <span className="text-foreground">{category.title}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </Command>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Explore Health Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => (
                <Card
                  key={category.title}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <h4 className="font-semibold text-card-foreground">{category.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center text-muted-foreground">
                No categories match your search.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
