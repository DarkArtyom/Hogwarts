import { useState } from 'react';
import { ToggleLabel } from './StyledSwitch';

export const ToggleSwitch = ({ theme }) => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    theme();
  };

  return (
    <ToggleLabel className="toggle-switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </ToggleLabel>
  );
};
