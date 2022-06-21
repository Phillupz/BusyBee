class CalendarEventSerializer < ActiveModel::Serializer
  attributes :id, :name, :start, :end, :all_day, :user_id
end
