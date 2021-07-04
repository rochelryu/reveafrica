import { Module } from '@nestjs/common';
import { CategorieService } from './categorie.service';

@Module({
  providers: [CategorieService]
})
export class CategorieModule { }
