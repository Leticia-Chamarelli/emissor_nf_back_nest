import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './app/users/users.module';
import { AuthModule } from './auth/auth.module';
import { NotasFiscaisModule } from './app/notas_fiscais/notas_fiscais.module';
import { EstadosModule } from './app/estados/estados.module';
import { AtividadesModule } from './app/atividades/atividades.module';
import { TipoBairroModule } from './app/tipo_bairro/tipo_bairro.module';
import { TipoLogradouroModule } from './app/tipo_logradouro/tipo_logradouro.module';
import { MunicipiosModule } from './app/municipios/municipios.module';
import { PaisModule } from './app/pais/pais.module';
import { ExigibilidadeIssModule } from './app/exigibilidade_iss/exigibilidade_iss.module';
import { EmpresasModule } from './app/empresas/empresas.module';
import { TipoPessoaModule } from './app/tipo_pessoa/tipo_pessoa.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    } as TypeOrmModuleOptions),
    AtividadesModule,
    AuthModule,
    EmpresasModule,
    EstadosModule,
    ExigibilidadeIssModule,
    MunicipiosModule,
    NotasFiscaisModule,
    PaisModule,
    TipoBairroModule,
    TipoLogradouroModule,
    TipoPessoaModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
