import React from 'react';

interface InputProps {
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'; // Tipagem mais específica para os tipos de input
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-3 rounded-md bg-[#2193b0] text-white placeholder-white ${className}`}
    />
  );
};

export default Input;
