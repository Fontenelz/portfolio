import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { TESTIMONIALS } from '@/lib/constants';

export function TestimonialsSection() {
  return (
    <section>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}

