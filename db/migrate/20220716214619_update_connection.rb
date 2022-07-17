class UpdateConnection < ActiveRecord::Migration[5.2]
  def change
    add_index :connections, :user1_id
    add_index :connections, :user2_id
  end
end
