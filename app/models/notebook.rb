class Notebook < ApplicationRecord
  belongs_to :user
  has_many :notes

  validates :name, presence: { message: "Please add a name" }

end
