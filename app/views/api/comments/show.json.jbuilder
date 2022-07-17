json.comment do
    json.extract! @comment, :id, :body, :post_id, :commenter_id, :parent_comment_id, :created_at, :updated_at
    json.author_firstname @comment.commenter.first_name
    json.author_lastname @comment.commenter.last_name
    json.author_pronouns @comment.commenter.pronouns
    json.commenter_headline @comment.commenter.headline
    json.num_likes @comment.likes.count
end