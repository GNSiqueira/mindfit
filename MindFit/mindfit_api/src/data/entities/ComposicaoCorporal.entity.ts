import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente.entity";
import { Circunferencia } from "./Circunferencia.entity";

@Entity({ name: 'composicao_corporal' })
export class ComposicaoCorporal {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    peso: number

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    altura: number

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    imc: number

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    percentualGordura: number

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    massaMagra: number

    @Column({ type: 'date', nullable: false })
    dataAvaliacao: Date

    @Column({ type: 'boolean', nullable: false })
    active: boolean

    // Relacionamentos
    @ManyToOne(() => Cliente, (cliente) => cliente.composicoesCorporal)
    cliente: Cliente

    @OneToMany(() => Circunferencia, (circunferencia) => circunferencia.composicaoCorporal)
    circunferencias: Circunferencia[]
}
