# == Schema Information
#
# Table name: rooms
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Room < ApplicationRecord

    has_many :messages,
        foreign_key: :room_id,
        class_name: :Message
end
