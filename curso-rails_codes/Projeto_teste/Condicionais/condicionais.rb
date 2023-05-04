#if
puts "Digite seu número"

x = gets.chomp.to_i

if x >= 2
   puts "x é maior que 2"

else
    puts "X é menor que 2"
end



#if else Ternario
#puts "Digite seu primeiro número"
#x = gets.chomp.to_i

#puts "Digite o segundo número"
#y = gets.chomp.to_i

#x >= y ? ( puts "#{x} é maior que #{y}")  : ( puts "#{x}  é menor que #{y}") 




#unless
#puts "Digite seu número"
#x = gets.chomp.to_i
#unless x >= 2
#    puts "O número selecionado #{x} é menor que 2"
#else
#    puts "O número selecionado #{x} é maior que 2"
#end

#case
# puts "Digite sua idade"
# idade = gets.chomp.to_i
#
# case idade
# when 0..2
#     puts "Baby"
# when 3..12
#     puts "Criança"
# when 12..18
#     puts "Adolescente"
# when 19..30
#     puts "Jovem"
# when 30..60
#     puts "Adulto"
# else
#     puts "Velho"
# end
