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
#
class Experience < ApplicationRecord
    validates :user_id, :title, :company_name, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
