import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="flex items-center">
      <Container>
        <div className="flex sm:flex-wrap sm:gap-x-12 sm:gap-y-10 items-center py-16">
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="flex items-center gap-y-8 sm:flex-wrap sm:gap-x-12 sm:gap-y-0">
              <NavLink href="#features">Home</NavLink>
              <NavLink href="#testimonials">Services</NavLink>
              <NavLink href="#pricing">Industries</NavLink>
              <NavLink href="#pricing">About Us</NavLink>
              <NavLink href="#pricing">Wholesale</NavLink>
              <NavLink href="#pricing">Contact Us</NavLink>
            </div>
          </nav>
        </div>
        <p>Copyright &copy; {new Date().getFullYear()} <span className='simpl'>simpl™</span> technology solutions. All rights reserved.</p>
      </Container>
    </footer>
  )
}
