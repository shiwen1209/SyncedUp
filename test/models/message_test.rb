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
require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
