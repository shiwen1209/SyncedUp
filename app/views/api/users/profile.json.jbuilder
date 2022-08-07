json.user do
        json.extract! @user, :id, :email, :first_name, :last_name, :pronouns, 
        :headline, :about, :industry, :location_country, :location_state, :location_city
        json.num_connections @user.connections.count
        json.connectionIds @user.connections.pluck(:id)
        if @user.headshot.attached?
            json.headshot_url url_for(@user.headshot)
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


