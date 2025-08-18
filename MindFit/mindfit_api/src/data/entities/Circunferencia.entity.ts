import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ComposicaoCorporal } from "./ComposicaoCorporal.entity";

@Entity({ name: 'circunferencia' })
export class Circunferencia {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    nome: string

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    valor: number

    @Column({ type: 'date', nullable: false })
    dataAvaliacao: Date

    @Column({ type: 'boolean', nullable: false })
    active: boolean

    // Relacionamentos
    @ManyToOne(() => ComposicaoCorporal, (composicaoCorporal) => composicaoCorporal.circunferencias)
    composicaoCorporal: ComposicaoCorporal
}
