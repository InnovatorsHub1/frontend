import GenericButton from '../Button/GenericButton';
import GoogleIcon from '@src/utils/icons/GoogleIcon';
import styles from './GoogleSSOLogin.module.scss';
import clsx from 'clsx';

interface GoogleSSOLoginProps {
  onLogin: () => void;
  styleClass?: string;
}

export default function GoogleSSOLogin(props: GoogleSSOLoginProps) {
  const { onLogin, styleClass } = props;
  return (
    <GenericButton
      className={clsx(styles.button, styleClass)}
      variant='text'
      icon={<GoogleIcon />}
      iconPosition='left'
      onClick={onLogin}
    >
      Google
    </GenericButton>
  );
}
