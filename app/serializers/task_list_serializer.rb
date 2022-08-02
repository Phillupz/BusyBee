class TaskListSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  has_many :tasks
end
