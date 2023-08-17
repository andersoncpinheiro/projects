FactoryBot.define do
  factory :user do
    email { 'test@example.com' }
    password { '@Lcapone#1234' }
    # outros atributos que você precisar
  end
end