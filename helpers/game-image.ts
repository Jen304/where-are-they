import { MutableRefObject } from "react";

type PositionType = {
  x: number;
  y: number;
};

type ImageSize = {
  width: number;
  height: number;
};

type GetPlayerResPosParamsType = {
  imageSize: ImageSize;
  chosenPosition: PositionType;
};

type IsCorrectPositionParamsType = {
  correctPosition: PositionType;
  chosenPosition: PositionType;
};

type CheckPlayerChoiceParamsType = {
  imageRef: MutableRefObject<undefined>;
  playerPosition: PositionType;
  correctPosition: PositionType;
};

const getImageSize = (imageRef: MutableRefObject<undefined>): ImageSize => {
  const width = imageRef ? imageRef.current.offsetWidth : 1;
  const height = imageRef ? imageRef.current.offsetHeight : 1;
  return {
    width,
    height,
  };
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

/**
 * check player choice is correct or not based given image, their chosen position and correct position
 */
const checkPlayerChoice = ({
  imageRef,
  playerPosition,
  correctPosition,
}: CheckPlayerChoiceParamsType): boolean => {
  const imageSize = getImageSize(imageRef);
  const relativePos = getPlayerRelativePos({
    imageSize,
    chosenPosition: playerPosition,
  });
  return isCorrectPosition({
    correctPosition,
    chosenPosition: relativePos,
  });
};

export default {
  checkPlayerChoice,
};
