type MembroEquipeProps = {
    nome: string;
    cargo: string;
    imagem: string;
}

export const MembroEquipe =({ nome, cargo, imagem }: MembroEquipeProps) => {
    return (
        <div className="bg-[#262626] text-white rounded-2xl p-4 border-2 border-[#017108] w-48 text-center">
            <img src={imagem} alt={`Foto de ${nome}.`} className="w-32 h-32 object-cover rounded-xl mx-auto mb-2" />
            <h3 className="font-semibold">{nome}</h3>
            <p className="text-sm">{cargo}</p>
        </div>
    );
};