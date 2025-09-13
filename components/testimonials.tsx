"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "CEO",
    company: "TechnoVision S.A.",
    rating: 5,
    content:
      "La consultoría fue fundamental para optimizar nuestros procesos. Logramos reducir costos en un 35% y mejorar la eficiencia operativa significativamente. El equipo demostró un profundo conocimiento del sector.",
    image: "CM",
  },
  {
    id: 2,
    name: "María García",
    role: "Directora Financiera",
    company: "Grupo Industrial Norte",
    rating: 5,
    content: "Excelente análisis de rentabilidad. Nos ayudaron a identificar oportunidades de mejora que no habíamos detectado. El dashboard de BI que implementaron transformó nuestra toma de decisiones.",
    image: "MG",
  },
  {
    id: 3,
    name: "Roberto Silva",
    role: "Gerente General",
    company: "Logística Integral",
    rating: 5,
    content: "El modelo de cash flow proyectado nos salvó de una crisis de liquidez. Su experiencia en análisis financiero es incomparable. Recomiendo sus servicios sin dudarlo.",
    image: "RS",
  },
  {
    id: 4,
    name: "Ana Martínez",
    role: "Directora de Operaciones",
    company: "Retail Solutions",
    rating: 5,
    content: "Transformaron completamente nuestra estrategia de crecimiento. Los resultados superaron nuestras expectativas con un incremento del 45% en la rentabilidad del primer año.",
    image: "AM",
  },
  {
    id: 5,
    name: "Diego Fernández",
    role: "CFO",
    company: "Innovate Corp",
    rating: 5,
    content: "La auditoría de costos reveló ineficiencias que representaban millones en pérdidas anuales. Su intervención fue crucial para el éxito de nuestra reestructuración.",
    image: "DF",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card
          key={testimonial.id}
          className={cn(
            "relative overflow-hidden border-muted/50 bg-gradient-to-br from-background to-muted/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-1",
            "animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-6">
            {/* Quote Icon */}
            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
            
            {/* Rating */}
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <p className="text-sm text-muted-foreground mb-6 italic">
              &ldquo;{testimonial.content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center space-x-3">
              {testimonial.image.startsWith("/") ? (
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-brand text-white font-semibold">
                  {testimonial.image}
                </div>
              )}
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role} - {testimonial.company}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
