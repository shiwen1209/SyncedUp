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
class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :first_name, :last_name, presence: true
    validates :first_name, :last_name, length: {maximum: 30}
    validates :email, length: {maximum: 50}
    validates :password, length: {minimum:6}, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token
    before_validation :ensure_headshot

      has_many :posts,
        foreign_key: :author_id,
        class_name: :Post,
        dependent: :destroy
      
      has_many :comments, 
        foreign_key: :commenter_id,
        class_name: :Comment,
        dependent: :destroy

      has_many :likes,
        foreign_key: :user_id,
        class_name: :Like,
        dependent: :destroy

      has_many :experiences,
        foreign_key: :user_id,
        class_name: :Experience,
        dependent: :destroy

      has_many :connects,
        foreign_key: :user1_id,
        class_name: :Connection,
        dependent: :destroy
      
      has_many :connections,
        through: :connects,
        source: :follower,
        dependent: :destroy
      
      has_one_attached :headshot,
      dependent: :destroy

  def self.find_by_credentials(email, password)
     user = User.find_by(email: email)
     if user
        if user.is_password?(password)
            return user
        end 
     end
     return nil
  end
  
  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end
 
  def is_password?(password)
       BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    return self.session_token
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_headshot
    self.headshot.attach(io: File.open("app/assets/images/default.jpeg"), filename: 'default.jpeg')
  end

end
