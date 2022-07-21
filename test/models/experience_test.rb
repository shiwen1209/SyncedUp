# == Schema Information
#
# Table name: experiences
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  title           :string           not null
#  company_name    :string           not null
#  employment_type :string
#  location        :string
#  start_date      :date
#  end_date        :date
#  current_job     :boolean
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  exp_type        :string           not null
#
require 'test_helper'

class ExperienceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
