module Api
    module V1
        class MatchesController < ApplicationController

            protect_from_forgery with: :null_session
             skip_before_action :verify_authenticity_token

            def create 
                
                @match = Match.new(match_params)

                if @match.save 
                    
                    render json: {
                        logged_in: true,
                        match: @match
                    }
                else
                    render json: { error: @match.errors.messages }, status: 422
                end
            end
            
            def show 
                match = Match.find_by(id: params[:id])
                if match 
                    render json: match
                else 
                    render json: {
                        status: 500,
                        errors: ['match not found']
                      }
                end
            end
        
            def index
                matches = Match.all
                render json: matches 
            end
        


            private 

            def match_params
                params.require(:match).permit(
                    :user_id,
                    :matched_user_id,
                )
            end

        end
    end
end