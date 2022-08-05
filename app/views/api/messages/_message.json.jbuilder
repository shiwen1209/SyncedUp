  json.extract! message, 
    :id, 
    :content, 
    :sender_id, 
    :room_id, 
    :created_at
  
json.sender_first_name message.sender.first_name
json.sender_last_name message.sender.last_name
json.sender_headshot_url url_for(message.sender.headshot)