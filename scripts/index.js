
const quotes = [
	{ 
		"quote" : "There’s nothing wrong with you. There’s a lot wrong with the world you live in", 
		"source" : "Chris Colfer" 
	},
	{
		"quote" : "We should not be ashamed of who we are", 
		"source" : "Sylvia Rivera"
	},
	{
		"quote" : "The love we were denied is our impulse to change the world", 
		"source" : "Lohana Berkins"
	},
	{
		"quote" : " We have to be visible.", 
		"source" : "Sylvia Rivera"
	},
	{
		"quote" : "My silences had not protected me. Your silence will not protect you", 
		"source" : "Audre Lorde"
	},
	{
		"quote" : "You only live once, but if you do it right, once is enough", 
		"source" : "Mae West"
	},
  {
    "quote" : "What is straight? A line can be straight, or a street, but the human heart, oh, no, it’s curved like a road through mountains",
    "source" : "Tennessee Williams"
  },
  {
    "quote" : "Love is never wrong",
    "source" : "Melissa Etheridge"
  },
  { 
		"quote" : "I hate the word homophobia. It’s not a phobia. You’re not scared. You’re an a**hole", 
		"source" : "Morgan Freeman" 
	},
  { 
		"quote" : "We have to do it because we can no longer stay invisible", 
		"source" : "Sylvia Rivera" 
	},
  {
    "quote" : "They say that through a process the worm becomes a butterfly, but it lies in a world where many who want to be worms remain worms",
    "source" : "Lohana Berkins"
  },
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  source.innerText = random.source;
}
randomQuote();
document.querySelector("button").addEventListener('click', randomQuote);
