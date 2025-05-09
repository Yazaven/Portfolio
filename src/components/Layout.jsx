import { LightEffect  } from './ThemeBackground';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-gray-100 overflow-hidden">
      <LightEffect  />
      <div className="relative z-10">{children}</div>
    </div>
  );
};