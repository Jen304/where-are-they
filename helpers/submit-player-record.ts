import PlayerRecordType from "../types/player";

/**
 * get submit request option for fetch method
 */
const getRequestOption = (bodyData: unknown) => {
  // send data to backend
  const options = {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return options;
};

/**
 * send player record data to backend
 */
const submitPlayerRecord = async (
  playerData: PlayerRecordType
): Promise<{
  [playerID: string]: PlayerRecordType;
}> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/records`,
      getRequestOption(playerData)
    );
    const resData = await res.json();
    return resData;
  } catch (e) {
    console.log(e);
  }
};

export default submitPlayerRecord;
