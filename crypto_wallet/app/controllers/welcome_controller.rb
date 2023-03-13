class WelcomeController < ApplicationController
def index
    cookies[:curso] = "Curso Ruby - Anderson Pinheiro"
    @nome = params[:nome]
    @curso = params[:curso]
end
end