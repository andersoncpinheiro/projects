def  pegaX 
	puts "Digite um número entre 0 e 5"
	@x = gets.chomp.to_i

while @x > 5 
	puts 'Digite um número maior que 5!'
	pegaX
end
	return @x
end

def pegaY
	puts "Digite outro número entre 6 e 10"
	@y = gets.chomp.to_i

while @y <= 5 || @y > 10  
	puts 'Digite um número maior que 5 e menor que 10!'
	pegaY
end
	return @y
end

def result
while @x <= @y 	
	puts 'Contando...' + @x.to_s
	@x += 1
end
end

pegaX
pegaY
result


