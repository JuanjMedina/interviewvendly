import { render, screen } from '@testing-library/react';
import Hero from '../components/hero';

jest.mock('next/image', () => ({
  __esModule: true,
  default: props => {
    return <img {...props} alt={props.alt || 'Mock image'} />;
  },
}));

describe('Hero component', () => {
  it('renders hero section', () => {
    render(<Hero />);
    expect(screen.getByText('Vendly')).toBeInTheDocument();
    expect(
      screen.getByText('Facilitamos las transacciones digitales'),
    ).toBeInTheDocument();
  });
});
