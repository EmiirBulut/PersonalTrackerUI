// ContentArea.tsx
import { FC, ReactNode } from 'react';

interface ContentAreaProps {
  children: ReactNode;
}

const ContentArea: FC<ContentAreaProps> = ({ children }) => {
  // Your content area code here
  return <main>{children}</main>;
};

export default ContentArea;