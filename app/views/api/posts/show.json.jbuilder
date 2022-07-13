json.post do
    json.extract! @post, :id, :body, :author_id, :created_at, :updated_at
    json.author_name @post.author.first_name
    json.author_headline @post.author.headline
end

json.comments do 
    @post.comments.each do |comment|
        json.set! comment.id do 
            json.extract! comment, :id, :body, :post_id, :commenter_id, :parent_comment_id, :created_at, :updated_at
            json.commenter_name comment.commenter.first_name
            json.commenter_headline comment.commenter.headline
        end
    end
end