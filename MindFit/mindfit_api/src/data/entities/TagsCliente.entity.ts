import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, PrimaryColumn, JoinTable } from "typeorm";
import { Cliente } from "./Cliente.entity";
import { Tag } from "./Tag.entity";

@Entity({ name: "tags_cliente" })
export class TagsCliente {
    @PrimaryColumn()
    clienteId: number;

    @PrimaryColumn()
    tagId: number;

    @Column({ type: "boolean", nullable: false })
    active: boolean;

    @Column({ type: "date", nullable: false })
    dataAdicionado: Date;

    @Column({ type: "date", nullable: true })
    dataRemovido: Date;


    // Relacionamentos
    @ManyToOne(() => Cliente, (cliente) => cliente.tagsCliente)
    @JoinTable({name: 'clienteId'})
    cliente: Cliente;

    @ManyToOne(() => Tag, (tag) => tag.tagsCliente)
    @JoinTable({name: 'tagId'})
    tag: Tag;

    
}
