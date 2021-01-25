import Game from '../Game';
import { render, fireEvent, prettyDOM } from '@testing-library/react';

describe('Game component tests', () => {

  test('clicking on the robot head icon toggles the cheating state', () => {
    const { container, getByTestId, debug } = render(<Game />);
    // console.log(prettyDOM(container));
    // debug();

    // getByTestId(container, 'robot-icon');
    const robotIcon = getByTestId('robot-icon');

    fireEvent.click(robotIcon);
    expect(robotIcon).toHaveClass('cheating');

    fireEvent.click(robotIcon);
    expect(robotIcon).not.toHaveClass('cheating');
  });

});
