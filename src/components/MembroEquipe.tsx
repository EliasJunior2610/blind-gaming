type MembroEquipeProps = {
  nome: string;
  cargo: string;
  imagem: string;
};

export const MembroEquipe = ({ nome, cargo, imagem }: MembroEquipeProps) => {
  return (
    <div className="flex flex-col justify-start items-center p-4 w-[180px]">
      <div className="border-4 border-black rounded-xl overflow-hidden">
        <img
          src={imagem}
          alt={`Foto de ${nome}`}
          className="w-[150px] h-[180px] object-cover"
        />
      </div>
      <h3 className="font-semibold text-sm text-center mt-2">{nome}</h3>
      <p className="text-xs whitespace-pre-line text-center">{cargo}</p>
    </div>
  );
};