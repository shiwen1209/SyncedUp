json.user do
    if current_user

            json.extract! current_user, :id, :email, :first_name, :last_name, :pronouns, 
            :headline, :about, :industry, :location_country, :location_state, :location_city
            json.num_connections current_user.connections.count
            json.connectionIds current_user.connections.pluck(:id)
    end 
end

json.people do
    @users.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :email, :first_name, :last_name, :pronouns, 
            :headline
        end
    end
end
