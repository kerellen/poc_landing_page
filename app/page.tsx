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
  TrendingUp, 
  BarChart2, 
  Calculator, 
  DollarSign, 
  PieChart,
  ArrowRight,
  Target,
  Sparkles,
  Users,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: TrendingUp,
    title: "ESTRATEGIA Y CRECIMIENTO",
    description: "Diseñamos e implementamos planes de negocio con estrategias de crecimiento y gestión organizacional, construyendo dashboards de seguimiento con BI.",
    features: ["Plan estratégico", "Dashboard BI", "KPIs personalizados"],
  },
  {
    icon: BarChart2,
    title: "ANÁLISIS DE PROCESOS",
    description: "Realizamos una revisión integral de todos los procesos claves para asegurar la optimización de recursos y controles necesarios para crecer de manera ordenada.",
    features: ["Mapeo de procesos", "Optimización", "Control de calidad"],
  },
  {
    icon: Calculator,
    title: "AUDITORÍA DE COSTOS",
    description: "Relevamos y auditamos todos los costos asociados al negocio, asegurando integridad de la información mediante pruebas analíticas y sustantivas.",
    features: ["Análisis detallado", "Reducción de gastos", "Informes ejecutivos"],
  },
  {
    icon: DollarSign,
    title: "ANÁLISIS FINANCIERO",
    description: "Construimos modelo de Cash Flow proyectando todos los ingresos y egresos de la empresa para optimizar los tiempos de cobranzas y de pagos asegurando flujo de caja positivo.",
    features: ["Cash Flow", "Proyecciones", "Optimización de capital"],
  },
  {
    icon: PieChart,
    title: "ANÁLISIS DE RENTABILIDAD",
    description: "Elaboramos un modelo de P&L (estado de resultados de gestión) a medida de cada empresa para monitorear la rentabilidad por cada unidad de negocio/producto/servicio.",
    features: ["P&L personalizado", "Análisis por unidad", "Métricas clave"],
  },
];

const teamMembers = [
  {
    name: "Daniel Rodríguez",
    role: "CEO & Estratega Senior",
    description: "15+ años transformando empresas",
    initials: "DR",
  },
  {
    name: "Laura Martínez",
    role: "Directora Financiera",
    description: "Experta en optimización financiera",
    initials: "LM",
  },
  {
    name: "Carlos Sánchez",
    role: "Director de Operaciones",
    description: "Especialista en procesos y eficiencia",
    initials: "CS",
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
          <div className="container grid gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={cn(
                  "flex flex-col items-center space-y-4 text-center p-6 rounded-xl hover:bg-muted/50 transition-all duration-300",
                  "animate-in fade-in slide-in-from-bottom-4 fill-mode-both"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative group">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-brand flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform">
                    {member.initials}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-brand opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-lg">{member.name}</p>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
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
                    <DollarSign className="h-6 w-6 text-primary" />
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