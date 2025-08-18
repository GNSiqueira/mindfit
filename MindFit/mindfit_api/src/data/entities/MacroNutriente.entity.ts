import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Dieta } from "./Dieta.entity";

@Entity({ name: 'macro_nutriente' })
export class MacroNutriente {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    nome: string

    @Column({ type: 'decimal', nullable: false, precision: 10, scale: 2 })
    contagem: number

    // Relacionamentos
    @ManyToOne(() => Dieta, (dieta) => dieta.macroNutrientes)
    dieta: Dieta

}