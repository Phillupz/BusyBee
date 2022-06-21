class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :name
      t.text :text
      t.integer :notebook_id

      t.timestamps
    end
  end
end
