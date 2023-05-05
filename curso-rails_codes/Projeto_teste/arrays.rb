# v = Array.new
# v.push(4)
# v.push("Jack")
# v.push("Rose")

#     puts v[2]



# v = Array.new
# v.push(4)
# v.push("Jack")
# v.each do |item|
#    puts item
# end

 
# v = Array.new
# v.push('feijão')
# v.push('macarrão')
# v.push('arroz') 


# v.each do |item|
#     #v = item
#     for item in 0..2 do
#         puts v
#     end
# end



#v = [1,3,5,6,7,8]
#
#v.each do |item|
#    puts item
#end

v = [[11,12,13],[21,22,23],[31,32,33]]
v.each do |externo|
    externo.each do |interno|
        puts interno
    end
end
