import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DefaultAdminModule } from 'nestjs-admin';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './modules/article/article.module';
import { ThemeModule } from './modules/theme/theme.module';
import { TypeThemeModule } from './modules/type-theme/type-theme.module';
import { CategorieModule } from './modules/categorie/categorie.module';
import { RessourceModule } from './modules/ressource/ressource.module';
import { ConfigModule } from '@nestjs/config';
import { FrontsideModule } from './frontside/frontside.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_DIALECT as unknown as 'mysql' | 'mariadb',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: process.env.NODE_ENV !== 'production',

      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    // DefaultAdminModule,
    ArticleModule,
    ThemeModule,
    TypeThemeModule,
    CategorieModule,
    RessourceModule,
    FrontsideModule,
  ],
  providers: [AppService],
})
export class AppModule {}
