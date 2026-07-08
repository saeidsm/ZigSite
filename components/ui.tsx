import React from 'react';
import { Link } from 'react-router-dom';

/** Section label: small green square + green caption (used to open every section). */
export const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="zz-label">
    <i />
    <span>{children}</span>
  </div>
);

type BtnVariant = 'accent' | 'outline' | 'onyx';

const BTN_CLASS: Record<BtnVariant, string> = {
  accent: 'zz-btn',
  outline: 'zz-btn-outline',
  onyx: 'zz-btn-onyx',
};

/** Pill button that navigates via react-router. `style` sets the per-instance padding/size. */
export const Btn: React.FC<{
  to: string;
  variant?: BtnVariant;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ to, variant = 'accent', children, style }) => (
  <Link to={to} className={BTN_CLASS[variant]} style={style}>
    {children}
  </Link>
);
