class UsersController < ApplicationController
  
  def show
    user = User.find(params[:id])
    render json: user
  end 

  def create
    user = User.create(user_params)
      if user.valid?
        render json: user, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def dashboard
    user = User.find_by(id: session[:user_id])
    render json: user, status: :ok
  end

  # def notes
  #   user = User.find_by(id: session[:user_id])
  #   render json: user, status: :ok
  # end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :username, :password, :password_confirmation)
  end

end
