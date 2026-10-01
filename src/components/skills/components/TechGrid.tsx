import { Tooltip } from "react-tooltip";

export interface TechGridItem {
  name: string;
  tooltip: {
    color: string;
  };
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconSize?: string;
}

interface TechGridProps {
  techs: TechGridItem[];
}

const TechGrid: React.FC<TechGridProps> = ({ techs }) => {
  return (
    <div className="w-full bg-white/10 rounded-2xl px-2 py-5 mx-auto flex flex-col items-center gap-5 z-100 max-w-2xl xl:max-w-3xl">
      <div className="flex flex-wrap justify-evenly sm:justify-center gap-2 lg:gap-4 max-h-100 sm:max-h-full overflow-y-scroll sm:overflow-hidden">
        {techs.map(
          (
            { name, Icon, iconSize = "size-15 xl:size-20", tooltip: { color } },
            index
          ) => (
            <div
              key={name}
              className="group relative w-[45%] sm:w-28 lg:w-32 xl:w-36"
            >
              <div
                className="aspect-square rounded-xl flex flex-col items-center justify-center
                   bg-white/30 hover:bg-white/80
                   hover:scale-105 hover:shadow-lg transition-transform duration-300 shadow-sm"
              >
                <span data-tooltip-id={`tooltip-${index}`}>
                  <Icon
                    className={`${iconSize} drop-shadow-[var(--shadow-white-sm)] group-hover:drop-shadow-[var(--shadow-primary)] group-hover:animate-lift-soft`}
                  />
                </span>
                <p className="max-w-full mt-1 text-white text-sm truncate group-hover:text-primary group-hover:font-bold">
                  {name}
                </p>
              </div>

              <Tooltip
                id={`tooltip-${index}`}
                place="right"
                offset={10}
                content={name}
                opacity={1}
                className="z-50 text-sm font-medium text-white px-2 py-1 rounded"
                style={{ backgroundColor: color }}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TechGrid;
