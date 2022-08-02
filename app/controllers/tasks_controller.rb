class TasksController < ApplicationController
  
  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      tasks = user.tasks
    else 
      tasks = Task.all
    end
    render json: tasks, status: :ok
  end

  def show
    task = find_task
    render json: task, status: :ok
  end

  def create
    task = Task.create(task_params)
    render json: task, status: :created
  end

  def update
    task = find_task
    task.update(task_params)
    render json: task, status: :ok
  end

  def destroy
    task = find_task
    task.destroy
    head :no_content
  end

  private

  def task_params
    params.permit(:description, :checked, :priority, :task_list_id)
  end

  def find_task
    task = Task.find(params[:id])
  end


end
