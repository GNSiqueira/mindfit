import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TemplateQuestionario } from "./TemplateQuestionario.entity";
import { Questionario } from "./Questionario.entity";
import { Resposta } from "./Resposta.entity";
import { TipoPergunta } from "../enums/TipoPergunta.enum";
import { OpcaoPergunta } from "./OpcaoPergunta.entity";

@Entity({ name: 'pergunta' })
export class Pergunta {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'text', nullable: false })
    texto: string

    @Column({ type: 'int', nullable: false })
    ordem: number

    @Column({ type: 'boolean', nullable: false })
    obrigatoria: boolean

    @Column({ type: 'integer', enum: TipoPergunta, nullable: false })
    tipo: TipoPergunta

    // Relacionamentos
    @ManyToOne(() => Questionario, (questionario) => questionario.perguntas)
    questionario: Questionario
    
    @ManyToOne(() => TemplateQuestionario, (template) => template.perguntas)
    template: TemplateQuestionario

    @OneToOne(() => Resposta, (resposta) => resposta.pergunta)
    resposta: Resposta

    @OneToMany(() => OpcaoPergunta, (opcaoPergunta) => opcaoPergunta.pergunta)
    opcoes: OpcaoPergunta[]
}
