import { Module } from '@nestjs/common';
import { TypeThemeService } from './type-theme.service';

@Module({
  providers: [TypeThemeService]
})
export class TypeThemeModule { }
