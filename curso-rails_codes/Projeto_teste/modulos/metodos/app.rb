require_relative 'pagamento'

include Pagamento

puts "Digite a bandeira do Cartão de Crédito"
b = gets.chomp

puts "Digite o número do cartão"
n = gets.chomp

puts "Digite o valor da compra"
v = gets.chomp

puts pagar(b, n, v)
