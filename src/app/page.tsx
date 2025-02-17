import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Search } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Holistic Healing",
    description: "Natural remedies and traditional healing practices",
    icon: "🌿",
  },
  {
    title: "Nutrition & Diet",
    description: "Healthy eating habits and dietary guidelines",
    icon: "🥗",
  },
  {
    title: "Mental Wellness",
    description: "Practices for mental and emotional health",
    icon: "🧘‍♀️",
  },
  {
    title: "Physical Exercise",
    description: "Movement and fitness routines",
    icon: "💪",
  },
  {
    title: "Energy Work",
    description: "Practices for balancing body energy",
    icon: "✨",
  },
  {
    title: "Herbal Medicine",
    description: "Traditional plant-based remedies",
    icon: "🌱",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 py-16 bg-white">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl font-bold tracking-tight mb-6 text-gray-900">
          Your Journey to Holistic Health
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover ancient wisdom and modern healing practices for your mind, body, and spirit.
        </p>
        
        {/* Search Command */}
        <Card className="max-w-2xl mx-auto border border-gray-200">
          <CardContent className="py-4 px-3">
            <Command className="rounded-lg">
              <div className="flex items-center border-b border-gray-200 px-3 py-2">
                <Search className="mr-2 h-4 w-4 text-gray-500" />
                <CommandInput placeholder="Search health topics..." className="flex-1" />
              </div>
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  {categories.map((category) => (
                    <CommandItem key={category.title}>
                      <span className="mr-2">{category.icon}</span>
                      {category.title}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </CardContent>
        </Card>
      </div>

      {/* Categories Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Explore Health Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <Card key={category.title} className="border border-gray-200 hover:shadow-sm transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-800">{category.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">{category.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Healing Journey?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join our community of healers and seekers. Share knowledge, find support, and grow together.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>
    </main>
  );
}
