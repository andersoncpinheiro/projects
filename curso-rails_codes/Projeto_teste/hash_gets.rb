def cadastrar_aluno

    userhash=Hash.new()
        
    puts "Informe o nome do titulo do campo1"
        @field1 = gets.chomp

    puts "Informe o nome do titulo do campo2"
        @field2 = gets.chomp

    puts "Informe o nome do titulo do campo3"
         @field3 = gets.chomp


    puts "Informe o "+@field1 +" do aluno"
        userhash[@field1]=gets.chomp

    puts "Informe a "+@field2 +" do aluno"
        userhash[@field2]=gets.chomp.to_i

    puts "Informe o "+@field3 +" do aluno M ou F"
        userhash[@field3]=gets.chomp
    
        puts userhash



end

cadastrar_aluno
