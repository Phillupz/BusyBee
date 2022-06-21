class NoteSerializer < ActiveModel::Serializer
  attributes :id, :name, :text
end
