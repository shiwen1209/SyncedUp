class UpdatePd < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :password_digets, :password_digest
  end
end
