module Pagamento
    def pagar(nome_titular, bandeira, numero, valor)
        "#{nome_titular} \n pagando o cartão com #{bandeira}\n número cartão #{numero}\n Valor R$ #{valor} "
    end
end