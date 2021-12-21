import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm"
import { TodoComment } from "typescript";
import ToDoContent from "./toDoContent";
import toDoContent from "./toDoContent"

Entity()
export default class ToDoList{
    @PrimaryGeneratedColumn()
    list_id: number;

    @Column({type: "varchar", length: 200, unique: false, nullable: false})
    title: string;

    @Column({type: "date", unique: false, nullable: false})
    date: string;

    @OneToMany(type => ToDoContent, toDoContent => toDoContent.list_id_fk)
    contentKey: TodoComment; 
}