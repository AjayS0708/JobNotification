import clsx from 'clsx'

interface BadgeProps {
  status: 'not-started' | 'in-progress' | 'shipped'
  size?: 'sm' | 'md'
}

const statusConfig = {
  'not-started': {
    label: 'Not Started',
    className: 'bg-[#E8E7E3] text-primary',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'bg-warning text-white',
  },
  'shipped': {
    label: 'Shipped',
    className: 'bg-success text-white',
  },
}

export default function Badge({ status, size = 'md' }: BadgeProps) {
  const config = statusConfig[status]
  
  return (
    <span
      className={clsx(
        'font-sans font-medium inline-block',
        config.className,
        {
          'px-16 py-8 text-sm': size === 'sm',
          'px-24 py-8 text-body-base': size === 'md',
        }
      )}
    >
      {config.label}
    </span>
  )
}
