import React, { MouseEventHandler } from 'react';

export interface TabButtonProps {
  label: string;
  isActive?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
function TabButton({
  label, isActive = false, onClick,
}: TabButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isActive}
    >
      {label}
    </button>
  );
}

export default TabButton;
