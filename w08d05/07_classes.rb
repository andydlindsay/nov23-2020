# class Car {
#   constructor(name, phoneNumber) {
#     this.name = name
#   }
#   get name() {
#     return this.name
#   }
    # set name(newName) {
    #   this.name = newName
    # } 
    # myObj.name = 'Frank'

# }

class Car
  def initialize color, make, year
    @color = color
    @make = make
    @year = year
    @my_arr = []
  end

  # attr_reader :make
  # attr_writer :make

  attr_accessor :year, :make, :color, :my_arr

  # def color
  #   @color
  # end

  # def color=new_color
  #   @color = new_color
  # end
end

# const myCar = new Car()
my_car = Car.new 'red', 'Toyota', 1986
p my_car
puts my_car.class

puts my_car.color
my_car.color = 'bright pink'

puts my_car.make
my_car.make = 'Mazda'

puts my_car.year
my_car.year = 2011

p my_car



# 
