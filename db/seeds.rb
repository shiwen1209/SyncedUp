# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Like.delete_all
Comment.delete_all
Post.delete_all
Experience.delete_all
User.delete_all


user1 = User.create!(
                    "email": "banana", 
                    "password": "123456", 
                    "first_name": "Banana", 
                    "last_name": "Nana", 
                    "pronouns": "He/him",
                    "headline": "I'm a banana entrepreneur",
                    "about": "I produce and sell the best bananas",
                    "industry": "Agriculture",
                    "location_country": "United States",
                    "location_city": "Bakersfield"

                    )
user2 = User.create!(
                    "email": "orange", 
                    "password": "123456", 
                    "first_name": "Orange", 
                    "last_name": "O", 
                    "pronouns": "She/her",
                    "headline": "I'm a Orange entrepreneur",
                    "about": "I produce and sell the best Oranges",
                    "industry": "Agriculture",
                    "location_country": "United States",
                    "location_city": "Bakersfield"
                    )

user3 = User.create!(
                    "email": "kiwi", 
                    "password": "123456", 
                    "first_name": "Kiwi", 
                    "last_name": "K", 
                    "pronouns": "He/him",
                    "headline": "I'm a kiwi entrepreneur",
                    "about": "I produce and sell the best kiwis",
                    "industry": "Agriculture",
                    "location_country": "United States",
                    "location_city": "Bakersfield"
                    )

post1 = Post.create!("author_id": user1.id, "body": "today has been a hard day")
post2 = Post.create!("author_id": user1.id, "body": "another hard day at work")
post3 = Post.create!("author_id": user1.id, "body": "I need a vacation...")
post4 = Post.create!("author_id": user2.id, "body": "Our company is doing well")


comment1 = Comment.create!("body": "ditto", "post_id": post1.id, "commenter_id": user2.id)
comment2 = Comment.create!("body": "I like it", "post_id": post1.id, "commenter_id": user3.id)
comment3 = Comment.create!("body": "lolll", "post_id": post2.id, "commenter_id": user2.id)
comment4 = Comment.create!("body": "way to go", "post_id": post2.id, "commenter_id": user3.id)
comment5 = Comment.create!("body": "thanks!", "post_id": post2.id, "commenter_id": user1.id, "parent_comment_id": comment4.id)

exp1 = Experience.create!("user_id": user1.id, "title": "CEO", "company_name": "Banana Corp",
                        "start_date": "2017-11-03", "end_date": "2022-11-03", "exp_type": "work")

exp2 = Experience.create!("user_id": user1.id, "title": "VP of Strategy", "company_name": "Banana Corp",
                        "start_date": "2015-11-03", "end_date": "2017-11-03", "exp_type": "work")

exp3 = Experience.create!("user_id": user1.id, "title": "Analyst", "company_name": "Banana Corp",
                        "start_date": "2014-11-03", "end_date": "2015-11-03", "exp_type": "work")

exp4 = Experience.create!("user_id": user1.id, "title": "Master of Accounting", "company_name": "University of California, Davis",
                        "start_date": "2010-11-03", "end_date": "2014-11-03", "exp_type": "school")