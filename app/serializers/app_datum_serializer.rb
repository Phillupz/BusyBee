class AppDatumSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :text
end
