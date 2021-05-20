import PlayerRecordType from "../types/player";
import { useEffect, useState } from "react";

type HookReturnType = {
  playerRecord: PlayerRecordType;
};

/**
 * Custom hook to get player latest record
 */
const usePlayerRecord = (): HookReturnType => {
  const [playerRecord, setPlayerRecord] = useState<PlayerRecordType>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const record = localStorage.getItem("playerRecord");
      if (record) {
        setPlayerRecord(JSON.parse(record));
      }
    }
  }, []);
  return { playerRecord };
};

export default usePlayerRecord;
