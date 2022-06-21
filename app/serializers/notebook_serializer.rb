class NotebookSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
end
