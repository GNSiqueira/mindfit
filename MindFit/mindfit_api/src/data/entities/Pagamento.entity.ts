import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { StatusPagamento } from '../enums/StatusPagamento.enum';
import { FormaPagamento } from '../enums/FormaPagamento.enum';
import { Cliente } from './Cliente.entity';
import { Trainer } from './Trainer.entity';

@Entity({ name: 'pagamento' })
export class Pagamento {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'decimal', nullable: false })
    valor: number;

    @Column({ type: 'date', nullable: false })
    dataPagamento: Date;

    @Column({ type: 'date', nullable: false })
    vencimento: Date;

    @Column({ type: 'varchar', nullable: false , length: 100 })
    name: string

    @Column({ type: 'integer', nullable: false, enum: StatusPagamento })
    status: StatusPagamento;

    @Column({ type: 'integer', nullable: false, enum: FormaPagamento })
    formaPagamento: FormaPagamento;

    // Relacionamentos

    @ManyToOne(() => Cliente, (cliente) => cliente.pagamentos)
    cliente: Cliente;

    @ManyToOne(() => Trainer, (trainer) => trainer.pagamentos)
    trainer: Trainer;
}
