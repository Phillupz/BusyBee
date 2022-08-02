class CreateCalendarEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :calendar_events do |t|
      t.string :title
      t.string :start
      t.string :end
      t.boolean :all_day
      t.integer :user_id

      t.timestamps
    end
  end
end
