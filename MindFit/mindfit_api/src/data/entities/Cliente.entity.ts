import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { ModoTrabalho } from "../enums/ModoTrabalho.enum"
import { Trainer } from "./Trainer.entity"
import { Dieta } from "./Dieta.entity"
import { Endereco } from "./Endereco.entity"
import { TagsCliente } from "./TagsCliente.entity"
import { Informacao } from "./Informacao.entity"
import { Pagamento } from "./Pagamento.entity"
import { Agendamento } from "./Agendamento.entity"
import { Documento } from "./Documento.entity"
import { FichaTreino } from "./FichaTreino.entity"
import { ComposicaoCorporal } from "./ComposicaoCorporal.entity"
import { Avaliacao } from "./Avaliacao.entity"
import { Questionario } from "./Questionario.entity"



@Entity({ name: 'cliente' })
export class Cliente {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 50 })
    nome: string

    @Column({ type: 'varchar', nullable: false, length: 11 })
    cpf: string

    @Column({ type: 'varchar', nullable: false, length: 250 })
    email: string

    @Column({ type: 'varchar', nullable: false, length: 100 })
    senha: string

    @Column({ type: 'varchar', nullable: false, length: 14 })
    telefone: string

    @Column({ type: 'date', nullable: false })
    dataNascimento: Date

    @Column({ type: 'varchar', nullable: false })
    fotoPerfil: string

    @Column({ type: 'date', nullable: false })
    dataAdmissao: Date

    @Column({ type: 'integer', enum: ModoTrabalho, nullable: false })
    modoTrabalho: ModoTrabalho

    @Column({ type: 'boolean', nullable: false })
    active: boolean

    // Relacionamentos
    @OneToOne(() => Endereco, (endereco) => endereco.cliente)
    @JoinColumn({name: 'endereco_id'})
    endereco: Endereco

    @ManyToOne(() => Trainer, (trainer) => trainer.clientes)
    trainer: Trainer

    @OneToMany(() => Agendamento, (agendamento) => agendamento.cliente)
    agendamentos: Agendamento[]

    @OneToMany(() => Documento, (documento) => documento.cliente)
    documentos: Documento[]

    @OneToMany(() => TagsCliente, (tagsCliente) => tagsCliente.cliente)
    tagsCliente: TagsCliente[]

    @OneToMany(() => FichaTreino, (fichaTreino) => fichaTreino.cliente)
    fichasTreino: FichaTreino[]

    @OneToMany(() => ComposicaoCorporal, (composicaoCorporal) => composicaoCorporal.cliente)
    composicoesCorporal: ComposicaoCorporal[]

    @OneToMany(() => Informacao, (informacao) => informacao.cliente)
    informacoes: Informacao[]

    @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.cliente)
    avaliacaos: Avaliacao[]

    @OneToMany(() => Questionario, (questionario) => questionario.cliente)
    questionarios: Questionario[]

    @OneToMany(() => Dieta, (dieta) => dieta.cliente)
    dietas: Dieta[]

    @OneToMany(() => Pagamento, (pagamento) => pagamento.cliente)
    pagamentos: Pagamento[]
}