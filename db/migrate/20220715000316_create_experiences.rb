class CreateExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.integer :user_id, null: false, index: true
      t.string :title, null: false
      t.string :company_name, null: false
      t.string :employment_type
      t.string :location
      t.date :start_date
      t.date :end_date
      t.boolean :current_job
      t.timestamps
    end

    add_column :users, :location_state, :string
  end
end
