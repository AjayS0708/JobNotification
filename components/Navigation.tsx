'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'

const navLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/saved', label: 'Saved' },
  { href: '/digest', label: 'Digest' },
  { href: '/settings', label: 'Settings' },
  { href: '/proof', label: 'Proof' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-[#E5E7EB] bg-white">
      <div className="max-w-[1440px] mx-auto px-40 py-24">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          <Link 
            href="/" 
            className="font-serif text-[36px] font-bold tracking-tight text-primary hover:text-accent transition-all duration-200"
          >
            KodNest
          </Link>
          <div className="flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'font-sans text-[15px] font-medium transition-all duration-200 px-24 py-12 rounded-lg text-center w-[120px]',
                    {
                      'text-white bg-accent shadow-sm': isActive,
                      'text-[#374151] hover:bg-[#F3F4F6] hover:text-primary': !isActive,
                    }
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="font-serif text-heading-sm text-primary"
            >
              KodNest
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-8 text-primary"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="pt-24 pb-8 space-y-16">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      'block font-sans text-body-base font-medium py-8',
                      {
                        'text-accent': isActive,
                        'text-primary': !isActive,
                      }
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
