import type { ComponentType, SVGProps } from "react";

export interface TechGridItem {
  name: string;
  tooltip: {
    /** Color de marca de la tecnología */
    color: string;
  };
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconSize?: string;
}
