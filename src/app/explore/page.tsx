import Link from 'next/link';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function ExplorePage() {
  const cards = [
    { id: '1', title: 'Card One', content: 'This is the content for card one.' },
    { id: '2', title: 'Card Two', content: 'This is the content for card two.' },
    { id: '3', title: 'Card Three', content: 'This is the content for card three.' },
    { id: '4', title: 'Card Four', content: 'This is the content for card four.' },
    { id: '5', title: 'Card Five', content: 'This is the content for card five.' },
    { id: '6', title: 'Card Six', content: 'This is the content for card six.' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Link 
          href={`/explore/${card.id}`} 
          key={card.id} 
          className="block transition hover:shadow-lg"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{card.content}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
