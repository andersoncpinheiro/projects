#uso do objeto simbolo para demonstrar a criação de novos objetos, que devem ser evitados.
puts "Anderson".object_id
puts "Anderson".object_id

puts"==================="
puts :"Anderson".object_id
puts :"Anderson".object_id

#Concatenação 
#concatenar com + deve ser evitada por essa cria novos objetos, use o <<
nome = "anderson"
puts "Nome digitado é: " + nome
puts nome.object_id
puts "==========="
nome = "anderson"
puts "Nome digitado é: " << nome
puts nome.object_id