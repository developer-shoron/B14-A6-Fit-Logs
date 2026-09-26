import type { Workout } from '@/types';
import { Clock, Flame, Star, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-xl border border-white/10 bg-[#111] transition-all duration-300 hover:-translate-y-1 hover:border-[#ccff00]/40 hover:shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

        {/* View icon */}
        <div className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded bg-[#ccff00] px-2 py-0.5 text-[10px] font-bold uppercase text-black transition-transform duration-200 group-hover:scale-[1.02]"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="font-oswald text-lg font-bold uppercase text-white transition-colors duration-300 group-hover:text-[#ccff00]">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-gray-500">{workout.equipment}</p>

        <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame className="h-3 w-3" />
            {workout.caloriesBurned} kcal
          </span>

          <span className="ml-auto flex items-center gap-1 text-[#ccbf00]">
            <Star className="h-3 w-3 fill-[#ccff00] text-[#ccff00]" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;