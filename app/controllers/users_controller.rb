class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize_user, except: [:create]

    # GET "/users"
    def index 
        render json: User.all
    end 

    # GET "/users/:id"
    def show
        current_user = User.find_by(id: session[:current_user])
        render json: current_user
    end 

    def create
        user = User.create!(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
      end
    end


  private

  def render_unprocessable_entity_response(invalid)
    render json: { errors: ["Invalid entries"] }, status: :unprocessable_entity 
  end


  def user_params
    params.permit(:first_name, :last_name, :email, :username, :password, :password_confirmation)
  end

end
