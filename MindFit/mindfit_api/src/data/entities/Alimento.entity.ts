import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ItemDaDieta } from './ItemDaDieta.entity';
import { CategoriaAlimento } from './CategoriaAlimento.entity';

@Entity({ name: 'alimento' })
export class Alimento {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 100 })
    nome: string;

    @Column({ type: 'decimal', nullable: false, precision: 10, scale: 2 })
    calorias: number;

    @Column({ type: 'decimal', nullable: false, precision: 10, scale: 2 })
    proteina: number;

    @Column({ type: 'decimal', nullable: false, precision: 10, scale: 2 })
    carboidrato: number;

    @Column({ type: 'decimal', nullable: false, precision: 10, scale: 2 })
    gordura: number;

    // Relacionamentos
    @OneToMany(() => ItemDaDieta, (itemDaDieta) => itemDaDieta.alimento)
    itensDaDieta: ItemDaDieta[];

    @ManyToOne(() => CategoriaAlimento, (categoriaAlimento) => categoriaAlimento.alimentos)
    categoria: CategoriaAlimento;
}
