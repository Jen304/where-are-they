type PositionType = {
  x: number;
  y: number;
};

type GetPlayerResPosParamsType = {
  imageSize: {
    width: number;
    height: number;
  };
  chosenPosition: PositionType;
};

type IsCorrectPositionParamsType = {
  correctPosition: PositionType;
  chosenPosition: PositionType;
};

// get a relative position, so we can check on every screen size
const getPlayerRelativePos = ({
  imageSize,
  chosenPosition,
}: GetPlayerResPosParamsType): PositionType => {
  const { x, y } = chosenPosition;
  const { width, height } = imageSize;

  const relX = x / width;
  const relY = (y - 64) / height;
  return { x: relX, y: relY };
};

// check if player choose a correct position
const isCorrectPosition = ({
  correctPosition,
  chosenPosition,
}: IsCorrectPositionParamsType): boolean => {
  // 0.084 and 0.01 is a allowed distance from correctPosition
  // so player can get correct message within these distance
  const isXCorrect = Math.abs(correctPosition.x - chosenPosition.x) < 0.084;
  const isYCorrect = Math.abs(correctPosition.y - chosenPosition.y) < 0.01;
  return isXCorrect && isYCorrect;
};

export default {
  getPlayerRelativePos,
  isCorrectPosition,
};
