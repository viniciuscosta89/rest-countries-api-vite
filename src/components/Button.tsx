import { ButtonContainer } from '../styles/Button';

interface ButtonProps {
	children?: JSX.Element | JSX.Element[];
	onClick(): void;
	marginBlockEnd?: string;
}

const Button = ({ children, marginBlockEnd, ...props }: ButtonProps) => (
	<ButtonContainer {...props}>{children}</ButtonContainer>
);

export default Button;
