
# global variable
$global_var = 15

# Defining first class
class FirstClass
#definindo o metodo criado
   def print_global_variable
      puts "Global variable in FirstClass is #{$global_var}"
   end
end

# Defining second Class
class SecondClass
   def print_global_variable
      puts "Global variable in SecondClass is #{$global_var}"
   end
end

# Creating object
firstclassobj = FirstClass.new
firstclassobj.print_global_variable

# Creating another object
secondclassobj = SecondClass.new
secondclassobj.print_global_variable

