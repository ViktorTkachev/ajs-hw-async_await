import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const parsedData = await json(data);
      const gameSavingData = JSON.parse(parsedData);
      return new GameSaving(
        gameSavingData.id,
        gameSavingData.created,
        gameSavingData.userInfo,
      );
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default GameSavingLoader;
