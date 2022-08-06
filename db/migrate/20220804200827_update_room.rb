class UpdateRoom < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :owners, :string, array: true, default: []
  end
end
