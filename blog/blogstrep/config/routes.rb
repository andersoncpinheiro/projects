Rails.application.routes.draw do
  devise_for :users
  resources :categories
  root 'articles#index'
  get 'dashboard', to: 'dashboard#index', as: 'dashboard'
#consegue através do resources realizar todas as rotas, post, get, update, delete
  resources :articles do
    resources :comments, only: %i[create destroy]
  end

  resources :categories, except: [:show]  
end
