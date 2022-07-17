json.like do
    json.extract! @like, :user_id, :likable_id, :likable_type
end

json.like_id @like.id
