import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import VerificationCode from '../app/login/verify/page';
import { loginEndpoint } from '@/services/login';
import { useRouter, useSearchParams } from 'next/navigation';


jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));


jest.mock('@/services/login', () => ({
  loginEndpoint: jest.fn(),
}));

describe('VerificationCode Component', () => {
  const mockRouter = {
    push: jest.fn(),
  };

  const mockSearchParams = {
    get: jest.fn(),
  };

  beforeEach(() => {

    useRouter.mockReturnValue(mockRouter);
    useSearchParams.mockReturnValue(mockSearchParams);
    mockSearchParams.get.mockReturnValue('+57 3001234567');
    localStorage.clear();
  });

  it('renders verification code inputs', () => {
    render(<VerificationCode />);

 
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(4);
  });

  it('shows error when submitting empty code', async () => {
    render(<VerificationCode />);

    const submitButton = screen.getByText('Verificar');
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText(
      'Por favor ingresa el código completo',
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('handles successful verification', async () => {
    render(<VerificationCode />);

    const inputs = screen.getAllByRole('textbox');
    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: index + 1 } });
    });

    loginEndpoint.mockResolvedValueOnce({
      accesToken: 'test-access-token',
      refreshToken: 'test-refresh-token',
      success: true,
    });

    const submitButton = screen.getByText('Verificar');
    fireEvent.click(submitButton);

    await waitFor(() => {
  
      expect(localStorage.getItem('accessToken')).toBe('test-access-token');
      expect(localStorage.getItem('refreshToken')).toBe('test-refresh-token');
  
      expect(mockRouter.push).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('shows error on invalid code', async () => {
    render(<VerificationCode />);

    const inputs = screen.getAllByRole('textbox');
    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: index + 1 } });
    });


    loginEndpoint.mockResolvedValueOnce({
      success: false,
    });

    const submitButton = screen.getByText('Verificar');
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText('Código inválido');
    expect(errorMessage).toBeInTheDocument();
  });

  it('only allows numeric input', () => {
    render(<VerificationCode />);

    const inputs = screen.getAllByRole('textbox');
    const firstInput = inputs[0];

    fireEvent.change(firstInput, { target: { value: 'a' } });
    expect(firstInput.value).toBe('');

    fireEvent.change(firstInput, { target: { value: '1' } });
    expect(firstInput.value).toBe('1');
  });
});
