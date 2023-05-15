class EstudoMetodoClasse
    def self.registro
      loop do
        puts "Acerte um número entre 0 e 10"
        num = gets.chomp.to_i
  
        if (num < 0 || num > 10)
          puts "Digite um número válido entre 0 e 10"
        else
          $nalvo = rand(0..10)
          resposta = num
  
          while resposta != $nalvo do
            puts "Digite novamente"
            num = gets.chomp.to_i
            resposta = num
          end
  
          puts "Acertou miserável!! O número sorteado foi: #{$nalvo}"
          break
        end
      end
    end
  end
  
  EstudoMetodoClasse.registro