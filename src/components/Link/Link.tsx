import clsx from 'clsx';
import styles from './Link.module.scss';
import { Link as ReactLink } from 'react-router-dom';

export type LinkProps = {
  children: React.ReactNode;
  type: 'primary' | 'secondary' | 'default';
  className?: string;
  to?: string;
};

export default function Link(props: LinkProps) {
  const { className, children, to = '', type } = props;
  const linkClass = clsx(
    {
      'text-primary dark:dark-text-primary': type === 'primary',
      'text-secondary dark:dark-text-secondary': type === 'secondary',
      'text-default dark:dark-text-default': type === 'default',
    },
    className,
  );

  return (
    <div className={styles.linkWrapper}>
      <ReactLink to={to} className={linkClass}>
        {children}
      </ReactLink>
    </div>
  );
}
