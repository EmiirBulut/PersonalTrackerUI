// LayoutWithoutSlider.tsx
import React, { FC, ReactNode } from 'react';
import Header from '../../components/Header/header';
import ContentArea from '../../components/ContentArea/content-area';

interface LayoutProps {
  children: ReactNode;
}

const LayoutWithoutSlider: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <ContentArea>
      {children}
    </ContentArea>
  </>
);

export default LayoutWithoutSlider;