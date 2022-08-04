class UpdateTables < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :owner_id, :integer
    add_column :rooms, :name, :string
    add_column :messages, :room_id, :integer
  end
end
