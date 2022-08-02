class CalendarEventsController < ApplicationController

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
    calendar_event = CalendarEvent.create(calendar_event_params)
    render json: calendar_event, status: :created
  end

  def update
    calendar_event = find_calendar_event
    calendar_event.update(calendar_event_params)
    render json: calendar_event, status: :ok
  end

  def destroy
    calendar_event = find_calendar_event 
    calendar_event.destroy
    head :no_content
  end

  private

  def not_found
    render json: { error: "Event not found" }, status: :not_found
  end

  def calendar_event_params
    params.permit(:title, :start, :end, :user_id)
  end

  def find_calendar_event
    calendar_event = CalendarEvent.find(params[:id])
  end

end
