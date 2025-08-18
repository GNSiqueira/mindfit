import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Documento } from "src/data/entities/Documento.entity";
import { TipoDocumentoModule } from './TipoDocumento.module'
import { ClienteModule } from './Cliente.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([Documento]),
        ClienteModule,
    ],
    controllers: [],
    providers: [],
})
export class DocumentoModule {}
