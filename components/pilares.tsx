import Image from "next/image";
import {
  ClipboardList,
  Leaf,
  LineChart,
  Settings,
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
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative aspect-square">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full text-primary/30"
          aria-hidden="true"
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
          <div className="relative w-150 h-150  flex items-center justify-center">
            <Image
              src="/logoPrisma360.png"
              alt="Logo"
              fill
              sizes="720px"
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
            <span className="mt-3 max-w-[8rem] text-xs font-semibold uppercase tracking-wide text-primary">
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
