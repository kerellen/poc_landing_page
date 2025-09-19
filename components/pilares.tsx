"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ClipboardList,
  LineChart,
  Target,
  Wallet,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: LineChart,
    title: "Planificación Económico Financiera",
    position: { top: "6%", left: "50%" },
  },
  {
    icon: ClipboardList,
    title: "Outsourcing Administrativo",
    position: { top: "26%", left: "87%" },
  },
  {
    icon: Wallet,
    title: "Administración Patrimonial",
    position: { top: "74%", left: "87%" },
  },
  {
    icon: Zap,
    title: "Eficiencia Energética",
    position: { top: "74%", left: "13%" },
  },
  {
    icon: Target,
    title: "Innovación Estratégica",
    position: { top: "26%", left: "13%" },
  },
] as const;

export function Pilares() {
  const [viewMode, setViewMode] = useState<"diagram" | "cards">("cards");

  const toggleViewMode = () =>
    setViewMode((prev) => (prev === "diagram" ? "cards" : "diagram"));

  return (
    <div className="relative mx-auto mt-12 flex w-full max-w-3xl flex-col gap-6">
      <div className="hidden">
        <Button onClick={toggleViewMode} variant="outline">
          {viewMode === "diagram" ? "Ver como cards" : "Ver como diagrama"}
        </Button>
      </div>
      {viewMode === "diagram" ? (
        <div className="relative w-full max-w-3xl">
          <div
            className="relative mx-auto aspect-square w-full max-w-3xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <svg
              viewBox="0 0 200 200"
              className="h-full w-full text-primary/30"
              aria-hidden="true"
              style={{ maxWidth: "100%", height: "auto" }}
            >
              <polygon
                points="100,10 180,60 180,140 100,190 20,140 20,60"
                fill="currentColor"
                opacity={0.1}
              />
              <polygon
                points="100,10 180,60 180,140 100,190 20,140 20,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-[60vw] max-h-[150px] w-[60vw] max-w-[150px] items-center justify-center sm:h-[200px] sm:w-[200px] sm:max-h-[200px] sm:max-w-[200px] md:h-[250px] md:w-[250px] md:max-h-[250px] md:max-w-[250px] lg:h-[300px] lg:w-[300px] lg:max-h-[300px] lg:max-w-[300px] xl:h-[400px] xl:w-[400px] xl:max-h-[400px] xl:max-w-[400px]">
                <Image
                  src="/logoPrisma360.png"
                  alt="Logo"
                  fill
                  sizes="(max-width: 640px) 60vw, (min-width: 640px) 200px, (min-width: 768px) 250px, (min-width: 1024px) 300px, 150px"
                  className="object-contain p-3"
                />
              </div>
            </div>
            {pillars.map(({ icon: Icon, title, position }) => (
              <div
                key={title}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center"
                style={position}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-white shadow-lg">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <span className="text-stroke-orange mt-3 max-w-[10rem] rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide text-primary drop-shadow-lg">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full space-y-4">
          {pillars.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white/80 p-4 shadow-sm backdrop-blur"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-primary sm:text-lg">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
