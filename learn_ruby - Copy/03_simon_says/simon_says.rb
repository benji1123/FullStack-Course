#repeat the input
def echo(input)
	input
end

#capitalize input
def shout(input)
	input.upcase
end


def repeat(input, x)
	input+" "+input
	total=input
	(2..x).each do |i|
		total = total + " " + input
	end
	puts total
	total
end



repeat("2",3)