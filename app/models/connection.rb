# == Schema Information
#
# Table name: connections
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#
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
