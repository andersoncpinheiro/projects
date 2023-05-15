require_relative 'pagamento'
include Pagamento

# o uso de 2 pontos 2 pontos, sigfica
#que ao acessar o modulo Pagamento poderá ser resgatado
# o valor de tudo que tiver dentro de class Visa
p = Pagamento::Visa.new

puts p.pagando
