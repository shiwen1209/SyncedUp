json.extract! user, :id, :email, :first_name, :last_name, :pronouns, :headline
if user.headshot.attached?
    json.headshot_url url_for(user.headshot)
end

           