Rails.application.routes.draw do
  devise_for :users
  resources :categories
  root 'articles#index'
 
#consegue através do resources realizar todas as rotas, post, get, update, delete
  resources :articles
  resources :categories, except: [:show]  
end
