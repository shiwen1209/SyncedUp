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
Connection.delete_all
User.delete_all

user1 = User.create!(
                    "email": "banana", 
                    "password": "123456", 
                    "first_name": "Banana", 
                    "last_name": "Nana", 
                    "pronouns": "She/her",
                    "headline": "I'm a banana entrepreneur",
                    "about": "I produce and sell the best bananas",
                    "industry": "Agriculture",
                    "location_country": "United States",
                    "location_state": "CA",
                    "location_city": "Bakersfield"
                    )
user1.headshot.attach(io: File.open("app/assets/images/banana.png"), filename: 'banana.png')


user2 = User.create!(
                    "email": "bill_gates@gmail.com", 
                    "password": "123456", 
                    "first_name": "Bill", 
                    "last_name": "Gates",
                    "headline": "Co-chair, Bill & Melinda Gates Foundation",
                    "about": "Co-chair of the Bill & Melinda Gates Foundation. Founder of Breakthrough Energy. Co-founder of Microsoft. Voracious reader. Avid traveler. Active blogger.",
                    "industry": "Technology",
                    "location_country": "United States",
                    "location_state": "WA",
                    "location_city": "Seattle"
                    )
user2.headshot.attach(io: File.open("app/assets/images/billgates.jpeg"), filename: 'billgates.jpeg')

user3 = User.create!(
                    "email": "steve_jobs@gmail.com", 
                    "password": "123456", 
                    "first_name": "Steve", 
                    "last_name": "Jobs", 
                    "headline": "American entrepreneur",
                    "about": "Steven Jobs was an American entrepreneur, industrial designer, business magnate, media proprietor, and investor",
                    "industry": "Technology",
                    "location_country": "United States",
                    "location_state": "CA",
                    "location_city": "Palo Alto"
                    )
user3.headshot.attach(io: File.open("app/assets/images/stevejobs.png"), filename: 'stevejobs.png')

user4 = User.create!(
                    "email": "warren_buffett@gmail.com", 
                    "password": "123456", 
                    "first_name": "Warren", 
                    "last_name": "Buffett", 
                    "headline": "American business magnate, investor, and philanthropist",
                    "about": "Currently the chairman and CEO of Berkshire Hathaway. One of the most successful investors in the world and world's eighth-wealthiest person",
                    "industry": "Investment",
                    "location_country": "United States",
                    "location_state": "NE",
                    "location_city": "Omaha"
                    )
user4.headshot.attach(io: File.open("app/assets/images/warrenbuffett.webp"), filename: 'warrenbuffett.webp')

user5 = User.create!(
                    "email": "jack_ma@gmail.com", 
                    "password": "123456", 
                    "first_name": "Jack", 
                    "last_name": "Ma", 
                    "headline": "Chinese business magnate, investor and philanthropist",
                    "about": "Co-founder and former executive chairman of Alibaba Group, a multinational technology conglomerate",
                    "industry": "Investment",
                    "location_country": "China",
                    "location_state": "Zhejiang",
                    "location_city": "Hangzhou"
                    )
user5.headshot.attach(io: File.open("app/assets/images/jackma.jpeg"), filename: 'jackma.jpeg')

user6 = User.create!(
                    "email": "elon_musk@gmail.com", 
                    "password": "123456", 
                    "first_name": "Elon", 
                    "last_name": "Musk", 
                    "headline": "Founder, CEO, and Chief Engineer at SpaceX",
                    "about": "A business magnate and investor. Founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and Product Architect of Tesla, Inc",
                    "industry": "Investment",
                    "location_country": "United States",
                    "location_state": "TX",
                    "location_city": "Austin"
                    )
user6.headshot.attach(io: File.open("app/assets/images/elonmusk.png"), filename: 'elonmusk.png')

user7 = User.create!(
                    "email": "barak_obama@gmail.com", 
                    "password": "123456", 
                    "first_name": "Barak", 
                    "last_name": "Obama", 
                    "headline": "Former Potus",
                    "about": "Served as the 44th president of the United States from 2009 to 2017. A member of the Democratic Party, the first African-American president of the United States",
                    "industry": "politics",
                    "location_country": "United States",
                    "location_state": "DC",
                    "location_city": "Washington"
                    )
user7.headshot.attach(io: File.open("app/assets/images/barackobama.jpeg"), filename: 'barackobama.jpeg')

