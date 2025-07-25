interface AlertaProps {
  mensagem: string;
  onClose: () => void;
}

export default function Alerta({ mensagem, onClose }: AlertaProps) {
    return (
      <div className="bg-red-500 text-white p-4 mb-4 rounded-lg">
        <p>{mensagem}</p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-lg font-bold"
        >
          &times;
        </button>
      </div>
    );
  }
  