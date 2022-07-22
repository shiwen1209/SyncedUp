class Updatemsgtable3 < ActiveRecord::Migration[5.2]
  def change
     add_column :messages, :read_status, :boolean, null: false
  end
end
