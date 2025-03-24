import { useAuth } from '@clerk/clerk-react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import LogoContainer from './ui/LogoContainer';
import NavigationRoutes from './ui/NavigationRoutes';

const Header = () => {
  const {userId} =useAuth();
  return (
    <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>

      <Container>
        <div>
          {/* logo section*/}
          <LogoContainer/>

          {/* navigation section */}
          <nav className={cn("hiiden md:flex items-center gap-3")}>
          <NavigationRoutes/>
          </nav>

          

          {/* profile section */}
        </div>
      </Container>
    </header>
  )
}

export default Header