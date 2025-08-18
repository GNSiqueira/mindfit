import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Exercicio } from "./Exercicio.entity";

@Entity({ name: 'serie' })
export class Serie {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'int', nullable: false })
    ordem: number

    @Column({ type: 'int', nullable: false })
    repeticoes: number

    @Column({ type: 'decimal',precision: 10, scale: 2, nullable: false })
    carga: number

    @Column({ type: 'text', nullable: true })
    observacao: string

    @Column({ type: 'time', nullable: true })
    intervalo: Date

    // Relacionamentos
    @ManyToOne(() => Exercicio, (exercicio) => exercicio.series)
    exercicio: Exercicio
}
