import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Alimento } from './Alimento.entity';

@Entity({ name: 'categoria_alimento' })
export class CategoriaAlimento {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', nullable: false, length: 100 })
    nome: string;

    // Relacionamentos
    @OneToMany(() => Alimento, (alimento) => alimento.categoria)
    alimentos: Alimento[];
}
