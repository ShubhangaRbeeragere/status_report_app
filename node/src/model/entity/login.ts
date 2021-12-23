import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm"

@Entity()
export default class Login{
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column({type: "varchar", length: 200, unique: true, nullable: false})
    username: string;

    @Column({type: "varchar", length: 200, unique: false, nullable: false})
    password: string;
}