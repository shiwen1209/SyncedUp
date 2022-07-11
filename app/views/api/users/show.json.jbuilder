json.users do 
    json.extract! @user, :id, :email, :first_name, :last_name
end

json.posts do 
    @user.posts.each do |post|
        json.set! post.id do 
            json.extract! post, :id, :body, :author_id, :created_at, :updated_at
        end
    end
end