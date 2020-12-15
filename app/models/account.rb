class Account < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

has_many :likes 

  def like(user)
    new_like = Like.new
    new_like.account_id = self.id 
    new_like.liked_account_id = user.id 
    new_like.save
  end

  def accounts_that_liked_me
    likes = Like.where(liked_account_id: self.id)
    liker_ids = likes.map(&:account_id)
    accounts = Account.where(id: liker_ids)
  end


end
