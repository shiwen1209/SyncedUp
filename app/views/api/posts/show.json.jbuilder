
    json.extract! @post, :id, :body, :author_id, :created_at, :updated_at
    json.author_name @post.author.first_name
    json.author_headline @post.author.headline
