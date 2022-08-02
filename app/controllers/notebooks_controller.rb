class NotebooksController < ApplicationController

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      notebooks = user.notebooks
    else 
      notebooks = Notebook.all
    end
    render json: notebooks, status: :ok
  end

  def show
    notebook = Notebook.find(params[:id])
    render json: notebook
  end

  def create
    notebook = Notebook.create(notebook_params)
    render json: notebook, satus: :created
  end

  def destroy
    notebook = find_notebook
    notebook.destroy
    head :no_content
  end

  private

  def notebook_params
    params.permit(:name, :user_id)
  end

end
