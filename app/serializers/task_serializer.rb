class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :checked, :priority, :task_list_id, :created_at
  

end
