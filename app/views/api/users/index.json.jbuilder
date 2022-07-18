json.people do
    @users.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :email, :first_name, :last_name, :pronouns, 
            :headline
        end
    end
end
