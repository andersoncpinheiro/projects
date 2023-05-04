puts "Digite seu nome"
nome = gets.chomp
puts "O seu nome é: #{nome}"

puts "==============================="
puts "Com o inspect : #{nome.inspect}"

puts "================================="
puts "Digite seu salário"
#Pode ser aplicado a coercão, é quando se muda o tipo do valor da variavel, no caso abaixo .to_f , integer seria to float
sal = gets.chomp.to_f

puts nome + " Seu salário atualizado é : " + (sal * 1.10).to_s
