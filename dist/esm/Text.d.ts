import React, { PropsWithChildren } from 'react';
interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
declare function Text({ children, ...props }: PropsWithChildren<TextProps>): JSX.Element;
export default Text;
