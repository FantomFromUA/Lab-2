import { Injectable } from '@nestjs/common';
import { randomIntFromInterval } from 'src/utils/randomizer';
import { Comment } from './comment.interface';
import { CreateCommentDto } from './dto/create.comment.dto';
import { UpdateCommentDto } from './dto/update.comment.dto';

@Injectable()
export class CommentsService {
    private comments: Comment[] = [];
    
    findById(id: number) {
        const index = this.comments.findIndex(comment => comment.id === id);

        if (index < 0) throw new Error("Not found");

        return this.comments[index];
    }

    getAllPostComments(postId: number) {
        return this.comments.filter(comment => comment.postId === postId);
    }

    create(comment: CreateCommentDto) {
        const _comment: Comment = {
            id: randomIntFromInterval(1, 1000),
            createdAt: new Date().toDateString(),
            ...comment
        }

        this.comments.push(_comment);
        return _comment;
    }
    update(id: number, comment: UpdateCommentDto) {
        const index = this.comments.findIndex(comment => comment.id === id);

        if (index < 0) throw new Error("Not found");

        const _comment: Comment = {
            ...this.comments[index],
            ...comment
        }

        this.comments[index] = _comment;
        return _comment;
    }
    delete(id: number) {
        this.comments = this.comments.filter(comment => comment.id !== id);
    }
}