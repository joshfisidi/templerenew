'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Leaf, Brain, Heart, Sun, Moon } from "lucide-react"

export default function Home() {
  const categories = [
    { 
      title: 'Nutrition & Diet',
      icon: <Leaf className="h-6 w-6" />,
      description: 'Holistic nutrition and dietary protocols'
    },
    { 
      title: 'Mind & Spirit',
      icon: <Brain className="h-6 w-6" />,
      description: 'Mental and spiritual wellness practices'
    },
    { 
      title: 'Physical Health',
      icon: <Heart className="h-6 w-6" />,
      description: 'Natural approaches to physical wellbeing'
    },
    { 
      title: 'Energy & Vitality',
      icon: <Sun className="h-6 w-6" />,
      description: 'Boost your energy and life force'
    },
    { 
      title: 'Rest & Recovery',
      icon: <Moon className="h-6 w-6" />,
      description: 'Sleep optimization and recovery protocols'
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Your Natural Path to <span className="text-primary">Wellness</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Discover ancient wisdom and modern healing protocols for optimal health and vitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg">
              Explore Protocols
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container space-y-6 bg-slate-50 dark:bg-transparent py-8 md:py-12 lg:py-24 rounded-lg">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
            Holistic Healing
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Comprehensive protocols combining traditional wisdom with modern research
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container py-8 md:py-12">
        <div className="flex flex-col items-center space-y-4 text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Explore Health Categories
          </h2>
          <p className="text-muted-foreground">
            Discover protocols tailored to your wellness journey
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.title} 
              className="hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-8 md:py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="flex flex-col items-center space-y-4 text-center p-6">
            <h3 className="text-2xl font-bold">Start Your Healing Journey Today</h3>
            <p className="text-primary-foreground/90 max-w-[42rem]">
              Join our community of wellness seekers and discover the power of natural healing.
            </p>
            <Button variant="secondary" size="lg" className="mt-4">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}