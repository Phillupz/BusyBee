class TaskListsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :invalid

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      task_lists = user.task_lists
    else
      task_lists = Task.all
    end
    render json: task_lists, status: :ok
  end

  def create
    task_list = TaskList.create(task_list_params)
    render json: task_list, status: :created
  end

  def destroy
    task_list = find_task_list
    task_list.destroy
    head :no_content
  end

  private

  def invalid(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def find_task_list
    task_list = TaskList.find(params[:id])
  end

  def task_list_params
    params.permit(:name, :user_id)
  end

end
