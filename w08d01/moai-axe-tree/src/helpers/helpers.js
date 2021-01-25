export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

export const genFeedbackMessage = (status) => {
  switch (status) {
    case 'Lost':
      return 'You lost!';
    case 'Won':
      return 'Good job!';
    case 'Tied':
      return 'Tie game!';
    default:
      return 'Waiting for your choice!';
  }
};

export const chooseRobotItem = (cheating, playerSelection) => {
  const lookup = {
    Axe: 'Moai',
    Tree: 'Axe',
    Moai: 'Tree'
  };
  if (cheating) {
    return lookup[playerSelection];
  }

  const options = ['Moai', 'Axe', 'Tree'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};
