import './button.css';

export interface ButtonProps {
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ disabled }) => {
  return (
    <button className='btn__primary' disabled={disabled}>
      Boop
    </button>
  );
};
