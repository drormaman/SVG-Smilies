import { Face } from "./Face";
import {range} from 'd3'

const width = 155;
const height = 155;
const arr = range(20);

function SmileyFace() {
  return (
    <>
      {arr.map(() => (
        <Face
          width={width}
          height={height}
          centerX={width / 2}
          centerY={height / 2}
          strokeWidth={5 + Math.random() * 8}
          eyeOffsetX={25 + Math.random() * 12}
          eyeOffsetY={30 + Math.random() * 10}
          eyeRadius={10 + Math.random() * 8}
          mouthWidth={10 + Math.random() * 7}
          mouthRadius={30 + Math.random() * 10}
        />
      ))}
    </>
  );
}

export default SmileyFace;
