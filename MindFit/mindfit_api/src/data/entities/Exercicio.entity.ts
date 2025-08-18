import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm";
import { DivisaoTreino } from "./DivisaoTreino.entity";
import { Serie } from "./Serie.entity";
import { Musculo } from "./Musculo.entity";

@Entity({ name: "exercicio" })
export class Exercicio {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", nullable: false, length: 100 })
    nome: string;

    @Column({ type: "text", nullable: true })
    descricao: string;

    @Column({ type: "varchar", nullable: true, length: 100 })
    equipamento: string;

    @Column({ type: "varchar", nullable: true, length: 255 })
    videoUrl: string;

    @Column({ type: "varchar", nullable: true, length: 255 })
    imagem: string;

    // Relacionamentos
    @ManyToMany(() => Musculo, (musculo) => musculo.exercicios)
    @JoinTable()
    musculosAlvo: Musculo[];

    @ManyToOne(() => DivisaoTreino, (divisaoTreino) => divisaoTreino.exercicios)
    divisaoTreino: DivisaoTreino;

    @OneToMany(() => Serie, (serie) => serie.exercicio)
    series: Serie[];
}
