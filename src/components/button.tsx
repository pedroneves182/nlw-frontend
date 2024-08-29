import { ComponentProps, ReactNode } from "react"
import cn from 'classnames'


interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary'; // Make variant optional
}

export default function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {

  const baseClasses = " rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2";
  const variantClasses = {
    primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
    secondary: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
  };

  return (
    <button {...props} className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </button >
  )
}
