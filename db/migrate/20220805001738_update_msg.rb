class UpdateMsg < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :recipient_id
    add_column :messages, :recipient_id, :integer
  end
end
