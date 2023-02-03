class Pessoa
    def initialize(cont = 1)
        cont.times do |i|
            i = i + 1
        puts "inicializando... #{i}"
        end
    end


    def falar(nome)
        "Olá #{nome}"
    end
end        

p1 = Pessoa.new(5)
puts p1.falar("Anderson")
puts "==============================="

p2 = Pessoa.new
puts p2.falar("César")