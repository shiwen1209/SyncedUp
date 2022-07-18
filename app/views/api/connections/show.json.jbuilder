json.connect do 
    json.extract! @connection, :id, :user1_id, :user2_id, :created_at, :updated_at
end

json.connection do 
    user = @connection.follower
    mirrorConnection = user.connects.find_by("user2_id": @connection.followee.id)
    if mirrorConnection
        mirrorId = mirrorConnection.id
    end 
    json.extract! user, :id, :email, :first_name, :last_name, :pronouns, :headline
    json.connected_at @connection.created_at
    json.connectionId @connection.id
    json.mirrorConnectionId mirrorId
end
