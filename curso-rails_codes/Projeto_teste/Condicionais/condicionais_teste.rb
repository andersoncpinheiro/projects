puts "Digite o primeiro número"
x = gets.chomp.to_i

puts "Digite o segundo número"
y = gets.chomp.to_i

x >= y ? ( puts "#{x} é maior que #{y}")  : ( puts "#{x}  é menor que #{y}")
