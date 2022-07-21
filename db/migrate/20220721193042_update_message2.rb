class UpdateMessage2 < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :room_id, :integer, index: true
  end
end
