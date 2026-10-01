import type { CubeData } from "@/types/CubeData";

interface Props {
  count: number;
  inwardBias?: number;
  xRange?: number;
  yRange?: number;
  padding?: number;
}

const generateDistributedCubes = ({
  count,
  xRange = 4,
  yRange = 2,
  padding = 0.5,
  inwardBias = 0.3,
}: Props): CubeData[] => {
  const cubes: CubeData[] = [];
  const edges = ["top", "bottom", "left", "right"] as const;
  const cubesPerEdge = Math.floor(count / 4);
  const remaining = count % 4;

  const rand = (min: number, max: number) =>
    parseFloat((Math.random() * (max - min) + min).toFixed(2));

  for (const edge of edges) {
    const n = cubesPerEdge + (remaining > edges.indexOf(edge) ? 1 : 0);

    for (let i = 0; i < n; i++) {
      let x = 0;
      let y = 0;

      const shiftX = rand(0, (xRange - padding) * inwardBias);
      const shiftY = rand(0, (yRange - padding) * inwardBias);

      switch (edge) {
        case "top":
          x = rand(-xRange + padding + shiftX, xRange - padding - shiftX);
          y = yRange - padding - shiftY;
          break;
        case "bottom":
          x = rand(-xRange + padding + shiftX, xRange - padding - shiftX);
          y = -yRange + padding + shiftY;
          break;
        case "left":
          x = -xRange + padding + shiftX;
          y = rand(-yRange + padding + shiftY, yRange - padding - shiftY);
          break;
        case "right":
          x = xRange - padding - shiftX;
          y = rand(-yRange + padding + shiftY, yRange - padding - shiftY);
          break;
      }
      cubes.push({
        position: [parseFloat(x.toFixed(2)), parseFloat(y.toFixed(2)), 0],
        size: rand(0.2, 0.3),
        speed: rand(0.5, 1.0),
        horizontalDir: Math.random() < 0.5 ? -1 : 1,
      });
    }
  }

  return cubes;
};

export const cubesData = generateDistributedCubes({
  count: 20,
  padding: 0,
  inwardBias: 0.5,
});
