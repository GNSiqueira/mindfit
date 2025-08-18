import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TipoDocumento } from "./TipoDocumento.entity";
import { Cliente } from "./Cliente.entity";

@Entity({ name: 'documento' })
export class Documento {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    nome: string

    @Column({ type: 'text', nullable: false })
    arquivo: string

    @Column({ type: 'date', nullable: false })
    dataUpload: Date

    // Relacionamentos
    @ManyToOne(() => TipoDocumento, (tipoDocumento) => tipoDocumento.documentos)
    tipoDocumento: TipoDocumento

    @ManyToOne(() => Cliente, (cliente) => cliente.documentos)
    cliente: Cliente
}
