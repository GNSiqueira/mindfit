import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { Dieta } from './Dieta.entity'
import { Alimento } from './Alimento.entity'

@Entity({ name: 'item_da_dieta' })
export class ItemDaDieta {
    @PrimaryColumn()
    dieta_id: number

    @PrimaryColumn()
    alimento_id: number

    @Column({ nullable: false })
    refeicao: number

    @Column({ nullable: false })
    opcao: number

    @Column({ type: 'time' })
    horario: Date

    @Column({ type: 'decimal', precision: 10, scale: 3, nullable: false })
    quantidade: number

    // Relacionamentos
    @ManyToOne(() => Dieta, (dieta) => dieta.itensDaDieta)
    @JoinColumn({ name: 'dieta_id'})
    dieta: Dieta

    @ManyToOne(() => Alimento, (alimento) => alimento.itensDaDieta)
    @JoinColumn({ name: 'alimento_id'})
    alimento: Alimento
}
