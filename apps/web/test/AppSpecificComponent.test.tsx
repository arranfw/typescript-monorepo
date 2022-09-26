import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import { AppSpecificComponent } from '../components/AppSpecificComponent';

describe('AppSpecificComponent', () => {
  it('renders children on button press', async () => {
    // ARRANGE
    render(<AppSpecificComponent>testChild</AppSpecificComponent>);

    // ACT
    await userEvent.click(screen.getByText('show children'));
    await screen.findByRole('alert');

    // ASSERT
    expect(screen.getByRole('alert')).toHaveTextContent('testChild');
  });
});
