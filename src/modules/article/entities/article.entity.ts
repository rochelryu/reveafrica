//  Generated by entity-cli
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
  JoinTable,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Categorie } from '../../categorie/entities/categorie.entity';
import { Ressource } from '../../ressource/entities/ressource.entity';
import { Theme } from '../../theme/entities/theme.entity';

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @Column({ type: 'varchar' })
  titre: string;

  @ManyToMany(() => Categorie)
  @JoinTable()
  categories: Categorie[];

  @OneToMany((type) => Ressource, (ressource) => ressource.article)
  ressources: Ressource[];

  @ManyToMany(() => Theme)
  @JoinTable()
  themes: Theme[];
}
