import React from 'react'
import { render, screen } from '@testing-library/react'
import { CasinoCard } from '..'

// Mock the dependencies
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
}))

jest.mock('../../../atoms/button', () => ({
  Button: ({ children, className }: { children: React.ReactNode; className: string }) => (
    <button className={className}>{children}</button>
  )
}))

jest.mock('../../../atoms/star_rating', () => ({
  __esModule: true,
  default: ({ rating }: { rating: number }) => <div data-testid="star-rating">{rating}</div>
}))

const mockData = {
  logo: 'test-logo',
  background: '#FFFFFF',
  casino_name: 'Test Casino',
  rating: 4.5,
  bonus: {
    betAmount: '$10',
    bonusAmount: '$50'
  },
  cta: {
    label: 'Claim Bonus',
    url: '/claim'
  }
}

describe('CasinoCard', () => {
  it('renders the casino card with correct information', () => {
    render(<CasinoCard data={mockData} />)

    // Check if the logo is rendered
    const logo = screen.getByAltText('casino_logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/test-logo.webp')

    // Check if the casino name is rendered and linked
    const casinoName = screen.getByText('Test Casino')
    expect(casinoName).toBeInTheDocument()
    expect(casinoName.closest('a')).toHaveAttribute('href', '')

    // Check if the star rating is rendered
    const starRating = screen.getByTestId('star-rating')
    expect(starRating).toBeInTheDocument()
    expect(starRating).toHaveTextContent('4.5')

    // Check if the bonus information is rendered
    expect(screen.getByText('Bet $10')).toBeInTheDocument()
    expect(screen.getByText('Get $50')).toBeInTheDocument()

    // Check if the CTA button is rendered
    const ctaButton = screen.getByText('Claim Bonus')
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveClass('lg:min-w-[180px] lg:max-w-[303px] text-sm font-bold')
  })

  it('applies correct responsive classes', () => {
    render(<CasinoCard data={mockData} />)

    const container = screen.getByText('Test Casino').closest('div')
    expect(container).toHaveClass('flex items-center flex-col sm:items-start md:items-center lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-4')

    const logoContainer = screen.getByAltText('casino_logo').closest('div')
    expect(logoContainer).toHaveClass('h-[133px] w-full mb-6 flex justify-center sm:w-[300px] sm:h-[162px] sm:mb-0 md:w-full lg:h-[103px] lg:w-72')
  })
})