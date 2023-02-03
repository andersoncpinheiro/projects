module Processamento
    module GetName
        def insertName
          puts "Digite seu nome"  
          $name = gets
        end
       
    end      

    class PrintName
        def returnName
            "Seu nome lindo digitado é... #{$name}"
        end
    end

end