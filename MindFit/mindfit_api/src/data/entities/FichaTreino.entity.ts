import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Objetivo } from "../enums/Objetivo.enum";
import { Trainer } from "./Trainer.entity";
import { Cliente } from "./Cliente.entity";
import { DivisaoTreino } from "./DivisaoTreino.entity";

@Entity({ name: 'ficha_treino' })
export class FichaTreino {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'integer', enum: Objetivo, nullable: false })
    objetivo: Objetivo

    @Column({ type: 'int', nullable: false })
    frequencia: number
    
    @Column({ type: 'int', nullable: false })
    divisaoTreino: number

    @Column({ type: 'date', nullable: false })
    dataInicio: Date

    @Column({ type: 'int', nullable: false })
    periodizacao: number

    @Column({ type: 'date', nullable: true })
    dataFim: Date

    @Column({ type: 'text', nullable: true })
    observacao: string

    @Column({ type: 'boolean', nullable: false })
    active: boolean

    // Relacionamentos
    @ManyToOne(() => Trainer, (trainer) => trainer.fichasTreino)
    criadoPor: Trainer

    @ManyToOne(() => Cliente, (cliente) => cliente.fichasTreino)
    cliente: Cliente

    @OneToMany(() => DivisaoTreino, (divisaoTreino) => divisaoTreino.fichaTreino)
    divisoesTreino: DivisaoTreino[]
}
