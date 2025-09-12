"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Qué tipo de empresas pueden beneficiarse de sus servicios?",
    answer: "Trabajamos con empresas de todos los tamaños, desde startups hasta corporaciones multinacionales. Nuestros servicios son especialmente valiosos para empresas en crecimiento, en proceso de reestructuración o que buscan optimizar sus operaciones y mejorar su rentabilidad.",
  },
  {
    question: "¿Cuánto tiempo dura típicamente un proyecto de consultoría?",
    answer: "La duración varía según la complejidad y alcance del proyecto. Un análisis inicial puede tomar 2-4 semanas, mientras que una implementación completa de estrategia puede extenderse de 3 a 12 meses. Ofrecemos tanto proyectos puntuales como acompañamiento continuo.",
  },
  {
    question: "¿Qué ROI puedo esperar de su consultoría?",
    answer: "Nuestros clientes típicamente ven un retorno de 3-5x su inversión en el primer año. Los resultados específicos varían, pero incluyen reducciones de costos del 20-40%, mejoras en eficiencia del 30-50% y aumentos en rentabilidad del 25-45%.",
  },
  {
    question: "¿Ofrecen seguimiento post-implementación?",
    answer: "Sí, ofrecemos planes de seguimiento y soporte continuo para asegurar la sostenibilidad de las mejoras implementadas. Esto incluye revisiones periódicas, ajustes de estrategia y capacitación del equipo según sea necesario.",
  },
  {
    question: "¿Cómo se diferencia su enfoque de otras consultoras?",
    answer: "Nos distinguimos por nuestro enfoque basado en datos, implementación práctica y acompañamiento cercano. No solo entregamos recomendaciones, sino que trabajamos junto a su equipo para implementar cambios reales y medibles. Además, utilizamos tecnología BI para monitoreo en tiempo real.",
  },
  {
    question: "¿Qué información necesitan para empezar?",
    answer: "Iniciamos con una consulta gratuita para entender sus desafíos. Luego, típicamente necesitamos acceso a información financiera básica, estructura organizacional y métricas operativas clave. Trabajamos con la información disponible y respetamos la confidencialidad.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={cn(
            "border rounded-lg overflow-hidden transition-all duration-300",
            openIndex === index ? "border-primary/50 shadow-md" : "border-muted"
          )}
        >
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <span className="font-medium pr-4">{faq.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                openIndex === index && "rotate-180 text-primary"
              )}
            />
          </button>
          <div
            className={cn(
              "px-6 transition-all duration-300 ease-in-out",
              openIndex === index ? "py-4 opacity-100" : "max-h-0 overflow-hidden opacity-0"
            )}
          >
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}