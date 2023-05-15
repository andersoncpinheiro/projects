require_relative 'pagamento'

include Pagamento

puts "Digite a bandeira do Cartão de Crédito"
b = gets.chomp

puts "Digite o nome do titular do cartão"
a = gets.chomp

puts "Digite o número do cartão"
n = gets.chomp

puts "Digite o valor da compra"
v = gets.chomp

puts Pagamento::pagar(a, b, n, v)
