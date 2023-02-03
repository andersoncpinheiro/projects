class Pessoa
    attr_accessor :nome, :email
end

class PessoaFisica < Pessoa
    attr_accessor :cpf

    def falar(texto)
        texto 
    end
end

class PessoaJuridica < Pessoa
    attr_accessor :cnpj

    def pagarfornecedores
        "Pagando Fornecedor"
    end
end        

puts "Pessoa=========================="
p1 = Pessoa.new
p1.nome = "Anderson"
p1.email = "andersonc_pinheiro@outlook.com"
puts p1.nome
puts p1.email


puts "PessoaFisica====================="
p2 = PessoaFisica.new
p2.nome = "Cesar"
p2.email = "email@email.com"
p2.cpf = "01900900921"

puts p2.nome
puts p2.email
puts p2.cpf
puts p2.falar("Hello")

puts "PessoaJuridica====================="
 p3 = PessoaJuridica.new
p3.nome = "casadosenhor"
p3.email = "empresa@email.com"
p3.cnpj = 990922992000100

puts p3.nome
puts p3.email
puts p3.cnpj
puts p3.pagarfornecedores