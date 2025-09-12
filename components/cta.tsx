"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";

export function CTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-brand to-primary p-8 md:p-12 text-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          ¿Listo para transformar tu empresa?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Descubre cómo podemos ayudarte a optimizar procesos, reducir costos y acelerar el crecimiento. 
          Agenda una consulta gratuita con nuestros expertos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold group"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Consulta Gratuita
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 font-semibold"
          >
            <Phone className="mr-2 h-5 w-5" />
            Llamar Ahora
          </Button>
        </div>

        <p className="text-sm text-white/70 pt-4">
          Sin compromiso • Análisis personalizado • Resultados garantizados
        </p>
      </div>
    </div>
  );
}