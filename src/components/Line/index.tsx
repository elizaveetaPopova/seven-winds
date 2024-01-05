import { Stage, Layer, Line } from 'react-konva';

import { cssVar } from '../../functions';

const LineDrawing = ({ width, height }: { width: number; height: number }) => {
  return (
    <Stage width={width} height={height}>
      <Layer>
        <Line
          points={[5, 70, 140, 23, 250, 60, 300, 20]}
          stroke={cssVar('--line-color')}
          strokeWidth={1}
        />
      </Layer>
    </Stage>
  );
};

export default LineDrawing;
