import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baselineComponent } from '../../testing/utils';
import Chip from './Chip';

const getChip = () => screen.queryByText('Белый');

describe('Chip', () => {
  baselineComponent(Chip);

  it('removes chip on onRemove click', () => {
    const onRemove = jest.fn(() => getChip().parentElement.remove());

    render(
      <Chip value="white" onRemove={onRemove}>Белый</Chip>,
    );

    userEvent.click(screen.queryByLabelText('Удалить чип'));

    expect(onRemove).toHaveBeenCalled();
  });
});
