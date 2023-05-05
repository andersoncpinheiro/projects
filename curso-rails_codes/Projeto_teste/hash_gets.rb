def cadastrar_registros
    campos = []
  
    puts "Quantos campos deseja cadastrar?"
    num_campos = gets.chomp.to_i
  
    num_campos.times do |i|
      puts "Informe o nome do campo"
      campos << gets.chomp.upcase
    end
  
    registros = []
  
    continuar_cadastrando = true
  
    while continuar_cadastrando do
      registro = {}
  
      campos.each do |campo|
        puts "Informe o #{campo} para cadastro"
        registro[campo] = gets.chomp.upcase
      end
  
      registros << registro
  
      puts "Registro adicionado: #{registro.inspect}"
      puts "Deseja cadastrar mais algum registro? Digite SIM ou NÃO"
      resposta = gets.chomp.upcase
 

      while resposta != "SIM" && resposta != "NÃO" do
        puts "Digite APENAS SIM ou NÃO"
        resposta = gets.chomp.upcase
        puts "Registros cadastrados:"
        puts registros.inspect
      break
      end


      continuar_cadastrando = (resposta == "SIM")


    end
  
    puts "Registros cadastrados:"
    puts registros.inspect
  end
  
  cadastrar_registros