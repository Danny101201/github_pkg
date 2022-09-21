import React, { PropsWithChildren } from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
declare function BoxContainter({ children }: PropsWithChildren): JSX.Element;
export default BoxContainter;
