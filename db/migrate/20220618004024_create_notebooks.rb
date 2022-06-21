class CreateNotebooks < ActiveRecord::Migration[6.1]
  def change
    create_table :notebooks do |t|
      t.string :name
      t.integer :user_id

      t.timestamps
    end
  end
end
