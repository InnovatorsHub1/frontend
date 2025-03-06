import {
  EmailOutlined,
  HelpOutline,
  PhoneOutlined,
  LockOutlined,
  PersonOutlined,
  HomeOutlined,
  CalendarTodayOutlined,
  CreditCardOutlined,
  MessageOutlined,
} from '@mui/icons-material';

export const getInputIcon = (type?: string, name?: string) => {
  const fieldIdentifier = (type || name || '').toLowerCase();

  if (fieldIdentifier.includes('email')) return <EmailOutlined />;
  if (fieldIdentifier.includes('password') || fieldIdentifier.includes('pass')) return <LockOutlined />;
  if (fieldIdentifier.includes('phone') || fieldIdentifier.includes('tel')) return <PhoneOutlined />;
  if (fieldIdentifier.includes('name') || fieldIdentifier.includes('user') || fieldIdentifier.includes('text'))
    return <PersonOutlined />;
  if (fieldIdentifier.includes('address') || fieldIdentifier.includes('location')) return <HomeOutlined />;
  if (fieldIdentifier.includes('date') || fieldIdentifier.includes('birth')) return <CalendarTodayOutlined />;
  if (fieldIdentifier.includes('card') || fieldIdentifier.includes('payment')) return <CreditCardOutlined />;
  if (fieldIdentifier.includes('message') || fieldIdentifier.includes('comment')) return <MessageOutlined />;

  return <HelpOutline />;
};
