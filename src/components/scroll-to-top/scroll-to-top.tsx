import { useLocation } from 'react-router-dom';
import { FC, useEffect, Fragment } from 'react';

interface ScrollToTopInterface {
  children: string | JSX.Element | JSX.Element[];
}
const ScrollToTop: FC<ScrollToTopInterface> = (props) => {
  const { children } = props;
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Fragment>{children}</Fragment>;
};

export { ScrollToTop };
