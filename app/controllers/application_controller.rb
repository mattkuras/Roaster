class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    # protect_from_forgery with: :exception
 
    helper_method :login!, :logged_in?, :current_account, :authorized_account?, :logout!

    def login!
      session[:account_id] = @account.id
    end
    def logged_in?
      !!session[:account_id]
    end
    def current_account
      @current_account ||= Account.find(session[:account_id]) if session[:account_id]
    end
     def authorized_account?
       @account == current_account
     end
     def logout!
       session.clear
     end
     
  end