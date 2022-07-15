class UpdateExperience < ActiveRecord::Migration[5.2]
  def change
    add_column :experiences, :exp_type, :string, null: false
  end
end
