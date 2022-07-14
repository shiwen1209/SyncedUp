json.users do
    json.set! @user.id do 
        json.extract! @user, :id, :email, :first_name, :last_name, :pronouns, 
        :headline, :about, :industry, :location_country, :location_city
    end 
end

json.posts do 
    @user.posts.each do |post|
        json.set! post.id do 
            json.extract! post, :id, :body, :author_id, :created_at, :updated_at
            json.author_name post.author.first_name
            json.author_headline post.author.headline
        end
    end
end

json.comments do 
    @user.posts.each do |post|
        post.comments.each do |comment|
            json.set! comment.id do 
                json.extract! comment, :id, :body, :post_id, :commenter_id, :parent_comment_id, :created_at, :updated_at
                json.commenter_name comment.commenter.first_name
                json.commenter_headline comment.commenter.headline
            end
        end
    end
end

