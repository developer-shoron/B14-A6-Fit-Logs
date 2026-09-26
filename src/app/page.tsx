import Hero from '@/Components/Hero';
import WorkoutCard from '@/Components//WorkoutCard';
import type { Workout } from '@/types';

async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error('Failed to fetch workouts');

  return res.json();
}

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <div>
      <Hero />

      <section
        id="library"
        className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 md:px-8 md:py-20"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#ccff00]/5 blur-3xl" />

        <div className="relative">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-oswald text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                The Library
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                Twelve lifts covering every major muscle group.
              </p>
            </div>

            <div className="flex h-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ccff00] shadow-[0_0_10px_rgba(204,255,0,0.7)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {workouts.length} Workouts
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}