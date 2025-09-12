"use client";

import { useEffect, useState } from "react";
import { TrendingUp, Users, Award, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: Briefcase,
    value: 250,
    suffix: "+",
    label: "Proyectos Completados",
    description: "Transformaciones exitosas",
  },
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Clientes Satisfechos",
    description: "En 15 países",
  },
  {
    icon: TrendingUp,
    value: 45,
    suffix: "%",
    label: "Incremento Promedio",
    description: "En rentabilidad",
  },
  {
    icon: Award,
    value: 12,
    suffix: "",
    label: "Años de Experiencia",
    description: "Liderando el mercado",
  },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const increment = end / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-brand bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="stats-section" className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={cn(
              "text-center space-y-4 p-6 rounded-xl bg-gradient-to-br from-background to-muted/20 border border-muted/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1",
              "animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="inline-flex p-3 rounded-lg bg-primary/10">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              {isVisible ? (
                <Counter end={stat.value} suffix={stat.suffix} />
              ) : (
                <span className="text-4xl font-bold text-muted-foreground">0{stat.suffix}</span>
              )}
            </div>
            <div>
              <p className="font-semibold">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}