class DashboardController < ApplicationController
 include Pundit
    before_action :authenticate_user!
    before_action :authorize_moderator


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