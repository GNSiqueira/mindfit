import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente.entity";
import { TemplateQuestionario } from "./TemplateQuestionario.entity";
import { Pergunta } from "./Pergunta.entity";
import { Resposta } from "./Resposta.entity";
import { StatusQuestionario } from "../enums/StatusQuestionario.enum";
import { Objetivo } from "../enums/Objetivo.enum";
import { Trainer } from "./Trainer.entity";

@Entity({ name: 'questionario' })
export class Questionario {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    nome: string

    @Column({ type: 'integer', enum: Objetivo, nullable: false })
    objetivo: Objetivo

    @Column({ type: 'text', nullable: true })
    descricao: string

    @Column({ type: 'date', nullable: false })
    dataEnvio: Date

    @Column({ type: 'date', nullable: true })
    dataResposta: Date

    @Column({ type: 'text', nullable: true })
    observacao: string

    @Column({ type: 'integer', enum: StatusQuestionario, nullable: false })
    status: StatusQuestionario

    // Relacionamentos
    @ManyToOne(() => Cliente, (cliente) => cliente.questionarios)
    cliente: Cliente

    @ManyToOne(() => Trainer, (trainer) => trainer.questionarios)
    trainer: Trainer

    @ManyToOne(() => TemplateQuestionario, (templateQuestionario) => templateQuestionario.questionarios)
    templateQuestionario: TemplateQuestionario

    @OneToMany(() => Pergunta, (pergunta) => pergunta.questionario)
    perguntas: Pergunta[]

    @OneToMany(() => Resposta, (resposta) => resposta.questionario)
    respostas: Resposta[]
}
