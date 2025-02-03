import { useState } from 'react';
import clsx from 'clsx';

type ToggleButtonProps = {
  value: boolean;
  setValue: (value: any) => void;
  size?: number;
  className?: string;
  style?: any;
};

export default function ToggleButton(props: ToggleButtonProps) {
  const { value, setValue, size = 32, className = '', style } = props;

  const isChecked = value;

  // all useStates:
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='flex items-center' style={style}>
      <label
        className={clsx('relative mx-4 inline-block cursor-pointer rounded-full outline-none', className)}
        style={{
          ...style,
          width: size * 2.8,
          height: size,
          // Part 1: the backgroundColor of the toggle button
          background: isChecked ? 'linear-gradient(0deg, #6dd1ff, #20b7ff)' : 'linear-gradient(0deg, #333, #000)',
          // Part 2: the shadow of the backgroundColor - in the color torquize
          // Part 3: another shadow of the backgroundColor - in the color light black
          boxShadow: isChecked
            ? `0 0 ${size / 16}px #6dd1ff, 0px 0px 0px ${size / 6}px #353535, 0 0 0 ${size / 16}px #3e3e3e,
          inset 0 0 ${size / 12}px black, 0 ${size / 16}px ${size / 4}px rgba(0, 0, 0, 0.5),
          inset 0 0 ${size / 4}px rgba(0, 0, 0, 0.2)`
            : `0px 0px 0px ${size / 6}px #353535, 0 0 0 ${size / 16}px #3e3e3e,
          inset 0 0 ${size / 12}px black, 0 ${size / 16}px ${size / 4}px rgba(0, 0, 0, 0.5),
          inset 0 0 ${size / 4}px rgba(0, 0, 0, 0.2)`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          type='checkbox'
          checked={isChecked}
          onChange={setValue}
          className='absolute inset-0 z-50 cursor-pointer opacity-0'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <div
          className={clsx(
            'absolute left-0 top-1/2 -translate-y-1/2 rounded-full',
            isChecked
              ? 'left-1/3'
              : isFocused
                ? 'border-blue-400 bg-neutral-400'
                : isHovered
                  ? 'bg-neutral-200'
                  : 'bg-transparent',
          )}
          style={{
            height: size - 1,
            width: size * 1.8,
            // Part 4: the backgroundColor of the mini toggle-bar
            background: 'linear-gradient(0deg, black, #6b6b6b)',
            // Part 5: the shadow of the mini toggle-bar
            // Previously, it was a fixed value of '0 0 0 1px #232323'.
            boxShadow: isChecked ? '0 -1px 30px 0px #1efefe' : '0 0 0 1px #232323',
            transition: 'all 0.5s',
            left: isChecked ? size : 0,
          }}
        >
          <div
            className='absolute top-1/2 -translate-y-1/2 rounded-full'
            style={{
              right: size / 2.8,
              width: size / 8,
              height: size / 8,
              transition: 'all 0.5s',
              // Part 6: the backgroundColor of the tiny dot of the toggle
              background: isChecked ? '#63cdff' : 'linear-gradient(0deg, #6b6b6b, black)',
              // Part 7: the shadow around the tiny dot of the toggle
              boxShadow: '0 0 2px #999, 0 0 15px #777',
            }}
          />
        </div>
      </label>
    </div>
  );
}
