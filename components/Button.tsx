import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  fullWidth?: boolean
}

export default function Button({ 
  variant = 'primary', 
  children, 
  fullWidth = false,
  className,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-24 py-16 font-sans font-medium text-body-base transition-standard',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-accent text-white hover:bg-[#6B0000]': variant === 'primary',
          'border-2 border-primary text-primary hover:bg-primary hover:text-white': variant === 'secondary',
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
