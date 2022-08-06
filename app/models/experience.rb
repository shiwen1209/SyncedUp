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

require 'date'

class Experience < ApplicationRecord
    validates :user_id, :title, :company_name, presence: true
    validates :start_date, :end_date, presence: true
    validate :start_end_dates

    after_initialize :ensure_current_job

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    def start_end_dates
        current_time = DateTime.now
        if end_date > current_time || start_date > current_time
            errors.add :end_date, "start or end date cannot be in the future"
        elsif end_date < start_date
            errors.add :end_date, "end date must be after start date"
        end
    end

    def ensure_current_job
        self.current_job ||= false
    end
end
