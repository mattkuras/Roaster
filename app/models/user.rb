class User < ApplicationRecord
    has_many :matches
    has_many :matched_users, through: :matches 

    attr_accessor :likes, :matches


    def like_or_match(user)
        if user.likes.find(user.id)
            like(user) 
            match(user)
            user.match(self)
        else 
            like(user)
        end
    end

    def like(user)
        @likes ||= [] 
        @likes << user         
    end

    def match(user)
        @matches ||= []
        @matches << user 
    end

end
