import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export class User extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    declare id: number;
    @Column(DataType.STRING)
    name: string;
    @Column
    email: string;
    @Column
    password: string;
}