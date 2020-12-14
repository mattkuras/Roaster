# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# users = User.create([
#     {name: 'matt'},
#     {name: 'zak'},
#     {name: 'dzugan'},
#     {name: 'sully'},
#     {name: 'tara'},
#     {name: 'lou'},
#     {name: 'jess'},
#     {name: 'paige'},
#     {name: 'hannah'},
# ])

accounts = Account.create([
    {email: 'mattk@gmail.com', password:'123456', first_name: 'matt', last_name: 'kuras'},
    {email: 'loub@gmail.com', password:'123456', first_name: 'lou', last_name: 'bayles'},
    {email: 'anthonydk@gmail.com', password:'123456', first_name: 'anthony', last_name: 'dzugan'},
    {email: 'coreyz@gmail.com', password:'123456', first_name: 'corey', last_name: 'zytko'},
    {email: 'hannahd@gmail.com', password:'123456', first_name: 'hannah', last_name: 'dematteo'},
    {email: 'taraj@gmail.com', password:'123456', first_name: 'tara', last_name: 'jaaf'},
    {email: 'carlyp@gmail.com', password:'123456', first_name: 'carly', last_name: 'phan'},
    {email: 'theresak@gmail.com', password:'123456', first_name: 'theresa', last_name: 'kuras'}
])