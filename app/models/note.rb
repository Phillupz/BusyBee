class Note < ApplicationRecord
  belongs_to :notebook

  validates :name, presence: { message: "Must have a title" }

end
