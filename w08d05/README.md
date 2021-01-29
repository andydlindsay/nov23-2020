# W08D05 - Intro to Ruby

### To Do
* [x] Ruby Intro
* [x] Variables
* [x] Conditionals
* [x] Loops
* [x] Methods
* [x] Hashes
* [x] Blocks and Lambdas
* [x] Classes

### Variables and Console Interaction (reading/writing)

```rb
# print something to the console
print "something" # no new line
puts "something else" # new line
p "also works" # returns the value printed

# put a blank line in the console
puts "I need space"
puts
puts "no problem"

# single line comment

=begin
multi-line
comment
=end
```

```rb
# variables don't need to be declared (no const or let)
# Don't need semicolons
name = 'Alice'

# Ruby is dynamically typed
name = 7
name = true

# nil is equivalent to JS null
# there is no undefined or null in Ruby
name = nil

# Constants in Ruby are capitalized
Name = 'Alice'
# Hungarian notation!
NAME = 'Alice'
```

```rb
# we don't have == to just check value regardless of type
puts 2 == '2' # false

# === works the same as == for the most part
puts 2 === '2' # false

# casting values
num = "4"
puts num.to_i # 4
other_num = 5
puts other_num.to_s # "5"

# comparison using casting
puts 2 == '2'.to_i # true
```

```rb
# string concatenation
puts first_name + " " + last_name
# string interpolation
puts "#{first_name} #{last_name}"
# interpolation only works with double quotes
puts '#{first_name} #{last_name}'
```

### Conditionals

```rb
# if..else and comparison
# > < >= <= == !=
if (num > 2)
  puts "larger than two"
else
  puts "must be smaller"
end

# we also have else if, not spelt right though
if (first_name == "John" && last_name == "Stamos")
  puts "great name"
elsif (first_name == "Ada" || last_name == "Lovelace")
  puts "also good"
else
  puts "name could be improved"
end

# unless inverts the condition
unless (first_name == "John")
  puts "choose a better name"
else
  puts "you chose well"
end

# reverse if!
hour = 7
puts "good evening" if hour > 5 # outputs string
sunny = false
puts "wear rain jacket" unless sunny # outputs string

# our good friend the switch... I mean case statement
last_name = "Chewie"
case last_name
  when "Stamos"
    puts "hello there"
    exit # === break
  when "Kenobi"
    puts "this is not the code you're looking for"
    exit
  else
    puts "you are seeing the default message"
end

# ternary
num = 7
puts (num < 10) ? "single digits" : "multiple digits"
```

### Loops

```rb
# break
i = 0
loop do
  i += 1
  puts i

  # exit the loop
  break if i > 5 # prints 1 through 6
end

# while
i = 0
while i < 5 do # prints 1 through 5
  i += 1
  puts i
end

# until
i = 0
until i > 5 do # prints 1 through 6
  i += 1
  puts i
end

# for..in === for..of ¯\_(ツ)_/¯
names = ['Alice', 'Bob', 'Carol', 'David']
for name in names do
  puts "Hello #{name}!"
end

# each === forEach
names.each do |name|
  puts "Goodbye #{name}!"
end

# select === filter
list = [1, 2, 3, 4, 5]
list.select do |num|
  num >= 3
end

# ranges
(5..10).each do |num|
  puts num # prints 5 through 10
end

# times
10.times { puts "hello world" }
```

### Methods
- Ruby uses implicit return, returning the last line of code in the method if there is no explicit `return`
- Methods are not first-class citizens in Ruby as they are in JS (eg. we cannot pass them around as callbacks)
- Even mathematical operators (+, -, etc) are methods!
- Special methods end in ? or !
  - `?` methods return a boolean value
  - `!` methods perform some kind of mutation
  - Hungarian notation again!

```rb
# writing our own methods
def say_hello name # starts with a definition
  puts "hello #{name}, nice to meet you"
end

# invoke with or without parens
say_hello "Bob"
say_hello("Bob")

# calling a method with too many/too few arguments will result in an error
say_hello("Bob", "Hoskins") # error

# methods in ruby have implicit return
def full_name(first_name, last_name)
  first_name + " " + last_name
end
puts full_name('Ada', 'Lovelace') # "Ada Lovelace"
```

### Hashes
* Collections of key/value pairs (think JS object)
* Cannot be accessed using dot (`.`) syntax, must use square bracket (`[]`) syntax instead

```rb
# hashes
# associative array... a way of storing key/value pairs
user = {
  "username" => "johns",
  "password" => "1234",
  "logged_in" => false
}
puts user
# access properties with square brackets
puts user["logged_in"] # false

# symbols: "a string that you can't change"
# perfect as keys for hashes
user = {
  :username => "adal",
  :password => "5678",
  :logged_in => true
}
puts user[:logged_in] # true

# and even better short-hand
user = {
  username: "bobh",
  password: "password",
  logged_in: true
}
puts user[:username] # "bobh"

# what about dynamic keys?
my_key = 'username'
user[my_key] # nil
# convert the string to a symbol
user[my_key.to_sym] # 'bobh'
```

### Lambdas
* Named blocks of code

```rb
# blocks define a chunk of code to be executed
# can be do..end or {}
dogs = ["Odie", "Lassie", "Dioji"]

dogs.each do |dog|
  # inside a block
  puts dog
end

dogs.each { |dog|
  # also inside a block
  puts dog
}

# lambdas
# "named blocks"
do_thing = lambda { |dog| puts dog } # lambda keyword
say_something = -> { puts "I'm giving up on you" } # lambda literal

# use & to convert a lambda to a block
dogs.each &do_thing

# defining a method that takes a lambda
def my_method(&block)
  block.call # .call to invoke the block
end
my_method &say_something # w/o parens
my_method(&say_something) # w/ parens
```

### Classes
* You declare a class in Ruby with the class keyword.

```rb
class Car
end
```

#### Initialize
* `initialize` is a special method in classes that is called when a class object is created with .new
* `initialize` methods are used to set the initial state of an object.

```rb
class Car
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end

my_car = Car.new("red", 2007, "matrix")
```

#### Accesor && Readers
* You can set default read and write methods for instance variables with accessor and readers.

```rb
class Car
 attr_accessor :color
 attr_reader :year
 attr_writer :model

 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end

# Equivalent to:
class Car
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end

 def color
   @color
 end

 def color=(value)
   @color = value
 end

 def year
   @year
 end

 def model=(value)
   @model = value
 end
end
```
