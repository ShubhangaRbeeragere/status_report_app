import { Milestones } from './Milestone';
import {PrimaryGeneratedColumn,
    Entity,Column,OneToMany} from "typeorm";
import { SubAchievements } from './SubAchievements';

  @Entity()
  export class Achievements {
    
      @PrimaryGeneratedColumn()
      achievement_id! : number;

      @Column({ type: "varchar", nullable: false ,unique:true})
      achievement_name!: string;    
    
      @Column({ type: "varchar", nullable: false ,unique:false})
      content!: string;    
    
      @Column({ type: "date", nullable: false })
      date!: string;

      @OneToMany(type => Milestones, milestones => milestones.milestones_id_fk)
      milestones_key!: Milestones 

      @OneToMany(type => SubAchievements, subAchievements => subAchievements.sub_achievements_id_fk)
      sub_achievements_key!: SubAchievements 
  }
  
   

  