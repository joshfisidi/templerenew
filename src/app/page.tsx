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
    <main className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Your Journey to Holistic Health
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover ancient wisdom and modern healing practices for your mind, body, and spirit.
          </p>
          
          {/* Search Command */}
          <div className="max-w-2xl mx-auto px-4 mt-8">
            <Card className="border border-border">
              <CardContent className="p-2 sm:p-3">
                <Command className="rounded-lg">
                  <div className="flex items-center border-b px-2 py-2">
                    <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                    <CommandInput 
                      placeholder="Search health topics..." 
                      className="flex-1 placeholder:text-muted-foreground"
                    />
                  </div>
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      {categories.map((category) => (
                        <CommandItem 
                          key={category.title}
                          className="flex items-center py-2 px-2 cursor-pointer"
                        >
                          <span className="mr-3 text-xl">{category.icon}</span>
                          <span className="text-sm sm:text-base">{category.title}</span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-foreground px-4">
          Explore Health Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category) => (
            <Card 
              key={category.title} 
              className="border border-border hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl sm:text-3xl shrink-0">{category.icon}</span>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">{category.title}</h4>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 py-12 sm:py-16 mt-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Join our community of healers and seekers. Share knowledge, find support, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}