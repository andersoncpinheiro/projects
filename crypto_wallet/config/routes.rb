Rails.application.routes.draw do
  get 'welcome/index'
  resources :coins
  #resources allows to create 7 new routes, to created a crud experience  
  
  root to: "welcome#index"
  
  get '/inicio', to: 'welcome#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
