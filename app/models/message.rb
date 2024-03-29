# == Schema Information
#
# Table name: messages
#
#  id           :bigint           not null, primary key
#  sender_id    :integer          not null
#  recipient_id :integer          not null
#  content      :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  read_status  :boolean          not null
#  room_id      :integer
#
class Message < ApplicationRecord
    validates :sender_id, :content, presence: true

    belongs_to :sender, 
        foreign_key: :sender_id,
        class_name: :User

    belongs_to :room,
        foreign_key: :room_id,
        class_name: :Room



end
