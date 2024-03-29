json.comment do
    json.extract! @comment, :id, :body, :post_id, :commenter_id, :parent_comment_id, :created_at, :updated_at
    json.commenter_firstname @comment.commenter.first_name
    json.commenter_lastname @comment.commenter.last_name
    json.commenter_pronouns @comment.commenter.pronouns
    json.commenter_headline @comment.commenter.headline
    if @comment.commenter.headshot.attached?
        json.author_headshot_url url_for(@comment.commenter.headshot)
    end
    json.num_likes @comment.likes.count
    if current_user
        json.current_user_like current_user.likes.to_a.any?{|like| like.likable_type == "Comment" && like.likable_id == @comment.id}
    end
end