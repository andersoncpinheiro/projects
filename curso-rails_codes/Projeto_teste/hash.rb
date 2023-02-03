# hash each
# episodes = { 1 => 'Days Gone Bye', 2 => 'Guts', 3 => 'Tell It to the Frogs', 4 => 'Vatos' }

# episodes.each do |episode|
#  puts 'episódio: ' + episode[0].to_s + ' título: ' + episode[1]
# end

# Delete Hash
# episodes = { 1 => 'Days Gone Bye', 2 => 'Guts', 3 => 'Tell It to the Frogs', 4 => 'Vatos' }

# puts episodes.length
# episodes.delete(2)
# puts episodes

# Store Hash
episodes = { 1 => 'Days Gone Bye', 2 => 'Guts', 3 => 'Tell It to the Frogs', 4 => 'Vatos' }

puts "Qtd de episodios #{episodes.length}"
episodes.delete(2)
puts episodes
puts "Episodio adicionado : #{episodes.store(2, 'GOOTS')}"
puts "Informa seu o hash possui a informação digitada: #{episodes.has_value?('Days Gone Bye')}"

episodes.sort.each do |episode|
  puts "episódio: #{episode[0]} título: #{episode[1]}"
  puts "episodes.classe é uma #{episodes.class}"
end
