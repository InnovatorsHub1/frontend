import styles from './Link.module.scss';

export type ILinkProps = {
  children: React.ReactNode;
  className?: string;
  to?: string;
};

export default function Link(props: ILinkProps) {
  const { className, children, to } = props;

  return (
    <div className={styles.link}>
      <Link to={to} className={className}>
        {children}
      </Link>
    </div>
  );
}
