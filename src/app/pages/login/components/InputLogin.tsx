import React from "react";

interface IInputLoginProps {
  label: string;
  type?: string;
  value: string;

  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>(
  ({ label, type, value, onChange, onPressEnter }, ref) => {
    return (
      <label>
        <span>{label}</span>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onPressEnter?.()}
        />
      </label>
    );
  }
);
