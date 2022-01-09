import { Achievements } from './Achievements';
import {PrimaryGeneratedColumn,
    Entity,Column,ManyToOne,JoinColumn} from "typeorm";

  @Entity()
  export class Milestones {
    
      @PrimaryGeneratedColumn()
      milestone_id! : number;

      @Column({ type: "varchar", nullable: false ,unique:true})
      title!: string;    
    
      @Column({ type: "varchar", nullable: false ,unique:false})
      content!: string;   
      
      @ManyToOne(type => Achievements, achievements => achievements.milestones_key)
      @JoinColumn()
      milestones_id_fk!: Achievements;
  }
  
   