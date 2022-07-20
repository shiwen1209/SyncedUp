json.post do
    json.extract! @post, :id, :body, :author_id, :created_at, :updated_at
    json.author_firstname @post.author.first_name
    json.author_lastname @post.author.last_name
    json.author_pronouns @post.author.pronouns
    json.author_headline @post.author.headline
    json.author_headshot_url url_for(@post.author.headshot)
    json.num_comments @post.comments.count
    json.num_likes @post.likes.count
end

json.comments do 
    @post.comments.each do |comment|
        json.set! comment.id do 
            json.extract! comment, :id, :body, :post_id, :commenter_id, :parent_comment_id, :created_at, :updated_at
            json.commenter_firstname comment.commenter.first_name
            json.commenter_lastname comment.commenter.last_name
            json.commenter_pronouns comment.commenter.pronouns
            json.commenter_headline comment.commenter.headline
            json.num_likes comment.likes.count
        end
    end
end