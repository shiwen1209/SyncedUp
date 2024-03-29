json.user do
        json.extract! @user, :id, :email, :first_name, :last_name, :pronouns, 
        :headline, :about, :industry, :location_country, :location_state, :location_city
        json.num_connections @user.connections.count
        json.connectionIds @user.connections.pluck(:id)
        if @user.headshot.attached?
            json.headshot_url url_for(@user.headshot)
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
            if post.author.headshot.attached?
                json.author_headshot_url url_for(post.author.headshot)
            end
            if post.image.attached?
                json.image_url url_for(post.image)
            end
            json.num_comments post.comments.count
            json.num_likes post.likes.count
            if current_user
                json.current_user_like current_user.likes.to_a.any?{|like| like.likable_type == "Post" && like.likable_id == post.id}
            end
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
                if post.author.headshot.attached?
                    json.author_headshot_url url_for(post.author.headshot)
                end
                if post.image.attached?
                    json.image_url url_for(post.image)
                end
                json.num_comments post.comments.count
                json.num_likes post.likes.count
                if current_user
                    json.current_user_like current_user.likes.to_a.any?{|like| like.likable_type == "Post" && like.likable_id == post.id}
                end
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
                if comment.commenter.headshot.attached?
                    json.author_headshot_url url_for(comment.commenter.headshot)
                end
                json.num_likes comment.likes.count
                if current_user
                    json.current_user_like current_user.likes.to_a.any?{|like| like.likable_type == "Comment" && like.likable_id == comment.id}
                end
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
                    if comment.commenter.headshot.attached?
                        json.author_headshot_url url_for(comment.commenter.headshot)
                    end
                    json.num_likes comment.likes.count
                    if current_user
                        json.current_user_like current_user.likes.to_a.any?{|like| like.likable_type == "Comment" && like.likable_id == comment.id}
                    end
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

json.connections do
    @user.connects.each do |connect|
        user = connect.follower
        mirrorConnection = user.connects.find_by("user2_id": @user.id)

        json.set! user.id do 
            json.extract! user, :id, :email, :first_name, :last_name, :pronouns, 
            :headline
            if user.headshot.attached?
                json.headshot_url url_for(user.headshot)
            end
            json.connected_at connect.created_at
            json.connectionId connect.id
            json.mirrorConnectionId mirrorConnection.id
        end
    end
end


