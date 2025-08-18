import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Documento } from "./Documento.entity";
import { Trainer } from "./Trainer.entity";

@Entity({ name: 'tipo_documento' })
export class TipoDocumento {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    nome: string

    // Relacionamentos
    @ManyToMany(() => Documento, (documento) => documento.tipoDocumento)
    documentos: Documento[]

    @ManyToOne(() => Trainer, (triner) => triner.tiposDocumento)
    trainer: Trainer
}
