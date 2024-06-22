'use client';
import React, { useState } from 'react';
import Card from './card';

interface CardData {
    content1: string;
    content2: string;
    id: number;
  }

  const Cardblock: React.FC = () => {
    const cards: CardData[] = [
      { content1: 'Heading1',content2:'Lorem ipsum dolor sit amet consectetur. Hac mattis pulvinar volutpat hendrerit quisque morbi. Leo enim et tincidunt duis turpis ornare lacinia nunc dui. Porttitor blandit maecenas egestas justo consequat vitae urna proin.', id: 1 },
      { content1: 'Heading2',content2:'Lorem ipsum dolor sit amet consectetur. Hac mattis pulvinar volutpat hendrerit quisque morbi. Leo enim et tincidunt duis turpis ornare lacinia nunc dui. Porttitor blandit maecenas egestas justo consequat vitae urna proin.', id: 2 },
      { content1: 'Heading3',content2:'Lorem ipsum dolor sit amet consectetur. Hac mattis pulvinar volutpat hendrerit quisque morbi. Leo enim et tincidunt duis turpis ornare lacinia nunc dui. Porttitor blandit maecenas egestas justo consequat vitae urna proin.', id: 3 },
      { content1: 'Heading4',content2:'Lorem ipsum dolor sit amet consectetur. Hac mattis pulvinar volutpat hendrerit quisque morbi. Leo enim et tincidunt duis turpis ornare lacinia nunc dui. Porttitor blandit maecenas egestas justo consequat vitae urna proin.', id: 4 },
      { content1: 'Heading5',content2:'Lorem ipsum dolor sit amet consectetur. Hac mattis pulvinar volutpat hendrerit quisque morbi. Leo enim et tincidunt duis turpis ornare lacinia nunc dui. Porttitor blandit maecenas egestas justo consequat vitae urna proin.', id: 5 },
      { content1: 'Heading6',content2:'Lorem ipsum dolor sit amet consectetur. Hac mattis pulvinar volutpat hendrerit quisque morbi. Leo enim et tincidunt duis turpis ornare lacinia nunc dui. Porttitor blandit maecenas egestas justo consequat vitae urna proin.', id: 6 }
    ];

  
    const [focusedCardIndex, setFocusedCardIndex] = useState<number>(2); // Initially focusing the third card

    const handleCardClick = (index: number) => {
      setFocusedCardIndex(index);
    };
  
    const visibleCards = [
      cards[focusedCardIndex - 1],
      cards[focusedCardIndex],
      cards[focusedCardIndex + 1],
    ];

    return (
        <div className="flex ml-10 mr-10 justify-center items-center h-[80vh] overflow-hidden">
          {visibleCards.map((card, index) => (
            card && (
              <Card
                key={card.id}
                content1={card.content1}
                content2={card.content2}
                className={`
                  ${index === 1 ? 'transform scale-110 z-10 filter-none opacity-100' : 'filter blur-sm opacity-70'}
                  ${index === 0 ? 'transform -translate-x-10' : ''}
                  ${index === 2 ? 'transform translate-x-10' : ''}
                `}
                onClick={() => handleCardClick(focusedCardIndex + (index - 1))}
              />
            )
          ))}
        </div>
      );
}

export default Cardblock;
