import { Controller, Get, Param, Post, Put, Delete, Body, ParseIntPipe, HttpCode, HttpStatus,/* Request, Response,*/ Query, Header, Redirect } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Request as IRequest, Response as IResponse } from 'express';
import { PostService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private readonly postsService: PostService) {
    }

    @Get()
    findAll() {
        return this.postsService.findAll();
    }

    @Get(":id")
    getById(@Param('id', new ParseIntPipe()) id: number) {
        return this.postsService.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: CreatePostDto) {
        return this.postsService.create(body)
    }

    @Put(":id")
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Param('id', new ParseIntPipe()) id: number, @Body() body: UpdatePostDto) {
        return this.postsService.update(id, body)
    }

    @Delete(":id")
    delete(@Param('id', new ParseIntPipe()) id: number) {
        return this.postsService.delete(id)
    }
}
