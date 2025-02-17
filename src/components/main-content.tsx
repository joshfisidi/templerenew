import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function MainContent() {
  return (
    <main className="flex-1 p-8 overflow-auto">
      <div className="mb-8">
        <Input
          type="search"
          placeholder="Search..."
          className="w-full max-w-md bg-yellow-200 dark:bg-gray-700 text-yellow-800 dark:text-yellow-200 placeholder-yellow-600 dark:placeholder-yellow-400"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="bg-yellow-300 dark:bg-gray-800 border-yellow-400 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-yellow-800 dark:text-yellow-200">Card {i}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-700 dark:text-yellow-300">
                This is the content for card {i}. It can contain any information you want to display.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