user8 = User.create!(
                    "email": "queen_elizabeth@gmail.com", 
                    "password": "123456", 
                    "first_name": "Elizabeth", 
                    "last_name": "Windsor", 
                    "headline": "Queen of the United Kingdom",
                    "about": "Queen of the United Kingdom and 14 other Commonwealth realms.",
                    "industry": "Monachy",
                    "location_country": "United Kingdom",
                    "location_state": "London",
                    "location_city": "England"
                    )
user8.headshot.attach(io: File.open("app/assets/images/queenelizabeth.png"), filename: 'queenelizabeth.png')


user9 = User.create!(
                    "email": "Angela_Merkel@gmail.com", 
                    "password": "123456", 
                    "first_name": "Angela", 
                    "last_name": "Merkel", 
                    "headline": "Retired German politician and scientist",
                    "about": "Served as the chancellor of Germany from 2005 to 2021. A member of the Christian Democratic Union (CDU), previously served as leader of the Opposition from 2002 to 2005 and as Leader of the Christian Democratic Union from 2000 to 2018",
                    "industry": "Politics",
                    "location_country": "Germany",
                    "location_state": "",
                    "location_city": "Berlin"
                    )
user9.headshot.attach(io: File.open("app/assets/images/angelamerkel.jpeg"), filename: 'angelamerkel.jpeg')

user10 = User.create!(
                    "email": "lisa_su@gmail.com", 
                    "password": "123456", 
                    "first_name": "Lisa", 
                    "last_name": "Su", 
                    "headline": "President, CEO and Chair of AMD",
                    "about": "I am the President and CEO at Advanced Micro Devices, a Fortune 500 technology leader. Since joining AMD, we have successfully executed a transformation of our strategy, market focus, and product execution.My passion is in leading global technology teams to bring great products and solutions to market. ",
                    "industry": "Technology",
                    "location_country": "United States",
                    "location_state": "Austin",
                    "location_city": "Texas"
                    )
user10.headshot.attach(io: File.open("app/assets/images/lisasu.png"), filename: 'lisasu.png')


post1 = Post.create!("author_id": user1.id, "body": "Learning how to correctly pronounce someone's name goes a long way toward helping them feel respected and valued. Share some methods on how you build an inclusive community")

post2 = Post.create!("author_id": user5.id, "body": "Intelligent people need a fool to lead them. When the team's all a bunch of scientists, it is best to have a peasant lead the way. His way of thinking is different. It's easier to win if you have people seeing things from different perspectives.")

post3 = Post.create!("author_id": user1.id, "body": "This quarter's banana production is looking good!!")
post3.image.attach(io: File.open("app/assets/images/bananas.jpeg"), filename: 'bananas.jpeg')

post4 = Post.create!("author_id": user2.id, "body": "As I was putting together my list of suggested reading for the summer, I realized that the topics they cover sound pretty heavy for vacation reading. There are: 1. The Power, by Naomi Alderman, 2. Why We’re Polarized, by Ezra Klein, 3.The Lincoln Highway, by Amor Towles, 4. The Ministry for the Future, by Kim Stanley Robinson, 5. How the World Really Works, by Vaclav Smil")
post4.image.attach(io: File.open("app/assets/images/bill_books.jpeg"), filename: 'bill_books.jpeg')

post5 = Post.create!("author_id": user3.id, "body": "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.")
post5.image.attach(io: File.open("app/assets/images/steve_stanford.jpeg"), filename: 'steve_stanford.jpeg')

post6 = Post.create!("author_id": user4.id, "body": "The most important of the Warren Buffett quotes: “Rule No. 1 is never lose money. Rule No. 2 is never forget Rule No. 1.")
post6.image.attach(io: File.open("app/assets/images/warrent_quote.png"), filename: 'warrent_quote.png')

post7 = Post.create!("author_id": user6.id, "body": "Jk!!!")
post7.image.attach(io: File.open("app/assets/images/elon-musk-twitter.webp"), filename: 'elon-musk-twitter.webp')

post8 = Post.create!("author_id": user6.id, "body": "I'm going to buy twitter for 40 billion!!!")
post8.image.attach(io: File.open("app/assets/images/Twitter-Elon-musk.jpeg"), filename: 'Twitter-Elon-musk.jpeg')

post10 = Post.create!("author_id": user1.id, "body": "There's always money in the banana stand")
post10.image.attach(io: File.open("app/assets/images/banana_stand.webp"), filename: 'banana_stand.webp')



