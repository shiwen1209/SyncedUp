class Api::CommentsController < ApplicationController


    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment.update(comment_params)
            render :show
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        render :show
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])

        if @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end


    def comment_params
        params.require(:comment).permit(:body, :post_id, :commenter_id, :parent_comment_id)
    end
end
