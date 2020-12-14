class SwipeController < ApplicationController

    # skip_before_action :verify_authenticity_token

    def index 
        @accounts = Account.all 
        render json: @accounts
    end
    
    def like
        
    end

    def dislike
        render json: 'dislike sent!'
    end
end