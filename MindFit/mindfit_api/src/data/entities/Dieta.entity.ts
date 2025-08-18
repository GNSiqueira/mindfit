import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from './Cliente.entity';
import { ItemDaDieta } from './ItemDaDieta.entity';
import { MacroNutriente } from './MacroNutriente.entity';

@Entity({ name: 'dieta' })
export class Dieta {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 100 })
    nome: string;

    @Column({ type: 'date', nullable: false })
    dataInicio: Date;

    @Column({ type: 'int', nullable: false })
    periodo: number;

    @Column({ type: 'text', nullable: false })
    observacao: string;

    @Column({ type: 'boolean', nullable: false })
    active: boolean;

    // Relacionamentos
    @ManyToOne(() => Cliente, (cliente) => cliente.dietas)
    cliente: Cliente;

    @OneToMany(() => MacroNutriente, (macroNutriente) => macroNutriente.dieta)
    macroNutrientes: MacroNutriente[];

    @OneToMany(() => ItemDaDieta, (itemDaDieta) => itemDaDieta.dieta)
    itensDaDieta: ItemDaDieta[];
}
