# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)

# spinner = TTY::Spinner.new("[:spinner] Cadastrando moedas no banco...", format: :pulse_2)
#     spinner.auto_spin

# coins = [
#     {description:"Bitcoin",
#         acronym:"BTC",
#         url_image:"https://cdn-icons-png.flaticon.com/512/825/825540.png"},
#     { description:"Ethereum",
#         acronym:"ETH",
#         url_image:"https://d33wubrfki0l68.cloudfront.net/10c3a479c1fbfbdb6a62952ba1b1d797d8e6abf4/dc925/static/6b935ac0e6194247347855dc3d328e83/cef8b/eth-diamond-black.png"},
#     {description:"Dollar",
#         acronym:"USD",
#         url_image:"https://www.freepnglogos.com/uploads/dollar-sign-png/dollar-sign-shia-channel-24.png"
#     },
#     {description:"Real",
#         acronym:"BRL",
#         url_image:"https://cdn-icons-png.flaticon.com/512/32/32665.png"
#     },
#     {   description:"Doge Coin",
#         acronym:"DOGE",
#         url_image:"https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=024"
#     },
#     {description:"Dash Coin",
#         acronym:"DASH",
#         url_image:"https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/dash_dashcoin-512.png"
#     }
#     ]

# coins.each do |coin|
#     Coin.find_or_create_by(coin)
# end

# 20.times do 
#     spinner.spin
#     sleep(0.1)
# end
# puts spinner.success("(Concluido!)")