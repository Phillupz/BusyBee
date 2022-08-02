Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # namespace :api do
    resources :app_data, only: [:index, :create]


    post "/signup", to: "users#create"
    get "/", to: "users#index" 
    get '/authorized_user', to: 'users#show'
    # Login / Logout Routes
    post '/login', to: 'sessions#login'
    delete '/logout', to: 'sessions#logout'

  resources :users, only: [:index, :show, :create, :update, :destroy]  
  resources :calendar_events, only: [:index, :show, :create, :update, :destroy]
  resources :notebooks, only: [:index, :show, :create, :update, :destroy]
  resources :notes, only: [:index, :show, :create, :update, :destroy]
  resources :task_lists, only: [:index, :show, :create, :destroy]
  resources :tasks, only: [:index, :show, :create, :update, :destroy]
  resources :app_data, only: [:index]
end
