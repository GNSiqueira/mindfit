import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pergunta } from "./Pergunta.entity";
import { Resposta } from "./Resposta.entity";

@Entity({ name: 'opcao_pergunta' })
export class OpcaoPergunta {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'text', nullable: false })
    opcao: string

    @Column({ type: 'int', nullable: false })
    ordem: number

    // Relacionamentos
    @ManyToOne(() => Pergunta, (pergunta) => pergunta.opcoes)
    pergunta: Pergunta

    @ManyToOne(() => Resposta, (resposta) => resposta.opcoes)
    resposta: Resposta
}
