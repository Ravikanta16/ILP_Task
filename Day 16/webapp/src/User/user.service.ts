import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userModel: typeof User) {}

    findUsers(){
        return this.userModel.findAll();
    }

    addUser(user: CreateUserDto){
        return this.userModel.create({...user});
    }

    async validateUser(username: string, password: string) {
        const user = await this.userModel.findOne({ where: {email:username} });
        if (user && user.password === password) {
            return user;
        }
        return null;
    }
}