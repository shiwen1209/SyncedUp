Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json}  do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :destroy, :show, :update]
    resources :comments, only: [:create, :destroy, :show, :update]
    resources :experiences, only: [:create, :destroy, :show, :update]
  end
end
