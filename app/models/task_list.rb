class TaskList < ApplicationRecord
  belongs_to :user
  has_many :tasks

  validates :name, presence: { message: "Please add a name" }

end
