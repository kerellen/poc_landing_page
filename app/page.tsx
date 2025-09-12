import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Servicios</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Para implementar una estrategia de crecimiento exitosa, es esencial monitorear la rentabilidad por cada producto, por cada cliente y por cada unidad de negocio junto con un flujo financiero sustentable.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>ESTRATEGIA Y CRECIMIENTO</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Diseñamos e implementamos planes de negocio con estrategias de crecimiento y gestión organizacional, construyendo dashboards de seguimiento con BI.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ANÁLISIS DE PROCESOS</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Realizamos una revisión integral de todos los procesos claves para asegurar la optimización de recursos y controles necesarios para crecer de manera ordenada.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>AUDITORÍA DE COSTOS</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Relevamos y auditamos todos los costos asociados al negocio, asegurando integridad de la información mediante pruebas analíticas y sustantivas.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ANÁLISIS FINANCIERO</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Construimos modelo de Cash Flow proyectando todos los ingresos y egresos de la empresa para optimizar los tiempos de cobranzas y de pagos asegurando flujo de caja positivo.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>ANÁLISIS DE RENTABILIDAD</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Elaboramos un modelo de P&L (estado de resultados de gestión) a medida de cada empresa para monitorear la rentabilidad por cada unidad de negocio/producto/servicio.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestro equipo</h2>
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
          {[1,2,3].map((member) => (
            <div key={member} className="flex flex-col items-center text-center space-y-2">
              <div className="w-24 h-24 bg-gray-200 rounded-full" />
              <p className="font-semibold">Nombre del integrante</p>
              <p className="text-sm text-gray-600">Rol</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16" id="contacto">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <div className="flex flex-col items-center space-y-4">
          <p>Email: contacto@empresa.com</p>
          <p>Teléfono: +1 234 567 890</p>
          <Button>Solicitar información</Button>
        </div>
      </section>
    </main>
  );
}
