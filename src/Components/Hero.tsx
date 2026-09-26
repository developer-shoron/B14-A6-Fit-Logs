
import { ArrowDown, Dumbbell, Sparkles } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#ccff00]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-64 w-64 rounded-full bg-[#ccff00]/5 blur-3xl" />

      <div className="relative flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20">
        {/* Left: Text */}
        <div className="w-full md:flex-1 text-center md:text-left order-2 md:order-1">
          {/* Small Label */}
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#ccff00]" />

            <p className="text-[#ccff00] text-[11px] sm:text-xs font-bold tracking-[0.2em]">
              WORKOUT LIBRARY
            </p>
          </div>

          {/* Heading */}
          <h1 className="font-oswald text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] tracking-tight text-white">
            Train with{" "}
            <span className="text-[#ccff00]">Intent.</span>
            <br />
            Log Every Set.
          </h1>

          {/* Description */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-7 text-gray-400 max-w-xl mx-auto md:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* CTA */}
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center md:items-start gap-3">
            <a
              href="#library"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#ccff00] px-5 sm:px-6 py-3 text-sm sm:text-base font-bold text-black shadow-[0_0_30px_rgba(204,255,0,0.12)] transition-all duration-300 hover:bg-[#d8ff33] hover:shadow-[0_0_35px_rgba(204,255,0,0.2)] hover:-translate-y-0.5"
            >
              BROWSE WORKOUTS

              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </a>

         
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:flex-1 order-1 md:order-2">
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
            {/* Image glow */}
            <div className="absolute -inset-3 rounded-[2rem] bg-[#ccff00]/10 blur-2xl" />

            {/* Image Card */}
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-2xl">
              <Image
                src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
                alt="Workout hero"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Image Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">
                    Today&apos;s focus
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-white">
                    Train. Track. Improve.
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ccff00] text-black">
                  <Dumbbell className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

