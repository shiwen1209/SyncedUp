class Connection < ApplicationRecord
    validates :user1_id, :user2_id, presence: true 
    validates :user1_id, uniqueness: { scope: :user2_id }
    validates :user2_id, uniqueness: { scope: :user1_id }

    belongs_to :followee,
        foreign_key: :user1_id,
        class_name: :User

    belongs_to :follower,
        foreign_key: :user2_id,
        class_name: :User
end
