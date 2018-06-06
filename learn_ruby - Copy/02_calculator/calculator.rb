#add 2 numbers
def add(a,b)
	a+b
end

#subtract 2 numbers
def subtract(a,b)
	a-b
end

#sum of array
def sum(array)
	sum=0
	array.each {|num| sum += num}

	puts sum
	sum
end

#multiplies a set of numbers
def multiply(array)
	total=1
	array.each do |num|
		total=total*num
	end
	puts total
	total
end


#exponentiates first number to the second
def power(base, exp)
	puts base**exp
	base**exp
end



#compute factorial of a number
def factorial(a)
	
	total=a
	max=a-1

	(1..max).each do |i|
		total=total*i
	end

	puts total
	total
end

