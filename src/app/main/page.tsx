import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  Clock, 
  Calendar, 
  Apple, 
  Droplets,
  Timer,
  Utensils,

  Brain,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const ClotProtocolPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-900 dark:to-slate-950 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 mb-4">
            🩸 Clot-Dissolving Protocol 🩸
          </h1>
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Improve blood flow, dissolve clots, and restore circulation naturally.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-slate-600/10 dark:bg-slate-800/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900">Overview</TabsTrigger>
            <TabsTrigger value="daily" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900">Daily Routine</TabsTrigger>
            <TabsTrigger value="weekly" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900">Weekly Habits</TabsTrigger>
            <TabsTrigger value="nutrition" className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900">Nutrition</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300">
                  Key Takeaways
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">Essential points for success</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {[
                    { icon: <CheckCircle className="h-5 w-5" />, text: "Consistency is key – Stick to the routine for best results" },
                    { icon: <Brain className="h-5 w-5" />, text: "Listen to the body – Adjust exercise intensity as needed" },
                    { icon: <Droplets className="h-5 w-5" />, text: "Stay hydrated – Water is crucial for blood flow and detox" },
                    { icon: <AlertCircle className="h-5 w-5" />, text: "Monitor progress – Note any improvements or symptoms" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <span className="text-slate-600 dark:text-slate-400">{item.icon}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="daily" className="space-y-4">
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300">
                  Daily Routine
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">Follow these steps each day</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {[
                    { icon: <Timer className="h-5 w-5" />, text: "Fasting (16-18 hours daily)", link: "https://www.youtube.com/watch?v=vhmtoAYVRSo" },
                    { icon: <Droplets className="h-5 w-5" />, text: "Cayenne Pepper Water or Lemon Water" },
                  
                    // Add more daily routine items
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                        <span className="text-slate-600 dark:text-slate-400">{item.icon}</span>
                        <span>{item.text}</span>
                      </div>
                      {item.link && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                          asChild
                        >
                          <Link href={item.link} target="_blank">Learn More</Link>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add Weekly and Nutrition tabs similarly */}
        </Tabs>
      </div>
    </div>
  );
};

export default ClotProtocolPage;