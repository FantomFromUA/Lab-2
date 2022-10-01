export class CreateCommentDto {
    constructor(readonly postId: number, readonly text: string) { }
}