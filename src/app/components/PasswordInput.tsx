import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, className }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder="Senha"
        className={`w-full p-3 rounded-md bg-[#2193b0] text-white placeholder-white pr-10 ${className}`}
        aria-label="Senha" // Melhorar acessibilidade
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
        aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'} // Melhorar acessibilidade
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
};

export default PasswordInput;
