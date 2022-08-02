class NoteSerializer < ActiveModel::Serializer
  attributes :id, :name, :text, :notebook_id
end
