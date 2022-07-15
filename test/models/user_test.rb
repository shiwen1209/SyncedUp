# == Schema Information
#
# Table name: users
#
#  id                :bigint           not null, primary key
#  email             :string           not null
#  pronouns          :string
#  headline          :string
#  about             :string
#  industry          :string
#  location_country  :string
#  location_postcode :string
#  location_city     :string
#  password_digest   :string           not null
#  session_token     :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  first_name        :string           not null
#  last_name         :string           not null
#  location_state    :string
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
