class UpdateConnections < ActiveRecord::Migration[5.2]
  def change
    add_column :connections, :user1_id, :integer, null: false, index: true
    add_column :connections, :user2_id, :integer, null: false, index: true
  end
end
