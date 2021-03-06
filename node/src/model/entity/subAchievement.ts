import { Achievements } from "./achievement";
import {
    PrimaryGeneratedColumn,
    Entity,
    Column,
    ManyToOne,
    JoinColumn,
} from "typeorm";

@Entity()
export class SubAchievements {
    @PrimaryGeneratedColumn()
    sub_achievements_id: number;

    @Column({ type: "varchar", nullable: false, unique: false })
    sub_achievement_name: string;

    @Column({ type: "varchar", nullable: false, unique: false })
    content: string;

    @ManyToOne(
        (type) => Achievements,
        (achievements) => achievements.sub_achievements_key
    )
    @JoinColumn()
    sub_achievements_id_fk: Achievements;
}
