/* eslint-disable prefer-promise-reject-errors */
import GameSavingLoader from '../GameSavingLoader';

test('should load and parse game saving data', async () => {
  const saving = await GameSavingLoader.load();
  const expectedData = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  expect(saving).toEqual(expectedData);
});

test('should reject with an error', async () => {
  GameSavingLoader.read = () => {
    throw new Error('Error problem!');
  };

  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toThrow('Error problem!');
  }
});
