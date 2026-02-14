import { InputHTMLAttributes } from 'react'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

export default function Input({ 
  label, 
  error, 
  fullWidth = false, 
  className,
  ...props 
}: InputProps) {
  return (
    <div className={clsx('flex flex-col gap-8', { 'w-full': fullWidth })}>
      {label && (
        <label className="font-sans font-medium text-primary">
          {label}
        </label>
      )}
      <input
        className={clsx(
          'px-16 py-16 border-2 border-border bg-surface-light',
          'font-sans text-body-base text-primary',
          'transition-standard',
          'focus:border-primary focus:outline-none',
          'placeholder:text-[#999999]',
          {
            'border-accent': error,
            'w-full': fullWidth,
          },
          className
        )}
        {...props}
      />
      {error && (
        <span className="text-accent text-sm font-medium">
          {error}
        </span>
      )}
    </div>
  )
}
