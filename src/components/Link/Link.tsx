// import clsx from 'clsx';
import styles from './Link.module.scss';
import { Link as ReactLink } from 'react-router-dom';

export type ILinkProps = {
  children: React.ReactNode;
  type: 'primary' | 'secondary';
  className?: string;
  to?: string;
};

export default function Link(props: ILinkProps) {
  const { className, children, to = '', type } = props;
  const linkClass =
    type === 'primary'
      ? 'text-primary dark:dark-text-primary'
      : type === 'secondary'
        ? 'text-secondary dark:dark-text-secondary'
        : 'text-default dark:dark-text-default';
  // const linkClass = clsx(
  //   {
  //     'text-primary dark:dark-text-primary': type === 'primary',
  //     'text-secondary dark:dark-text-secondary': type === 'secondary',
  //     'text-default dark:dark-text-default': type === 'default',
  //   },
  //   className,
  // );

  return (
    <div className={styles.linkWrapper}>
      <ReactLink to={to} className={className ?? linkClass}>
        {children}
      </ReactLink>
    </div>
  );
}
