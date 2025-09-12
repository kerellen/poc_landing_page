import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <Section className="text-center bg-gray-50">
        <h1 className="mb-4 text-4xl font-bold">Servicios</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Para implementar una estrategia de crecimiento exitosa, es esencial
          monitorear la rentabilidad por cada producto, por cada cliente y por
          cada unidad de negocio junto con un flujo financiero sustentable.
        </p>
      </Section>

      {/* Services Section */}
      <Section className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>ESTRATEGIA Y CRECIMIENTO</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Diseñamos e implementamos planes de negocio con estrategias de
              crecimiento y gestión organizacional, construyendo dashboards de
              seguimiento con BI.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ANÁLISIS DE PROCESOS</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Realizamos una revisión integral de todos los procesos claves para
              asegurar la optimización de recursos y controles necesarios para
              crecer de manera ordenada.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AUDITORÍA DE COSTOS</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Relevamos y auditamos todos los costos asociados al negocio,
              asegurando integridad de la información mediante pruebas
              analíticas y sustantivas.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ANÁLISIS FINANCIERO</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Construimos modelo de Cash Flow proyectando todos los ingresos y
              egresos de la empresa para optimizar los tiempos de cobranzas y de
              pagos asegurando flujo de caja positivo.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ANÁLISIS DE RENTABILIDAD</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Elaboramos un modelo de P&L (estado de resultados de gestión) a
              medida de cada empresa para monitorear la rentabilidad por cada
              unidad de negocio/producto/servicio.
            </CardDescription>
          </CardContent>
        </Card>
      </Section>

      {/* Team Section */}
      <Section className="bg-gray-50">
        <h2 className="mb-8 text-center text-3xl font-bold">Nuestro equipo</h2>
        <div className="container grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((member) => (
            <div
              key={member}
              className="flex flex-col items-center space-y-2 text-center"
            >
              <div className="h-24 w-24 rounded-full bg-gray-200" />
              <p className="font-semibold">Nombre del integrante</p>
              <p className="text-sm text-gray-600">Rol</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contacto">
        <h2 className="mb-8 text-center text-3xl font-bold">Contacto</h2>
        <div className="flex flex-col items-center space-y-4">
          <p>Email: contacto@empresa.com</p>
          <p>Teléfono: +1 234 567 890</p>
          <Button>Solicitar información</Button>
        </div>
      </Section>
    </main>
  );
}
