class DashboardController < ApplicationController
 include Pundit
    before_action :authenticate_user!
    before_action :authorize_moderator

    def index
      @article_counts_by_day = Article.group_by_day(:created_at).count

      @categories = Category.pluck(:name)
      @article_counts_by_category = Article.joins(:category).group('categories.name').count
      article_counts_with_empty_categories = {}

      @categories.each do |category|
        count = @article_counts_by_category[category] || 0
        article_counts_with_empty_categories[category] = count
      end
      # DashboardController
     @article_counts_with_empty_categories = article_counts_with_empty_categories


    end

  def show
    authorize :dashboard, :show?
  end

  private 


  def authorize_moderator
      authorize :dashboard, :show?
  end


  def user_not_authorized
     flash[:alert] = "You not authorized to access this page"
     redirect_to(root_path)
  end
end