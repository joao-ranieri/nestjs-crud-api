import { UpdateResult } from 'typeorm';
import { UserEntity } from '../../../entities/user.entity';
import { Injectable } from '@nestjs/common';
import UserRepository from '../repository/user.repository';

@Injectable()
export class UserService {

    private userRepository = new UserRepository();

    constructor(
        // @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) {}
    
    findAll() {
        return this.userRepository.findAll();
    }
    
    findById(userId: number) {
        return this.userRepository.findById(userId);
    }

    save(user: UserEntity) {
        return this.userRepository.save(user);
    }

    update(user: UserEntity) {
        return this.userRepository.update(user);
    }

    delete(userId: number) {
        return this.userRepository.delete(userId);
    }

    // métodos exclusivos para login :: começo
    findByUsername(username: string) {
        return this.userRepository.findByUsername(username);
    }
    // métodos exclusivos para login :: fim
}
