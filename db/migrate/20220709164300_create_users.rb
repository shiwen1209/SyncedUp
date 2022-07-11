class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: {unique: true}
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :pronouns
      t.string :headline
      t.string :about
      t.string :industry
      t.string :location_country
      t.string :location_postcode
      t.string :location_city
      t.string :password_digets, null: false
      t.string :session_token, null: false, index: {unique: true}
      t.timestamps
    end
  end
end
