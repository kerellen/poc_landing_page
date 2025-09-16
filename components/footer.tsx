"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Send
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const footerLinks = {
  servicios: [
    { label: "Estrategia y Crecimiento", href: "#servicios" },
    { label: "Análisis de Procesos", href: "#servicios" },
    { label: "Auditoría de Costos", href: "#servicios" },
    { label: "Análisis Financiero", href: "#servicios" },
    { label: "Análisis de Rentabilidad", href: "#servicios" },
  ],
  empresa: [
    { label: "Plan de Acción", href: "#plan-accion" },
    { label: "Nuestro Equipo", href: "#equipo" },
  ],
};

{/*
const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];*/}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-muted/50 to-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              {/* Placeholder logo. Replace `prisma360-logo.svg` with actual logo file. */}
              <Image
                src="/logoPrisma360.png"
                alt="Prisma360 Consultora logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <div className="leading-tight">
                <span className="block text-xl font-bold text-primary">prisma360</span>
                <span className="block text-xs text-brand">consultora</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Transformamos empresas mediante estrategias de crecimiento basadas en datos, 
              optimización de procesos y análisis financiero profundo. Su éxito es nuestra misión.
            </p>
            
            {/* Newsletter 
            <div className="space-y-2">
              <p className="text-sm font-semibold">Suscríbete a nuestro newsletter</p>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" size="sm" className="bg-gradient-to-r from-primary to-brand hover:opacity-90 px-3">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              {subscribed && (
                <p className="text-xs text-primary animate-in fade-in slide-in-from-bottom-2">
                  ¡Gracias por suscribirte!
                </p>
              )}
            </div>*/}

            {/* Social Links 
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>*/}
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info & Copyright */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span>contacto@prisma360.com.ar</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>+54 11 6231 5913</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <span>Lun - Vie: 9:00 - 18:00</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 prisma360. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}