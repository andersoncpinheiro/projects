require 'rails_helper'

RSpec.describe DashboardController, type: :controller do
  describe "GET #index" do
    context "when user is authenticated" do
      it "renders the index template" do
        # Simule a autenticação do usuário
        allow(controller).to receive(:authenticate_user!).and_return(true)

        get :index
        expect(response).to render_template(:index)
      end

      it "assigns the necessary instance variables" do
        # Simule a autenticação do usuário
        allow(controller).to receive(:authenticate_user!).and_return(true)

        get :index
        expect(assigns(:article_counts_by_day)).not_to be_nil
        expect(assigns(:categories)).not_to be_nil
        expect(assigns(:article_counts_with_empty_categories)).not_to be_nil
      end
    end

    context "when user is not authenticated" do
      it "redirects to the sign-in page" do
        get :index
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end

  describe "GET #show" do
    it "authorizes the show action" do
      user = FactoryBot.create(:user)  # Crie o usuário aqui
      sign_in user

      get :show
      expect(response).to be_successful
    end
  end
end
