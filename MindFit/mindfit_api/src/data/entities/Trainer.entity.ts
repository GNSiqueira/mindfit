import { Column, Entity, JoinColumn, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Configuracao } from './Configuracao.entity'
import { Cliente } from './Cliente.entity'
import { Pagamento } from './Pagamento.entity'
import { Agendamento } from './Agendamento.entity'
import { FichaTreino } from './FichaTreino.entity'
import { Avaliacao } from './Avaliacao.entity'
import { Questionario } from './Questionario.entity'
import { TemplateQuestionario } from './TemplateQuestionario.entity'
import { TipoAvaliacao } from './TipoAvaliacao.entity'
import { TipoDocumento } from './TipoDocumento.entity'

@Entity({ name: 'trainer' })
export class Trainer {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 50 })
    nome: string

    @Column({ type: 'varchar', nullable: false, length: 40 })
    nomeApp: string

    @Column({ type: 'varchar', nullable: true, length: 14 })
    cpfCnpj: string

    @Column({ type: 'varchar', nullable: false, length: 250 })
    email: string

    @Column({ type: 'varchar', nullable: false, length: 100 })
    senha: string

    @Column({ type: 'varchar', nullable: false, length: 14 })
    telefone: string

    @Column({ type: 'varchar', nullable: false })
    logo: string

    @Column({ type: 'boolean', nullable: false })
    active: boolean

    // Relacionamentos
    @OneToOne(() => Configuracao, (configuracao) => configuracao.trainer)
    @JoinColumn({name : 'configuracao_id'})
    configuracao: Configuracao

    @OneToMany(() => Agendamento, (agendamento) => agendamento.trainer)
    agendamentos: Agendamento[]

    @OneToMany(() => Cliente, (cliente) => cliente.trainer)
    clientes: Cliente[]

    @OneToMany(() => Pagamento, (pagamento) => pagamento.trainer)
    pagamentos: Pagamento[]

    @OneToMany(() => FichaTreino, (fichaTreino) => fichaTreino.criadoPor)
    fichasTreino: FichaTreino[]

    @OneToMany(() => Avaliacao, (avaliacao) => avaliacao.trainer)
    avaliacaos: Avaliacao[]

    @OneToMany(() => Questionario, (questionario) => questionario.trainer)
    questionarios: Questionario[]

    @OneToMany(() => TemplateQuestionario, (template) => template.trainer)
    templates: TemplateQuestionario[]

    @OneToMany(() => TipoDocumento, (tipoDocumento) => tipoDocumento.trainer)
    tiposDocumento: TipoDocumento[]

    @OneToMany(() => TipoAvaliacao, (tipoAvaliacao) => tipoAvaliacao.trainer)
    tiposAvaliacao: TipoAvaliacao[]
}
