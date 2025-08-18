import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FichaTreino } from "./FichaTreino.entity";
import { Exercicio } from "./Exercicio.entity";

@Entity({ name: 'divisao_treino' })
export class DivisaoTreino {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    nome: string

    @Column({ type: 'text', nullable: true })
    descricao: string

    // Relacionamentos
    @ManyToOne(() => FichaTreino, (fichaTreino) => fichaTreino.divisoesTreino)
    fichaTreino: FichaTreino

    @OneToMany(() => Exercicio, (exercicio) => exercicio.divisaoTreino)
    exercicios: Exercicio[]
}
