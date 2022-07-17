json.users do
    json.set! @user.id do 
        json.extract! @user, :id, :email, :first_name, :last_name, :pronouns, 
        :headline, :about, :industry, :location_country, :location_state, :location_city
        json.num_connections @user.connections.count
    end 
end

json.posts do 
    @user.posts.each do |post|
        json.set! post.id do 
            json.extract! post, :id, :body, :author_id, :created_at, :updated_at
            json.author_firstname post.author.first_name
            json.author_lastname post.author.last_name
            json.author_pronouns post.author.pronouns
            json.author_headline post.author.headline
            json.num_comments post.comments.count
            json.num_likes post.likes.count
        end
    end

    @user.connections.each do |user|
        user.posts.each do |post|
            json.set! post.id do 
                json.extract! post, :id, :body, :author_id, :created_at, :updated_at
                json.author_firstname post.author.first_name
                json.author_lastname post.author.last_name
                json.author_pronouns post.author.pronouns
                json.author_headline post.author.headline
                json.num_comments post.comments.count
                json.num_likes post.likes.count
            end
        end
    end 
end

json.comments do 
    @user.posts.each do |post|
        post.comments.each do |comment|
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

    @user.connections.each do |user|
        user.posts.each do |post|
            post.comments.each do |comment|
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
    end
end

json.likes do 
    @user.likes.each do |like|
        json.set! like.id do 
            json.extract! like, :user_id, :likable_id, :likable_type
        end
    end
end

json.experiences do
    @user.experiences.each do |exp|
        json.set! exp.id do 
            json.extract! exp, :id, :user_id, :title, :company_name, :employment_type,
            :location, :start_date, :end_date, :current_job, :exp_type,
            :created_at, :updated_at
        end
    end
end



