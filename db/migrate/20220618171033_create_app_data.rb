class CreateAppData < ActiveRecord::Migration[6.1]
  def change
    create_table :app_data do |t|
      t.string :image
      t.string :title
      t.text :text

      t.timestamps
    end
  end
end
