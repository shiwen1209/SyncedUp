
    @messages.each do |message|
        json.set! message.id do
            json.extract! message, :id, :sender_id, :recipient_id, :content
            json.sender_id message.sender.id
            json.sender_firstname message.sender.first_name
            json.sender_lastname message.sender.last_name
            json.sender_headline message.sender.headline
            if message.sender.headshot.attached?
                json.sender_headshot_url url_for(message.sender.headshot)
            end
        end
    end

