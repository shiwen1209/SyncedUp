class Api::PostsController < ApplicationController

    def create
        @post = Post.new(post_params)
        if @post.save
            render "api/users/show"
        end
    end

    def delete
        
    end

    def post_params
        params.require(:post).permit(:body, :author_id)
    end
end
