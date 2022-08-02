class NotebookSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  has_many :notes
end
