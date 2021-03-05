import { BackgroundCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { Mouth } from "./Mouth";
import { FaceContainer } from "./FaceContainer";

export const Face = ({width,height,centerX,centerY,strokeWidth,eyeOffsetX,eyeOffsetY,eyeRadius,mouthWidth,mouthRadius}) => {
    return (
        <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundCircle centerY={centerY} strokeWidth={strokeWidth} />
      <Eyes
        eyeOffsetX={-eyeOffsetX}
        eyeOffsetY={-eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={-eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
    )
}
