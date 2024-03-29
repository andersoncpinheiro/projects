class ArticlesController < ApplicationController
  include Paginable
 
  before_action :authenticate_user!, except: %i[index show]
  before_action :set_article, only: %i[edit update destroy]
  before_action :set_categories, only: %i[new create edit update]
  
  def index

    @categories = Category.sorted                

    category = @categories.select { |c| c.name == params[:category]}[0] if params[:category].present?

    @highlights = Article.includes(:category, :user)
                         .filter_by_category(category)
                         .filter_by_archive(params[:month_year])
                         .desc_order
                         .first(3)
    highlight_ids = @highlights.pluck(:id).join(',')

    #gem kaminari(PAGINACAO) permite visualizar 2 registros por pagina
    @articles = Article.includes(:category, :user)
                       .without_highlights(highlight_ids)
                       .filter_by_category(category)
                       .filter_by_archive(params[:month_year])
                       .desc_order
                       .page(current_page)


    @archives = Article.group_by_month(:created_at, format: '%B %Y').count
  end
  
  
  def show
    @article = Article.includes(comments: :user).find(params[:id])
    authorize @article

  end

  def new
    @article = current_user.articles.new
  end
  
  def create
    @article = current_user.articles.new(article_params)
      if @article.save
      redirect_to @article, notice: 'Article was succesfully created.'
    else
      render :new      
    end
  end

  def edit
  end

  def update
    if @article.update(article_params)
      redirect_to @article, notice: 'Article was succesfully updated.'
    else
      render :edit      
    end
  end

  def destroy
    @article.destroy

    redirect_to root_path, notice: 'Article was succesfully detroyed'
  end
 
  private

  def set_article
    @article = Article.find(params[:id])
    authorize @article
    end

  def article_params
    params.require(:article).permit(:title, :body, :image, :category_id )
  end

  def set_categories
    @categories = Category.sorted
  end


end
