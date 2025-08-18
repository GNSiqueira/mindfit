import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDocumento } from "src/data/entities/TipoDocumento.entity";
import { DocumentoModule } from './Documento.module'
import { TrainerModule } from './Trainer.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([TipoDocumento]),
        TrainerModule,
    ],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule],
})
export class TipoDocumentoModule {}
