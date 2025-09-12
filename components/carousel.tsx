"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, TrendingUp, Users, Target, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const successStories = [
  {
    id: 1,
    title: "Transformación Digital en Manufactura",
    company: "Industrial Tech SA",
    challenge: "Procesos manuales obsoletos y pérdida de competitividad en el mercado",
    solution: "Implementación de sistema ERP integrado y automatización de procesos clave",
    results: [
      "Reducción del 40% en tiempos de producción",
      "Aumento del 25% en satisfacción del cliente",
      "ROI del 250% en el primer año",
    ],
    metrics: { growth: "+45%", efficiency: "+60%", cost: "-35%" },
    icon: TrendingUp,
  },
  {
    id: 2,
    title: "Optimización de Cadena de Suministro",
    company: "Logística Global",
    challenge: "Altos costos logísticos y tiempos de entrega inconsistentes",
    solution: "Rediseño completo de rutas y implementación de sistema de tracking en tiempo real",
    results: [
      "Reducción del 30% en costos de transporte",
      "Mejora del 50% en tiempos de entrega",
      "Eliminación del 95% de errores de envío",
    ],
    metrics: { growth: "+30%", efficiency: "+50%", cost: "-30%" },
    icon: Target,
  },
  {
    id: 3,
    title: "Reestructuración Financiera",
    company: "Retail Corporation",
    challenge: "Márgenes decrecientes y problemas de liquidez",
    solution: "Análisis profundo de rentabilidad por producto y optimización de capital de trabajo",
    results: [
      "Mejora del 35% en márgenes operativos",
      "Reducción del 40% en días de inventario",
      "Liberación de $2M en capital de trabajo",
    ],
    metrics: { growth: "+55%", efficiency: "+40%", cost: "-25%" },
    icon: Award,
  },
  {
    id: 4,
    title: "Expansión de Mercado",
    company: "StartUp Innovadora",
    challenge: "Necesidad de escalar operaciones sin perder calidad",
    solution: "Desarrollo de plan estratégico de crecimiento y sistemas escalables",
    results: [
      "Expansión a 5 nuevos mercados",
      "Crecimiento del 200% en ingresos",
      "Mantenimiento del NPS en 85+",
    ],
    metrics: { growth: "+200%", efficiency: "+80%", cost: "-20%" },
    icon: Users,
  },
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? successStories.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentStory = successStories[currentIndex];
  const Icon = currentStory.icon;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Card className="overflow-hidden border-muted/50 bg-gradient-to-br from-background to-muted/10">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">{currentStory.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{currentStory.company}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-primary">Desafío</h4>
              <p className="text-sm text-muted-foreground">{currentStory.challenge}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-primary">Solución</h4>
              <p className="text-sm text-muted-foreground">{currentStory.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-primary">Resultados Obtenidos</h4>
            <ul className="space-y-1">
              {currentStory.results.map((result, index) => (
                <li key={index} className="flex items-start text-sm text-muted-foreground">
                  <span className="text-primary mr-2">✓</span>
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{currentStory.metrics.growth}</p>
              <p className="text-xs text-muted-foreground">Crecimiento</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{currentStory.metrics.efficiency}</p>
              <p className="text-xs text-muted-foreground">Eficiencia</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{currentStory.metrics.cost}</p>
              <p className="text-xs text-muted-foreground">Reducción Costos</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="hover:bg-primary hover:text-primary-foreground transition-colors p-2"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Dots */}
        <div className="flex space-x-2">
          {successStories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "w-8 bg-primary" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="hover:bg-primary hover:text-primary-foreground transition-colors p-2"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}