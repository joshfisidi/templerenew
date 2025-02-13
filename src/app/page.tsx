import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, Calendar, Apple, Droplets } from 'lucide-react';

const ClotProtocolPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">
            🩸 Clot-Dissolving Protocol 🩸
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Improve blood flow, dissolve clots, and restore circulation naturally.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="daily" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="daily">
              <Clock className="mr-2 h-4 w-4" />
              Daily Routine
            </TabsTrigger>
            <TabsTrigger value="weekly">
              <Calendar className="mr-2 h-4 w-4" />
              Weekly Habits
            </TabsTrigger>
            <TabsTrigger value="foods">
              <Apple className="mr-2 h-4 w-4" />
              Foods & Supplements
            </TabsTrigger>
            <TabsTrigger value="takeaways">
              <CheckCircle className="mr-2 h-4 w-4" />
              Key Takeaways
            </TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Daily Protocol</CardTitle>
                <CardDescription>Follow these steps each day for optimal results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: "Fasting (16-18 hours daily)",
                      description: "Practice intermittent fasting for improved circulation"
                    },
                    {
                      title: "Cayenne Pepper or Lemon Water",
                      description: "Drink daily for circulation support"
                    },
                    {
                      title: "Nattokinase & Serrapeptase",
                      description: "Take on an empty stomach"
                    },
                    {
                      title: "Hydration",
                      description: "Drink plenty of water throughout the day",
                      icon: <Droplets className="h-4 w-4" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border">
                      <div className="flex-1">
                        <h3 className="font-semibold text-amber-800">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weekly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Habits</CardTitle>
                <CardDescription>Incorporate these practices 1-2 times per week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      title: "🔥 Infrared Sauna",
                      description: "Use 1-2x per week for improved circulation"
                    },
                    {
                      title: "🛀 Epsom Salt Baths",
                      description: "Take 1-2x per week to reduce inflammation"
                    },
                    {
                      title: "🔆 Red Light Therapy",
                      description: "Optional but beneficial for circulation and healing"
                    }
                  ].map((item, index) => (
                    <Card key={index} className="p-4">
                      <h3 className="font-semibold text-amber-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="foods" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Key Foods & Supplements</CardTitle>
                <CardDescription>Prioritize these nutrients in your daily diet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-amber-800">Foods</h3>
                    <ul className="space-y-2">
                      <li>🥑 Healthy Fats - Avocado, nuts, omega-3 oils</li>
                      <li>🥦 Raw Greens - Spinach, kale, Swiss chard</li>
                      <li>🍇 Antioxidants - Berries, citrus, dark chocolate</li>
                      <li>🌶️ Spices - Cayenne, garlic, cinnamon</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-amber-800">Supplements</h3>
                    <ul className="space-y-2">
                      <li>💊 Nattokinase</li>
                      <li>💊 Serrapeptase</li>
                      <li>💊 Bromelain</li>
                      <li>💊 Magnesium</li>
                      <li>💊 CoQ10</li>
                      <li>💊 Activated Charcoal</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="takeaways" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Key Takeaways</CardTitle>
                <CardDescription>Essential points to remember</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Consistency is key – Stick to the routine for best results",
                    "Listen to the body – Adjust exercise intensity as needed",
                    "Stay hydrated – Water is crucial for blood flow and detox",
                    "Monitor progress – Note any improvements or symptoms"
                  ].map((takeaway, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClotProtocolPage;