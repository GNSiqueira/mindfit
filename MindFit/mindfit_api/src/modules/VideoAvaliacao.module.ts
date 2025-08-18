import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoAvaliacao } from "src/data/entities/VideoAvaliacao.entity";
import { AvaliacaoModule } from './Avaliacao.module'


@Module({
    imports: [
        TypeOrmModule.forFeature([VideoAvaliacao]),
        AvaliacaoModule,
    ],
    controllers: [],
    providers: [],
})
export class VideoAvaliacaoModule {}
