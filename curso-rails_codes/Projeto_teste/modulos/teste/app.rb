require_relative 'process'
include Processamento::GetName
Processamento::GetName::insertName


include Processamento
p = Processamento::PrintName.new
puts p.returnName


