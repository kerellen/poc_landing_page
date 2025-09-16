import Image from "next/image";
import {
  ClipboardList,
  Leaf,
  LineChart,
  Target,
  Wallet,
} from "lucide-react";

const pillars = [
  {
    icon: LineChart,
    title: "Planificación Económico Financiera",
    position: { top: "6%", left: "50%" },
  },
  {
    icon: ClipboardList,
    title: "Outsourcing Administrativo",
    position: { top: "26%", left: "87%" },
  },
  {
    icon: Wallet,
    title: "Administración Patrimonial",
    position: { top: "74%", left: "87%" },
  },
  {
    icon: Leaf,
    title: "Eficiencia Energética",
    position: { top: "74%", left: "13%" },
  },
  {
    icon: Target,
    title: "Innovación Estratégica",
    position: { top: "26%", left: "13%" },
  },
];

export function Pilares() {
  return (
  <div className="relative w-full max-w-3xl mx-auto mt-12">
    <div className="relative aspect-square w-full max-w-3xl mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl" style={{ maxWidth: '100%', height: 'auto' }}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-primary/30"
          aria-hidden="true"
          style={{ maxWidth: '100%', height: 'auto' }}
        >
          <polygon
            points="100,10 180,60 180,140 100,190 20,140 20,60"
            fill="currentColor"
            opacity={0.1}
          />
          <polygon
            points="100,10 180,60 180,140 100,190 20,140 20,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[60vw] max-w-[150px] h-[60vw] max-h-[150px] sm:w-[200px] sm:h-[200px] sm:max-w-[200px] sm:max-h-[200px] md:w-[250px] md:h-[250px] md:max-w-[250px] md:max-h-[250px] lg:w-[300px] lg:h-[300px] lg:max-w-[300px] lg:max-h-[300px] xl:w-[400px] xl:h-[400px] xl:max-w-[400px] xl:max-h-[400px] flex items-center justify-center">
            <Image
              src="/logoPrisma360.png"
              alt="Logo"
              fill
              sizes="(max-width: 640px) 60vw, (min-width: 640px) 200px, (min-width: 768px) 250px, (min-width: 1024px) 300px, 150px"
              className="object-contain p-3"
            />
          </div>
        </div>
        {pillars.map(({ icon: Icon, title, position }) => (
          <div
            key={title}
            className="absolute flex flex-col items-center text-center -translate-x-1/2 -translate-y-1/2"
            style={position}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-white shadow-lg">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <span className="mt-3 max-w-[10rem] text-xs font-semibold uppercase tracking-wide text-primary px-2 py-1 rounded drop-shadow-lg text-stroke-orange">
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
