class DashboardPolicy < ApplicationPolicy
    attr_reader :user

    def initalize(user, _dashboard)
       @user = user 
    end

    def show?
     user && user.has_role?(:moderator)
    end




end