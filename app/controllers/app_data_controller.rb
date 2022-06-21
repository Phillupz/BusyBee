class AppDataController < ApplicationController

  def index 
    data = AppDatum.all 
    render json: data, status: :ok
  end
  
end
