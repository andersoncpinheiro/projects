Article.delete_all

user = User.first
text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."


puts 'Iniciando ...'

Category.all.each do |category|
    30.times do 
        Article.create!(
        title: "Article #{rand(10000)}",
        body: text,
        category_id: category.id,
        user_id: user.id,
        created_at: rand(365).days.ago
        )
    end
end
 
puts 'Terminou ...'