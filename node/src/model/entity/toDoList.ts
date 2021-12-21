import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"

Entity()
export default class ToDoList{
    @PrimaryGeneratedColumn()
    list_id: number;

    @Column({type: "varchar", length: 200, unique: false, nullable: false})
    title: string;

    @Column({type: "date", unique: false, nullable: false})
    date: string;
}