comment1 = Comment.create!("body": "Money has no utility to me beyond a certain point.", "post_id": post10.id, "commenter_id": user2.id)
comment2 = Comment.create!("body": "I was worth over $100 million when I was 25", "post_id": post10.id, "commenter_id": user3.id)
comment3 = Comment.create!("body": "Rule No. 1 is never lose money. Rule No. 2 is never forget Rule No. 1", "post_id": post10.id, "commenter_id": user4.id)
comment4 = Comment.create!("body": "Elon, get it together!", "post_id": post7.id, "commenter_id": user2.id)
comment5 = Comment.create!("body": "hmmmmmm...", "post_id": post7.id, "commenter_id": user4.id)


Like.create!(user_id: user2.id, likable_id: post10.id, likable_type: 'Post')
Like.create!(user_id: user3.id, likable_id: post10.id, likable_type: 'Post')
Like.create!(user_id: user4.id, likable_id: post10.id, likable_type: 'Post')
Like.create!(user_id: user5.id, likable_id: post10.id, likable_type: 'Post')
Like.create!(user_id: user6.id, likable_id: post10.id, likable_type: 'Post')
Like.create!(user_id: user1.id, likable_id: post10.id, likable_type: 'Post')
Like.create!(user_id: user2.id, likable_id: comment2.id, likable_type: 'Comment')
Like.create!(user_id: user4.id, likable_id: comment2.id, likable_type: 'Comment')
Like.create!(user_id: user2.id, likable_id: post8.id, likable_type: 'Post')
Like.create!(user_id: user3.id, likable_id: post8.id, likable_type: 'Post')
Like.create!(user_id: user4.id, likable_id: post8.id, likable_type: 'Post')
Like.create!(user_id: user3.id, likable_id: comment1.id, likable_type: 'Comment')
Like.create!(user_id: user1.id, likable_id: post6.id, likable_type: 'Post')
Like.create!(user_id: user1.id, likable_id: post4.id, likable_type: 'Post')

Connection.create!(user1_id: user1.id, user2_id: user2.id)
Connection.create!(user1_id: user2.id, user2_id: user1.id)
Connection.create!(user1_id: user1.id, user2_id: user3.id)
Connection.create!(user1_id: user3.id, user2_id: user1.id)
Connection.create!(user1_id: user1.id, user2_id: user4.id)
Connection.create!(user1_id: user4.id, user2_id: user1.id)
Connection.create!(user1_id: user2.id, user2_id: user4.id)
Connection.create!(user1_id: user4.id, user2_id: user2.id)
Connection.create!(user1_id: user3.id, user2_id: user4.id)
Connection.create!(user1_id: user4.id, user2_id: user3.id)



Experience.create!("user_id": user1.id, "title": "CEO", "company_name": "Banana Corp",
                        "employment_type": "full-time",
                        "start_date": "2017-11-03", "end_date": "2022-11-03", "exp_type": "work")

Experience.create!("user_id": user1.id, "title": "VP of Strategy", "company_name": "Banana Corp",
                        "employment_type": "full-time",
                        "start_date": "2015-11-03", "end_date": "2017-11-03", "exp_type": "work")

Experience.create!("user_id": user1.id, "title": "Analyst", "company_name": "Banana Corp",
                        "employment_type": "full-time",
                        "start_date": "2014-11-03", "end_date": "2015-11-03", "exp_type": "work")

Experience.create!("user_id": user1.id, "title": "Master of Banana Business", "company_name": "University of California, Davis",
                        "start_date": "2010-11-03", "end_date": "2014-11-03", "exp_type": "school")


Experience.create!("user_id": user2.id, "title": "Co-chair", "company_name": "Bill & Melinda Gates Foundation",
                        "employment_type": "full-time",
                        "start_date": "2000-01-01", "end_date": "2022-07-03", "exp_type": "work")

Experience.create!("user_id": user2.id, "title": "Founder", "company_name": "Breakthrough Energy",
                        "employment_type": "full-time",
                        "start_date": "2015-11-03", "end_date": "2022-07-03", "exp_type": "work")

Experience.create!("user_id": user2.id, "title": "Cofounder", "company_name": "Microsoft",
                        "employment_type": "full-time",
                        "start_date": "1975-11-03", "end_date": "2022-07-03", "exp_type": "work")

Experience.create!("user_id": user2.id, "title": "Bachelor of Science", "company_name": "Harvard University",
                        "start_date": "1973-09-01", "end_date": "1975-06-01", "exp_type": "school")
