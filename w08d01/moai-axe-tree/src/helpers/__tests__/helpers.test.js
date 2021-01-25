import { announceResult, genFeedbackMessage, chooseRobotItem } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('genFeedbackMessage function', () => {

  test('should return "You lost!" if status is "Lost"', () => {
    const actual = genFeedbackMessage('Lost');
    expect(actual).toBe('You lost!');
  });

  test('should return "Good job!" if status is "Won"', () => {
    const status = 'Won';
    const actual = genFeedbackMessage(status);
    expect(actual).toBe('Good job!');
  });

});

describe('chooseRobotItem function', () => {

  test('if cheating is false, chooses a random item', () => {
    const cheating = false;
    const playerSelection = 'Tree';
    const actual = chooseRobotItem(cheating, playerSelection);
    const options = ['Moai', 'Axe', 'Tree'];
    // expect(options.includes(actual)).toBeTruthy();
    expect(options).toContain(actual);
  });

  test('if cheating is true, chooses the winning item', () => {
    const cheating = true;
    const playerSelection = 'Tree';
    const actual = chooseRobotItem(cheating, playerSelection);
    expect(actual).toBe('Axe');
  });

});
