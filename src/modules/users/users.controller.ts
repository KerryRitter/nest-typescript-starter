import * as express from 'express';
import { UsersService } from './users.service';
import { Controller, Response, Body, Param, Get, Post, HttpStatus } from 'nest.js';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService) {}

    @Get()
    public async getAllUsers(@Response() res: express.Response) {
        const users = await this.usersService.getAllUsers();
        res.status(HttpStatus.OK).json(users);
    }

    @Get('/:id')
    public async getUser(@Response() res: express.Response, @Param('id') id) {
        const user = await this.usersService.getUser(id);
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    public async addUser(@Response() res: express.Response, @Body('user') user) {
        const msg = await this.usersService.getUser(user);
        res.status(HttpStatus.CREATED).json(msg);
    }
}