class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false, index: true
      t.integer :recipient_id, null: false, index: true
      t.string :content, null: false
      t.timestamps
    end
  end
end
