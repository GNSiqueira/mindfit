import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "./configuration";
import { Module } from "@nestjs/common";
import {QuestionarioModule} from "./modules/Questionario.module"
import {TagModule} from "./modules/Tag.module"
import {SerieModule} from "./modules/Serie.module"
import {AvaliacaoModule} from "./modules/Avaliacao.module"
import {EnderecoModule} from "./modules/Endereco.module"
import {MacroNutrienteModule} from "./modules/MacroNutriente.module"
import {CircunferenciaModule} from "./modules/Circunferencia.module"
import {AgendamentoModule} from "./modules/Agendamento.module"
import {PagamentoModule} from "./modules/Pagamento.module"
import {CategoriaAlimentoModule} from "./modules/CategoriaAlimento.module"
import {RespostaModule} from "./modules/Resposta.module"
import {ExercicioModule} from "./modules/Exercicio.module"
import {TipoAvaliacaoModule} from "./modules/TipoAvaliacao.module"
import {FotoAvaliacaoModule} from "./modules/FotoAvaliacao.module"
import {PerguntaModule} from "./modules/Pergunta.module"
import {TipoDocumentoModule} from "./modules/TipoDocumento.module"
import {DietaModule} from "./modules/Dieta.module"
import {ComposicaoCorporalModule} from "./modules/ComposicaoCorporal.module"
import {OpcaoPerguntaModule} from "./modules/OpcaoPergunta.module"
import {InformacaoModule} from "./modules/Informacao.module"
import {ClienteModule} from "./modules/Cliente.module"
import {DocumentoModule} from "./modules/Documento.module"
import {AlimentoModule} from "./modules/Alimento.module"
import {TemplateQuestionarioModule} from "./modules/TemplateQuestionario.module"
import {TagsClienteModule} from "./modules/TagsCliente.module"
import {MusculoModule} from "./modules/Musculo.module"
import {DivisaoTreinoModule} from "./modules/DivisaoTreino.module"
import {FichaTreinoModule} from "./modules/FichaTreino.module"
import {ConfiguracaoModule} from "./modules/Configuracao.module"
import {TrainerModule} from "./modules/Trainer.module"
import {ItemDaDietaModule} from "./modules/ItemDaDieta.module"
import {VideoAvaliacaoModule} from "./modules/VideoAvaliacao.module"

@Module({
    imports: [TypeOrmModule.forRoot(config),
        QuestionarioModule,
        TagModule,
        SerieModule,
        AvaliacaoModule,
        EnderecoModule,
        MacroNutrienteModule,
        CircunferenciaModule,
        AgendamentoModule,
        PagamentoModule,
        CategoriaAlimentoModule,
        RespostaModule,
        ExercicioModule,
        TipoAvaliacaoModule,
        FotoAvaliacaoModule,
        PerguntaModule,
        TipoDocumentoModule,
        DietaModule,
        ComposicaoCorporalModule,
        OpcaoPerguntaModule,
        InformacaoModule,
        ClienteModule,
        DocumentoModule,
        AlimentoModule,
        TemplateQuestionarioModule,
        TagsClienteModule,
        MusculoModule,
        DivisaoTreinoModule,
        FichaTreinoModule,
        ConfiguracaoModule,
        TrainerModule,
        ItemDaDietaModule,
        VideoAvaliacaoModule,
    ],
  })
  export class AppModule {}