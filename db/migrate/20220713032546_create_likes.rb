class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.references :likable, polymorphic: true, index: true

      t.timestamps
    end

    add_index :likes, [:user_id, :likable_type, :likable_id], unique: true
  end
end
