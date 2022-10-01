import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe,
Post, Put, Query } from '@nestjs/common';
import { CommentsService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
import { UpdateCommentDto } from './dto/update.comment.dto';
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Get(":id")
    getById(@Param('id', new ParseIntPipe()) id: number) {
        return this.commentsService.findById(id);
    }

    @Get()
    getAllPostComments(@Query('postId', new ParseIntPipe()) postId: number) {
        return this.commentsService.getAllPostComments(postId);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: CreateCommentDto) {
        return this.commentsService.create(body);
    }

    @Put(":id")
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Param('id', new ParseIntPipe()) id: number, @Body() body:
UpdateCommentDto) {
        return this.commentsService.update(id, body);
    }

    @Delete(":id")
    delete(@Param('id', new ParseIntPipe()) id: number) {
        return this.commentsService.delete(id);
    }
}