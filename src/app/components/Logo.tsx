import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={150} // Definir largura fixa
      height={150} // Definir altura fixa
      //className="animate-bounce mb-4" // Classes para animação e margem
    />
  );
};

export default Logo;
