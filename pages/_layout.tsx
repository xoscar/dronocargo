import { FunctionComponent, ReactElement, useEffect, useMemo } from 'react';
import Navigation from '../components/navigation';

export type LayoutProps = {
  children: ReactElement;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
      <Navigation>
      {children}
      </Navigation>
  );
};

export default Layout;
