class CalendarEventsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      calendar_events = user.calendar_events
    else
      calendar_events = CalendarEvent.all
    end
    render json: calendar_events, status: :ok
  end

  def show
    calendar_event = find_calendar_event
    render json: calendar_event, status: :ok
  end

  def create
    calendar_event = Calendar_event.create!(calendar_event_params)
    render json: calendar_event, status: :created
  end

  def destroy
    calendar_event = find_calendar_event 
    calendar_event.destroy
    head :no_content
  end

  private

  def invalid(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def not_found
    render json: { error: "Event not found" }, status: :not_found
  end

  def calendar_event_params
    params.permit(:name, :start, :end, :all_day, :user_id)
  end

  def find_calendar_event
    calendar_event = Calendar_events.find(params[:id])
  end

end
