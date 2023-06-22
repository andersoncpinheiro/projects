class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    @qtd_cat_frontEnd = ActiveRecord::Base.connection.execute("SELECT * FROM qtd_articles_categories_frontEnd").to_a
    @qtd_geral_articles = ActiveRecord::Base.connection.execute("SELECT * FROM articles_general_qtd").to_a
  end
end