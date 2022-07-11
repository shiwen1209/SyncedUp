# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.delete_all
User.delete_all


user1 = User.create!(
                    "email": "banana", 
                    "password": "123456", 
                    "first_name": "Banana", 
                    "last_name": "Nana", 
                    "pronouns": "He/him",
                    "headline": "I'm a banana entrepreneur",
                    "about": "I produce and sell the best bananas"
                    )
user2 = User.create!(
                    "email": "orange", 
                    "password": "123456", 
                    "first_name": "Orange", 
                    "last_name": "O", 
                    "pronouns": "She/her",
                    "headline": "I'm a Orange entrepreneur",
                    "about": "I produce and sell the best Oranges"
                    )

user3 = User.create!(
                    "email": "kiwi", 
                    "password": "123456", 
                    "first_name": "Kiwi", 
                    "last_name": "K", 
                    "pronouns": "He/him",
                    "headline": "I'm a kiwi entrepreneur",
                    "about": "I produce and sell the best kiwis"
                    )

post1 = Post.create!("author_id": user1.id, "body": "today has been a hard day")
post2 = Post.create!("author_id": user1.id, "body": "another hard day at work")
post3 = Post.create!("author_id": user1.id, "body": "I need a vacation...")
post4 = Post.create!("author_id": user2.id, "body": "Our company is doing well")