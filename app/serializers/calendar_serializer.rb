class CalendarEventSerializer < ActiveModel::Serializer
  attributes :id, :title, :start, :end, :all_day, :user_id
end
