import { ReactNode, useState } from 'react';

interface AppSpecificComponentProps {
  children: ReactNode;
}

// Component that can't be reused across apps
export const AppSpecificComponent: React.FC<AppSpecificComponentProps> = ({ children }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div>
      <button onClick={() => setShowChildren(true)}>show children</button>
      {showChildren && <p role='alert'>{children}</p>}
    </div>
  );
};
