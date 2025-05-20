type MembroEquipeProps = {
    nome: string;
    cargo: string;
    imagem: string;
    className?: string;
}

export const MembroEquipe = ({ nome, cargo, imagem, className }: MembroEquipeProps) => {
    return (
        <div className={`membro-card ${className || ''}`}>
            <img src={imagem} alt={`Foto de ${nome}.`} className="w-32 h-32 object-cover rounded-xl mx-auto mb-2" />
            <h3 className="font-semibold">{nome}</h3>
            <p className="text-sm whitespace-pre-line">{cargo}</p>
        </div>
    );
};