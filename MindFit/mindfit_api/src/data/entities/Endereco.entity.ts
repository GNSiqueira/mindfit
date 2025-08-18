import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente.entity";

@Entity({ name: 'endereco'})
export class Endereco {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 2})
    uf: string

    @Column({ type: 'varchar', nullable: false, length: 100})
    cidade: string

    @Column({ type: 'varchar', nullable: false, length: 100})
    bairro: string

    @Column({ type: 'varchar', nullable: false, length: 100})
    rua: string

    @Column({ type: 'varchar', nullable: false, length: 10})
    numero: string

    @Column({ type: 'varchar', nullable: true, length: 200})
    complemento: string

    // Relacionamentos 
    @OneToOne(() => Cliente, (cliente) => cliente.endereco)
    cliente: Cliente

}