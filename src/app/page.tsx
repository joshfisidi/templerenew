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
    <div className="flex flex-col gap-8">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Your App
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Your compelling description goes here. Make it count!
          </p>
        </div>
      </section>

      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Highlight your main features here
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {/* Add your feature cards here */}
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