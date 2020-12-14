Rails.application.routes.draw do
  devise_for :accounts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'home#index'
  get '/accounts', to: 'swipe#index'
  post '/like', to: 'swipe#like'
  post '/dislike', to: 'swipe#dislike'
  post 'login', to: 'sessions#create'

  get '*path', to: 'home#index', via: :all

end
