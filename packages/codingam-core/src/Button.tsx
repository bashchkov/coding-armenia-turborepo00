import type {ReactNode} from 'react'

export interface ButtonProps {
  children: ReactNode;
}

export const Button = (props: ButtonProps) => <button>{props.children}</button>

Button.displayName = "Button";
