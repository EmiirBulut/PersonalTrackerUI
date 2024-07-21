// LayoutWithSlider.tsx
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const LayoutWithSlider: FC<LayoutProps> = ({ children }) => (
  <>
    <div>
        {children}
    </div>
  </>
);

export default LayoutWithSlider;
