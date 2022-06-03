import { ButtonContainer } from '../styles/Button';

interface ButtonProps {
	children?: JSX.Element | JSX.Element[];
	onClick(): void;
}

const Button = ({ children, ...props }: ButtonProps) => <ButtonContainer {...props}>{children}</ButtonContainer>;

export default Button;
