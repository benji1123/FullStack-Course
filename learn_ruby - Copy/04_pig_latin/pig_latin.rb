	
#pig latin transfers all the consonants or non-consonant characters to the end of the word
def translate(word)
	
	len = word.length
	output=""

	#first character is vowel
	if ['a','i','o','e','u'].include?(word[0])
		output=word+"ay"

	#first character consanant
	else
		puts word[0]
		consanants=word[0]
		word=word[1..len]
		puts word

		[0..len].each do |i|

			unless ['a','i','o','e','u'].include?(word[0])

				consanants+=word[i]

			else

				word=word[i..len]
			end

			break if ['a','i','o','e','u'].include?(word[0])
			
		end

		output=word+consanants+"ay"

		
	end

	puts output
	output

end


translate("cool")

