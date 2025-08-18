import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exercicio } from "./Exercicio.entity";

@Entity({ name: "musculo" })
export class Musculo {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", nullable: false, length: 100 })
    nome: string;

    // Relacionamentos
    @ManyToMany(() => Exercicio, (exercicio) => exercicio.musculosAlvo)
    exercicios: Exercicio[];
}
