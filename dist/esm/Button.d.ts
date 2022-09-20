import React, { PropsWithChildren } from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare function Button({ children, onClick, ...restProps }: PropsWithChildren<ButtonProps>): JSX.Element;
export default Button;
