import { ChangeEvent, FC } from 'react';

interface SliderActionsInterface {
  shuffleSlides: () => void;
  shuffleOn: boolean;
  canAnswer: boolean | undefined;
  inputValue: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SliderActions: FC<SliderActionsInterface> = (props) => {
  const { shuffleSlides, shuffleOn, canAnswer, inputValue, handleInputChange } = props;

  return (
    <div className="flex items-center justify-center gap-6">
      <button
        className={`cursor-pointer rounded-md bg-secondary p-4 active:scale-95 dark:bg-secondary-dark ${
          shuffleOn ? 'bg-primary-dark text-secondary dark:bg-secondary dark:text-primary-dark' : ''
        }`}
        onClick={shuffleSlides}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
          <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
        </svg>
      </button>
      {canAnswer && (
        <div className="flex w-full justify-around gap-4">
          <input
            type="text"
            placeholder="your answer"
            autoComplete="off"
            name="slide-answer"
            className="w-full rounded-md border-solid bg-secondary p-3 outline-none dark:bg-secondary-dark"
            id="slide_answer"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      )}
    </div>
  );
};

export { SliderActions };
