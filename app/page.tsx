"use client";

import { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Navigation } from "@/components/navigation";
import { Testimonials } from "@/components/testimonials";
import { Carousel } from "@/components/carousel";
import { Footer } from "@/components/footer";
import { Stats } from "@/components/stats";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import {
  LineChart,
  ClipboardList,
  Wallet,
  Settings,
  Leaf,
  Mail,
  ArrowRight,
  Target,
  Sparkles,
  Users,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: LineChart,
    title: "PLANIFICACIÓN ECONÓMICO FINANCIERA",
    description:
      "El análisis estratégico de los datos de la organización y del contexto permitirá tomar decisiones adecuadas para gestionar correctamente las fluctuaciones del mercado.",
    features: [
      "Asesoramiento estratégico para la toma de decisiones",
      "Herramientas financieras: cashflow, métricas y KPIs. Reportes de gestión",
      "Elaboración y seguimiento del P&L. Estrategias de pricing",
      "Planificación presupuestaria anual con revisiones periódicas",
      "Redefinición de estrategias para el cumplimiento de metas",
      "Gestión de inversiones con análisis de riesgos y oportunidades",
    ],
  },
  {
    icon: ClipboardList,
    title: "OUTSOURCING ADMINISTRATIVO",
    description:
      "Delegar funciones y procesos repetitivos para mejorar la productividad y enfocarse en el core business.",
    features: [
      "Gestión contable: registros y conciliaciones bancarias",
      "Administración de pagos y cobranzas",
      "Gestión de proveedores y clientes",
      "Gestión de nómina y recursos humanos",
      "Liquidación de sueldos y cargas sociales",
      "Administración de legajos y contratos",
    ],
  },
  {
    icon: Wallet,
    title: "ADMINISTRACIÓN PATRIMONIAL",
    description:
      "Administración activa y profesional del capital para optimizar el rendimiento de las inversiones.",
    features: [
      "Perfil del inversor y estrategia adaptada",
      "Construcción de porfolio personalizado",
      "Determinación de activos por país y clase",
      "Selección por industria y sector",
      "Evaluación de rendimiento y rebalanceo de cartera",
    ],
  },
  {
    icon: Settings,
    title: "MEJORA DE PROCESOS",
    description:
      "Identificar oportunidades de mejora e implementar soluciones que generen valor para la organización.",
    features: [
      "Diagnóstico y evaluación de procesos vigentes",
      "Plan integral de oportunidades de mejora",
      "Project management para la implementación",
      "Reingeniería organizacional y reestructuración",
      "Descripción de funciones y desarrollo organizacional",
      "Implementación de sistemas de gestión",
      "Certificaciones ISO 9001",
    ],
  },
  {
    icon: Leaf,
    title: "EFICIENCIA ENERGÉTICA",
    description:
      "Reducimos costos energéticos mediante proyectos de eficiencia, auditorías y gestión continua.",
    features: [
      "Diagnóstico y planificación de acciones",
      "Optimización de procesos y reducción de desperdicios",
      "Control de facturación y revisión de tarifas",
      "Monitoreo energético y elaboración de KPIs",
      "Capacitaciones para uso racional de la energía",
      "Certificaciones ISO 50.001",
      "Pago por resultados basado en el ahorro",
    ],
  },
];

