dogs = ['Scooby Doo', 'Rex', 'Clifford']

# dogs.each do |dog|
#   puts dog
# end

# lambda == named block
dog_lambda = lambda do |dog| puts dog end

# dogs.each &dog_lambda

def higher_order &anything
  anything.call 'Dioji'
end

higher_order &dog_lambda
