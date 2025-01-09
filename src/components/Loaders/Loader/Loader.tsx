import clsx from 'clsx';
import styles from './Loader.module.scss';

type LoaderProps = {
  className?: string;
  size?: string;
};

export default function Loader(props: LoaderProps) {
  const { className, size = '64px' } = props;

  return (
    <div
      className={clsx(styles.loader, className)}
      style={{
        width: size,
        height: size,
      }}
    >
      <svg viewBox='0 0 80 80'>
        <rect x='8' y='8' width='64' height='64'></rect>
      </svg>
    </div>
  );
}