export default function Home() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <Navigation />
      
      <main className="font-sans pt-16">
        {/* Hero Section */}
        <Section id="inicio" className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-brand/5" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Líderes en Consultoría Empresarial
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              Soluciones integrales para
              <span className="block mt-2 bg-gradient-to-r from-primary to-brand bg-clip-text text-transparent">
                decisiones estratégicas
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Para implementar una estrategia de crecimiento exitosa, es esencial
              monitorear la rentabilidad por cada producto, por cada cliente y por
              cada unidad de negocio junto con un flujo financiero sustentable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-brand hover:opacity-90 group">
                Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Casos de Éxito
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>+250 Proyectos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>15 Países</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>98% Satisfacción</span>
              </div>
            </div>
          </div>
        </Section>

        {/* About Section */}
        <Section id="nosotros" className="bg-muted/30">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Sobre Nosotros</h2>
            <p className="text-lg text-muted-foreground">
              Con más de 12 años de experiencia, somos líderes en consultoría estratégica 
              y transformación empresarial. Nuestro equipo multidisciplinario combina 
              expertise en finanzas, operaciones y tecnología para entregar soluciones 
              integrales que generan resultados medibles y sostenibles.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <Target className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Misión</h3>
                <p className="text-sm text-muted-foreground">
                  Empoderar empresas con estrategias basadas en datos para alcanzar 
                  su máximo potencial de crecimiento y rentabilidad.
                </p>
              </div>
              <div className="space-y-2">
                <Sparkles className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Visión</h3>
                <p className="text-sm text-muted-foreground">
                  Ser el socio estratégico preferido para la transformación empresarial 
                  en el mercado hispanoamericano.
                </p>
              </div>
              <div className="space-y-2">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Valores</h3>
                <p className="text-sm text-muted-foreground">
                  Excelencia, innovación, integridad y compromiso con el éxito 
                  de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Services Section */}
        <Section id="servicios">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales diseñadas para impulsar el crecimiento y la eficiencia de su empresa
            </p>
          </div>
          
          <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className={cn(
                    "group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-muted/50 overflow-hidden",
                    "animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all transform group-hover:translate-x-1" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{service.description}</CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* Stats Section */}
        <Section id="estadisticas" className="bg-gradient-to-br from-primary/5 via-transparent to-brand/5">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros Logros</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Números que respaldan nuestra experiencia y compromiso con el éxito
            </p>
          </div>
          <Stats />
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonios">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen nuestros clientes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Historias reales de transformación y éxito empresarial
            </p>
          </div>
          <Testimonials />
        </Section>

        {/* Success Stories Carousel */}
        <Section id="casos-exito" className="bg-muted/30">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Casos de Éxito</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformaciones reales con resultados medibles y sostenibles
            </p>
          </div>
          <Carousel />
        </Section>

        {/* Team Section */}
        <Section id="equipo">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestro Equipo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertos comprometidos con su éxito
            </p>
          </div>
          <div className="container grid gap-8 md:grid-cols-3 items-start">
            <div className="flex flex-col items-center space-y-4 text-center md:col-span-1">
              <div className="h-32 w-32 rounded-full bg-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Foto</span>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-lg">Martín Latorre</p>
                <p className="text-sm text-primary font-medium">Socio fundador</p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-8 text-left">
              <div>
                <h3 className="font-semibold uppercase text-sm tracking-wide mb-2">
                  Experiencia profesional
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>
                    Actualmente forma parte de la comisión fiscalizadora de
                    Provincia Net S.A y Provinfondos S.A.
                  </li>
                  <li>
                    Cuenta con 8 años de experiencia en gerenciamiento en
                    organismos y empresas del sector público y privado.
                  </li>
                  <li>
                    Ha conformado el Directorio de sociedades del rubro
                    energético (Transener, Central Térmica Manuel Belgrano,
                    Central Térmica San Martín, Transpa).
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold uppercase text-sm tracking-wide mb-2">
                  Formación académica
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>
                    Contador Público – UBA (Universidad de Buenos Aires).
                  </li>
                  <li>
                    Diplomatura en gestión de proyectos con financiamiento
                    externo – UNTREF.
                  </li>
                  <li>
                    Maestría interdisciplinaria en energía – CEAER UBA.
                  </li>
                  <li>
                    Posgrado en Administración de Negocios – Universidad de
                    Belgrano.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container mt-12">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Presentación de Martín Latorre"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section id="faq" className="bg-muted/30">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Preguntas Frecuentes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Respuestas a las consultas más comunes sobre nuestros servicios
            </p>
          </div>
          <FAQ />
        </Section>

        {/* CTA Section */}
        <Section>
          <CTA />
        </Section>

        {/* Contact Section */}
        <Section id="contacto" className="bg-muted/30">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Contacto</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos listos para ayudarte a transformar tu empresa. 
                Contáctanos hoy para una consulta gratuita.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <Card className="border-muted/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-2">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">contacto@consultoriaelite.com</p>
                </CardContent>
              </Card>
              
              <Card className="border-muted/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-sm text-muted-foreground">+34 900 123 456</p>
                </CardContent>
              </Card>
              
              <Card className="border-muted/50 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center space-y-2">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-2">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold">Oficina</p>
                  <p className="text-sm text-muted-foreground">Madrid, España</p>
                </CardContent>
              </Card>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-primary to-brand hover:opacity-90 group">
              Solicitar Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}