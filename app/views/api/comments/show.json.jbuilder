json.comment do
    json.extract! @comment, :id, :body, :post_id, :commenter_id, :parent_comment_id, :created_at, :updated_at
    json.commenter_name @comment.commenter.first_name
    json.commenter_headline @comment.commenter.headline
end