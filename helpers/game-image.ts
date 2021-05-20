import { MutableRefObject } from "react";
import { CharacterStateType } from "../types/game";

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
  imageRef: MutableRefObject<HTMLElement>;
  playerPosition: PositionType;
  characterState: CharacterStateType;
};

const getImageSize = (imageRef: MutableRefObject<HTMLElement>): ImageSize => {
  const width = imageRef.current.offsetWidth ?? 1;
  const height = imageRef.current.offsetHeight ?? 1;
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
  characterState,
}: CheckPlayerChoiceParamsType): boolean => {
  const imageSize = getImageSize(imageRef);
  const relativePos = getPlayerRelativePos({
    imageSize,
    chosenPosition: playerPosition,
  });
  return (
    !characterState.isFound &&
    isCorrectPosition({
      correctPosition: characterState.position,
      chosenPosition: relativePos,
    })
  );
};

export default {
  checkPlayerChoice,
};
