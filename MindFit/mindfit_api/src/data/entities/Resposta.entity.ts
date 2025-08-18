import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Questionario } from "./Questionario.entity";
import { OpcaoPergunta } from "./OpcaoPergunta.entity";
import { Pergunta } from "./Pergunta.entity";
import { TipoPergunta } from "../enums/TipoPergunta.enum";

@Entity({ name: 'resposta' })
export class Resposta {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'text', nullable: true })
    texto: string

    @Column({ type: 'boolean', nullable: true })
    boleano: boolean

    @Column({ type: 'integer', enum: TipoPergunta, nullable: false })
    tipo: TipoPergunta

    // Relacionamentos
    @ManyToOne(() => Questionario, (questionario) => questionario.respostas)
    questionario: Questionario

    @OneToMany(() => OpcaoPergunta, (opcaoPergunta) => opcaoPergunta.opcao)
    opcoes: OpcaoPergunta[]

    @OneToOne(() => Pergunta, (pergunta) => pergunta.resposta)
    @JoinColumn({name: 'pergunta_id'})
    pergunta: Pergunta
}