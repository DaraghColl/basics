import { FC } from 'react';
import { Link } from 'react-router-dom';

const Landing: FC = () => {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold tracking-tight text-primary-dark dark:text-primary-light sm:text-6xl ">
        Basics
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100 md:max-w-[70%]">
        Welcome to basics. Use our <span className="text-indigo-600">interactive</span> slides to gain an understanding
        and master the <span className="text-indigo-600">basics</span> of multiple subjects, from math, to language, to
        countries flags.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="/topic-list"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export { Landing };
