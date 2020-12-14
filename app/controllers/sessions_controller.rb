class SessionsController < ApplicationController
    def create
      
        @account = Account.find_by(email: params[:account][:email])
        if @account && @account.valid_password?(params[:account][:password])
            
          login!
          render json: {
            logged_in: true,
            current: current_account, 
            account: @account
          }
        else
          render json: { 
            status: 401,
            errors: ['no such account', 'verify credentials and try again or signup']
          }
        end
      end
    def is_logged_in?
        if logged_in? && current_account
          render json: {
            logged_in: true,
            account: current_account
          }
        else
          render json: {
            logged_in: false,
            message: 'no such account'
          }
        end
      end
    def destroy
        logout!
        render json: {
          status: 200,
          logged_out: true
        }
      end
    private
    # def session_params
    #    params[:account] 
    #     # params.require(:account).permit(:email, :password)
    #   end
    end
  