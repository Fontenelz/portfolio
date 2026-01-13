'use client';

import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { CAROUSEL_ITEMS_COUNT } from '@/lib/constants';

export function CarouselSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: CAROUSEL_ITEMS_COUNT }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/5">
              <Card className="h-44">
                <CardContent className="flex items-center justify-center h-full py-0">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {count > 1 && (
          <div className="flex md:hidden justify-center items-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700 ${
                  current === index + 1
                    ? 'bg-neutral-400 dark:bg-neutral-400'
                    : ''
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

