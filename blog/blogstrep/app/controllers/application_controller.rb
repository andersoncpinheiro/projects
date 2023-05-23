class ApplicationController < ActionController::Base
<<<<<<< HEAD
    include Pundit

    rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
    
    private

    def user_not_authorized
      flash[:alert] = "You are not authorized to perform this action."
      redirect_back(fallback_location: root_path)
    end
=======
        include Pundit::Authorization

        rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

        private
      
        def user_not_authorized
          flash[:alert] = "You are not authorized to perform this action."
          redirect_back(fallback_location: root_path)
        end
      
>>>>>>> origin
end
