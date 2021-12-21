import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm"
import ToDoList from "./toDoList";

Entity()
export default class ToDoContent{
    @PrimaryGeneratedColumn()
    content_id: number;

    @Column({type: "varchar", length: 200, unique: false, nullable: false})
    content: string;

    @ManyToOne(type => ToDoList, toDoList => toDoList.contentKey)
    @JoinColumn()
    list_id_fk: ToDoList;
}