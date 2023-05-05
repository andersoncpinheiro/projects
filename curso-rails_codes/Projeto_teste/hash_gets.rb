def cadastrar_registros
    campos = []
  
    puts "Quantos campos deseja cadastrar?"
    num_campos = gets.chomp.to_i
  
    num_campos.times do |i|
      puts "Informe o nome do campo #{i+1}"
      campos << gets.chomp
    end
  
    registros = []
  
    continuar_cadastrando = true
  
    while continuar_cadastrando do
      registro = {}
  
      campos.each do |campo|
        puts "Informe o #{campo} do aluno"
        registro[campo] = gets.chomp
      end
  
      registros << registro
  
      puts "Registro adicionado: #{registro.inspect}"
      puts "Deseja cadastrar MAIS algum registro? Digite SIM ou NÃO"
      resposta = gets.chomp
  
      continuar_cadastrando = (resposta == "SIM")
    end
  
    puts "Registros cadastrados:"
    puts registros.inspect
  end
  
  cadastrar_registros