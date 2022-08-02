class CalendarEvent < ApplicationRecord
  belongs_to :user

  validates :title, presence: {message: "Please add an event name"}
  validates :start, presence: {message: "Please add a start date"}
  validates :end, presence: {message: "Please add an end date"}

end
