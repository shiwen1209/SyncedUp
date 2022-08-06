class UpdateMessage3 < ActiveRecord::Migration[5.2]
  def change
    add_index :messages, :room_id
  end
end
