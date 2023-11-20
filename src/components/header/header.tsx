import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

const Header: FC = () => {
  return (
    <header className="mx-auto my-0 flex h-8 max-w-[800px] items-center justify-between px-0 py-8">
      <Link to="/" id="home_icon_link" aria-label="link to home page">
        <svg className="w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
        </svg>
      </Link>
      <ThemeToggle />
    </header>
  );
};

export { Header };
