import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Cliente } from "./Cliente.entity";
import { Objetivo } from "../enums/Objetivo.enum";
import { Experiencia } from "../enums/Experiencia.enum";

@Entity({ name: "informacao" })
export class Informacao {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'integer',enum: Objetivo, nullable: false })
    objetivo: Objetivo;

    @Column({ type: 'integer', enum: Experiencia, nullable: false })
    experiencia: Experiencia;

    @Column({ type: "text" })
    observacao: string;

    @Column({ type: "date", nullable: false })
    dataAdicionado: Date;

    @Column({ type: "date", nullable: true })
    dataRemovido: Date;

    @Column({ type: "boolean", nullable: false })
    active: boolean;

    // Relacionamentos
    @ManyToOne(() => Cliente, (cliente) => cliente.informacoes)
    cliente: Cliente;
}
