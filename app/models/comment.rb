# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :string           not null
#  post_id           :integer          not null
#  commenter_id      :integer          not null
#  parent_comment_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, :post_id, :commenter_id, presence: true

    belongs_to :commenter,
        foreign_key: :commenter_id,
        class_name: :User

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post

    belongs_to :parent_comment,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        optional: true

    has_many :replies,
        foreign_key: :parent_comment_id,
        class_name: :Comment
    
    # has_one :parent_commenter,
    #     through: :parent_comment,
    #     source: :commenter

    has_many :likes, as: :likable
end
