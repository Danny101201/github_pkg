import React, { PropsWithChildren } from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function BoxContainter({ children }: PropsWithChildren) {
    return (
        <div>{children}</div>
    );
}

export default BoxContainter;
