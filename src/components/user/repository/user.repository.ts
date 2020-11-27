import { UserEntity } from '../../../entities/user.entity';
import { getRepository, UpdateResult } from "typeorm";

class UserRepository {

    public async save(user: UserEntity) {
        const repository = getRepository(UserEntity);
        return await repository.save(repository.create(user))
            .catch((e) => {
                throw new Error(e);
            });
    }

    public async update(user: UserEntity) {
        const repository = getRepository(UserEntity);        
        return await repository.update(user.id, repository.create(user))
            .catch((e) => {
                throw new Error(e);
            });
    }

    public async delete(id: number) {
        const repository = getRepository(UserEntity);
        return await repository.delete(id)
            .catch((e) => {
                throw new Error(e);
            });
    }

    public async findById(id: number) {
        const repository = getRepository(UserEntity);
        return await repository.findOne({
                where: {
                    id: id
                }
            })
            .catch((e) => {
                throw new Error(e);
            });
    }

    public async findByUsername(username: string) {
        const repository = getRepository(UserEntity);
        return await repository.findOne({
            where: {
                username: username
            },
            select: ['id', 'username', 'password', 'profile']
        }).catch((e) => {
            throw new Error(e);
        });
    }

    public async findOne(id: number): Promise<UserEntity> {
        const repository = getRepository(UserEntity);
        return await repository.findOne({
                where: {
                    id: id
                }
            })
            .catch((e) => {
                throw new Error(e);
            });
    }

    public async findAll(): Promise<UserEntity[]> {
        const repository = getRepository(UserEntity);
        return await repository.find()
            .catch((e) => {
                throw new Error(e);
            });
    }
    
}

export default UserRepository;