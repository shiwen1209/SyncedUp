# == Schema Information
#
# Table name: rooms
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  owner_id   :integer
#  name       :string
#
class Room < ApplicationRecord
    belongs_to :owner, foreign_key: :owner_id, class_name: :User
    has_many :messages, dependent: :destroy

end
