import clsx from 'clsx';
import { Link as ReactLink} from 'react-router-dom';

export type LinkProps = {
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'default';
  className?: string;
  to?:string;
} 

export default function Link({ 
  className, 
  children, 
  to = '', 
  type = 'default',
  ...rest 
}: LinkProps) {
  const linkClass = clsx(
    {
      'text-primary dark:dark-text-primary': type === 'primary',
      'text-secondary dark:dark-text-secondary': type === 'secondary',
      'text-default dark:dark-text-default': type === 'default',
    },
    className,
  );

  return (
    <ReactLink to={to} className={linkClass} {...rest}>
      {children}
    </ReactLink>
  );
}