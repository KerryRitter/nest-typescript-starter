import { NestModule, MiddlewaresConsumer, Module } from 'nest.js';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    controllers: [ UsersController ],
    components: [
        { provide: 'UsersService', useClass: UsersService },
    ],
})
export class UsersModule implements NestModule {
}