import {
  RiMailLine,
  RiLockLine,
  RiPhoneLine,
  RiUserLine,
  RiHomeLine,
  RiCalendarLine,
  RiBankCardLine,
  RiMessage2Line,
  RiQuestionLine,
} from '@remixicon/react';
export const getRemixIcon = (type?: string, name?: string) => {
  const fieldIdentifier = (type || name || '').toLowerCase();

  if (fieldIdentifier.includes('email')) return <RiMailLine size={20} />;
  if (fieldIdentifier.includes('password') || fieldIdentifier.includes('pass')) return <RiLockLine size={20} />;
  if (fieldIdentifier.includes('phone') || fieldIdentifier.includes('tel')) return <RiPhoneLine size={20} />;
  if (fieldIdentifier.includes('name') || fieldIdentifier.includes('user') || fieldIdentifier.includes('text'))
    return <RiUserLine size={20} />;
  if (fieldIdentifier.includes('address') || fieldIdentifier.includes('location')) return <RiHomeLine size={20} />;
  if (fieldIdentifier.includes('date') || fieldIdentifier.includes('birth')) return <RiCalendarLine size={20} />;
  if (fieldIdentifier.includes('card') || fieldIdentifier.includes('payment')) return <RiBankCardLine size={20} />;
  if (fieldIdentifier.includes('message') || fieldIdentifier.includes('comment')) return <RiMessage2Line size={20} />;

  return <RiQuestionLine size={20} />;
};
