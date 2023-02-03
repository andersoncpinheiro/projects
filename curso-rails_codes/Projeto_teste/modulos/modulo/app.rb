require_relative 'pagamento'

include Pagamento::Master
puts Pagamento::Master::pagando

include Pagamento #Instanciar a classe
p = Pagamento::Teste.new
puts p.time