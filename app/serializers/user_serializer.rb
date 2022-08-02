class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username, :password_digest
  has_many :notebooks
  has_many :notes
  has_many :calendar_events
  has_many :tasks
  has_many :task_lists
end
