Rails.application.routes.draw do
  resources :categories
  root 'articles#index'
 
#consegue através do resources realizar todas as rotas, post, get, update, delete
  resources :articles
end
