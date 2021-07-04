import { Module } from '@nestjs/common';
import { RessourceService } from './ressource.service';

@Module({
  providers: [RessourceService]
})
export class RessourceModule { }
