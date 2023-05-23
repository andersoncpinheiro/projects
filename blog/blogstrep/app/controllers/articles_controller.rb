class ArticlesController < ApplicationController
  before_action :authenticate_user!, except: %i[index show]
  before_action :set_article, only: %i[show edit update destroy]

  
  def index
    @highlights = Article.desc_order.first(3)
    
    current_page = (params[:page] || 1).to_i
    highlight_ids = @highlights.pluck(:id).join(',')
    
    #gem kaminari(PAGINACAO) permite visualizar 2 registros por pagina
    @articles = Article.without_highlights(highlight_ids)
    .desc_order
    .page(current_page)
  end
  def show
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
    @article =Article.find(params[:id])
    authorize @article
    end

  def article_params
    params.require(:article).permit(:title, :body, :category_id )
  end
end
