class TasksController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid
  
  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      tasks = user.tasks
      filtered_tasks = tasks.filter do |e|
        if e.priority == true
          e
        end
      end
      tasks = filtered_tasks[...5].sort_by(&:created_at)
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
    render json: note, status: :created
  end

  def update
    task = find_task
    task.update(task_params)
    render json: note, status: 204
  end

  def destroy
    task = find_task
    task.destroy
    head :no_content
  end

  private

  def invalid(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def not_found
    render json: { error: "Task not found" }, status: :not_found
  end

  def task_params
    params.permit(:description, :checked, :priority, :task_list_id)
  end

  def find_task
    task = Task.find(params[:id])
  end


end
