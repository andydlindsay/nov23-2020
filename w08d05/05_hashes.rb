# key/value pairs
# hash === JS object

# user = {
#   "first_name" => 'Alice',
#   "last_name" => 'Cooper'
# }
# # hash rocket
# puts user['first_name']

# user = {
#   :first_name => 'Alice',
#   :last_name => 'Cooper'
# }

# p user[:first_name]

user = {
  first_name: 'Alice',
  last_name: 'Cooper'
}
puts user[:first_name]

my_key = 'last_name'
puts user[my_key.to_sym]



# 
