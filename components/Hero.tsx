import React from "react";
import Image from "next/image";
interface HeroProps {
  hook: string;
  subhook: string;
  cta: string;
}
export default function Hero({ hook, subhook, cta }: HeroProps) {
  return (
    <div className="bg-slate-100 py-20">
      <div className="max-w-6xl mx-auto h-full px-2">
        <div className="md:grid grid-cols-2 items-center space-y-20">
          <div className="">
            <div className="space-y-1 mb-12">
              <h1 className="text-6xl font-bold">{hook}</h1>
              <h2 className="text-2xl pl-1 font-light">{subhook}</h2>
            </div>
            <button className="py-4 px-8 bg-purple-500 text-white font-bold rounded-2xl capitalize ">
              {cta}
            </button>
          </div>

          <div className="">
            <Image
              src="/hero.svg"
              alt="hero"
              width={550}
              height={200}
              //   fill
              //   style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
