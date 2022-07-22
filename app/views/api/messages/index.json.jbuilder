
    if current_user
        json.set! current_user.id do 
            json.extract! current_user, :id, :email, :first_name, :last_name, :pronouns, :headline
            if current_user.headshot.attached?
                json.headshot_url url_for(current_user.headshot)
            end
        end
    end
    
    current_user.senders.each do |user|
        json.set! user.id do 
            json.extract! user, :id, :email, :first_name, :last_name, :pronouns, :headline
            if user.headshot.attached?
                json.headshot_url url_for(user.headshot)
            end
        end
    end
