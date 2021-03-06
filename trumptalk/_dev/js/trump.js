// Reset variables when making a new speech ==========================================
	function resetVariables() {
		br = '<br><br>';
		$body = $("body");
		$generate = $(".generate");
		$speech_text = $(".speech-text");

		intros = [
			"Is this thing on?" + br + "Okay— wow. Okay good. What an amazing crowd we have here today. Vice President Pence, Mr. Chief Justice, members of the United States Congress, distinguished guests, and fellow citizens.",
			"Oh boy. You know we weren’t expecting— a couple of months ago, we weren’t expecting to win this one, you know that, right? We weren’t.",
			"Thank you all for being here for this historic moment in history. Together, we will lead our country back to safety, prosperity, and peace.",
			"Thank you America. I am so thrilled to be in Washington today." + br + "Sorry to keep you waiting— complicated business, complicated." + br + "Okay. So Washington D.C. is such an amazing state, and filled with so many incredible people.",
			"This is so— so incredible. No matter where we go, it’s amazing. Every place we go to, it’s like this. It’s amazing. And just great, great people.",
			"Wow. Isn’t this beautiful." + br + "Chief Justice, Vice President Pence, the United States Congress— Hillary, I see you, all the distinguished guests, and fellow citizens.",
			"Wow. Thank you all." + br + "Vice President Pence, Mr. Chief Justice, members of the United States Congress, distinguished guests, and fellow citizens. Today, I pledge to every citizen of our land that I will be president for all Americans.",
			"Wow. That’s a lot of people." + br + "Thank you very much. I am so glad to be in this great state. Washington, D.C. has a very, very special place in my heart. I love people of America and together we have done something tremendous.",
			"Wow. What you are seeing here is a great, great movement, the likes of which our country has never seen before. Never ever.",
		];

		starters = [
			"Each time we gather to inaugurate a President we affirm the promise of our democracy. Our win was one of the biggest wins in American history.",
			"For the [NATIONALITY] who chose not to support me in the past, I’m reaching out to so we can work together and unify our great country.",
			"Imagine what our country could accomplish if we started working together as One People, under One God, saluting One American Flag. It is time to break with the bitter failures of the past, and to embrace a new, prosperous American future.",
			"In this presidency there will be no lies. We will honor the American people with the truth, and nothing else.",
			"Nice warm weather we are having today thanks to global warming, right? Let’s move on.",
			"Now it’s time for America to bind the wounds of division. To all [NATIONALITY] and losers across this nation, I say it is time for us to come together as one united people.",
			"Now that I am president, we have a lot of work to do. This is big league work.",
			"The stakes in this election could not be higher.",
			"This is about us, on our victory. That is why I am officially declaring my candidacy for President in 2020. But you have got to go out and vote.",
			"This will not be simply another four-year presidency. This is a crossroads in the history of our civilization.",
			"Today is history. Today will be remembered. Years from now, the young will ask with wonder about this day. Today is history and you are part of it.",
			"We observe today not a victory of party but a celebration of freedom— symbolizing an end as well as a beginning— signifying renewal as well as change.",
			"We will be celebrating for a long time tonight.",
			"What an incredible election we had. I can’t wait to do it again in four years.",
		];

		topics = [
			"gun violence",
			"illegal immigration",
			"nuclear weapons",
			"nukes",
			"Obamacare",
			"our schools",
			"taxes",
			"terrorism",
			"the border",
			"the economy",
			"trade",
			"unemployment",
		];

		persons = [
			"Barack Hussein Obama",
			"Barack Obama",
			"Barack",
			"Bernie Sanders",
			"Bernie",
			"Bill Clinton",
			"Clinton",
			"Crooked Hillary Clinton",
			"Crooked Hillary",
			"Hillary Clinton",
			"Hillary",
			"Jeb Bush",
			"Jeb",
			"Jill Stein",
			"John Kerry",
			"Little Marco",
			"Lyin’ Ted",
			"Michelle Obama",
			"Obama",
			"Rubio",
			"Ted Cruz",
			"Elizabeth Warren"
		];

		nationalities = [
			"Canadians",
			"Chinese",
			"corrupt politicians",
			"democrats",
			"each and every democrat",
			"each and every liberal",
			"establishment politicians",
			"hispanics",
			"illegal aliens",
			"illegals",
			"Iranians",
			"Iraqis",
			"Italians",
			"liberals",
			"lobbyists",
			"Mexicans",
			"Muslims",
			"special interests",
			"Syrians",
			"the media",
			"Wall Street donors",
		];

		adversaries = [
			"Afghanistan",
			"Benghazi",
			"Canada",
			"China",
			"CNN",
			"EPA",
			"Libya",
			"Iran",
			"Iraq",
			"ISIS",
			"Japan",
			"Mexico",
			"NAFTA",
			"NASA",
			"North Korea",
			"Twitter",
			"The New York Times",
		];

		actions = [
			"be smarter",
			"bring back our jobs",
			"bring back the steel mills",
			"defeat terrorism",
			"deport all Muslims",
			"fix our problems",
			"tear up the Iran Deal",
			"grow American energy",
			"fire a nuke",
			"lower the debt",
			"make America great again",
			"make America proud again",
			"make America safe again",
			"make America strong again",
			"make America wealthy again",
			"promote American values",
			"put the era of division behind us",
			"rebuild our depleted military",
			"rebuild our failing infastructure",
			"rebuild our roads, bridges, tunnels, hotels, highways, airports, schools, hospitals",
			"rebuild this crumbling nation",
			"repeal Obamacare",
			"restore ethics and honesty to our government",
			"restore law and order",
			"restore safety to our country",
			"shut down the EPA",
			"simplify our tax code",
			"stop illegal immigration",
			"take care of our veterans",
			"take their oil",
			"turn off Saturday Night Live",
			"unify our great country",
		];

		quips = [
			"[ADVERSARY] better be careful or I will unleash big time on them.",
			"[ADVERSARY] was under control. After four years of [PERSON], what do we have?",
			"[PERSON] and the Democratic Party have taken African-American people totally for granted.",
			"[PERSON] could never fix [TOPIC].",
			"[PERSON] founded ISIS. Why is no one talking about this?",
			"[PERSON] isn’t above the law.",
			"[PERSON] never stood a chance at being able to [ACTION].",
			"[PERSON] wanted to pass more terrible trade deals. Terrible.",
			"[PERSON] wanted to put the miners and the steel workers out of work.",
			"[PERSON] wanted to trap children in failing schools. I want school choice.",
			"[PERSON]’s bad instincts and bad judgment are what caused the disasters unfolding today.",
			"And like that, the wall just got 10 feet higher.",
			"Believe me.",
			"Build the wall!",
			"By the way, I am a man who loves my country, the United States.",
			"Can we talk about [PERSON], okay?",
			"Did I mention [PERSON] is the founder of ISIS? It’s true.",
			"Everyone says I’m a really tremendous person too.",
			"Get rid of the fraud.",
			"Here’s three words: jobs, jobs, jobs.",
			"I am fighting for you. For you.",
			"I am America’s only hope.",
			"I am the change agent. [PERSON] is the defender of the corrupt status quo.",
			"I beat [ADVERSARY] all the time.",
			"I know words. I have the best words.",
			"I mean seriously– how do you get rid of 33,000 emails? How did [PERSON] manage to do this?",
			"I say build the wall!",
			"I will absolutely release my tax returns after [PERSON] fixes [TOPIC].",
			"I’m the worst thing that’s ever happened to [ADVERSARY].",
			"I’ve been saying it all along, we have to [ACTION].",
			"If we take these steps, jobs and factories will come roaring back into our country.",
			"It is time to believe In America.",
			"It is time to believe in each other.",
			"It is time to believe in the future.",
			"It’s the powerful protecting the powerful.",
			"It’s true— the truth is I’m actually a modest person. Very modest. In fact many people tell me that modesty is perhaps my best quality.",
			"Let me tell you a few more things about [TOPIC]—",
			"Let me tell you a few more things we are going to do.",
			"Let’s be clear on one thing. Okay?",
			"We’ve seen [PERSON] go to any lengths to get elected.",
			"Let’s talk about trade too.",
			"Like Bernie Sanders said, [PERSON] has terrible judgement.",
			"No one loves me more than [NATIONALITY].",
			"Number one, the people negotiating don’t have a clue.",
			"Our gross domestic product, or GDP, is barely above 1 percent. And going down.",
			"People like [PERSON] have aggressively pursued a policy of globalization - moving our jobs, our wealth and our factories to [ADVERSARY] and overseas. Globalization has made the financial elite who donate to politicians very wealthy. But it has left millions of our workers with nothing but poverty and heartache.",
			"Right now as a country we have no growth.",
			"I love America more than anyone else.",
			"Sadly, sadly there is no other way.",
			"So true.",
			"That is why we need a total and complete shutdown of [NATIONALITY] entering the United States.",
			"The American voter has rejected [PERSON]’s politics of fear, futility, and incompetence.",
			"The era of economic surrender will finally be over. A new era of prosperity will finally begin. America will be independent once more.",
			"The establishment had trillions of dollars at stake in this election.",
			"The machine run by [PERSON] is at the center of the establishment.",
			"As for the people who rigged the system to support [PERSON] because they know as long as [PERSON] is in charge nothing will ever change. We proved them wrong",
			"The Trump Administration will end this war on the American worker started by [PERSON].",
			"The truth is nobody will [ACTION] better than I will.",
			"There is no choice.",
			"There is no one who knows [ADVERSARY] better than I do.",
			"This is a struggle for the survival of our nation, believe me.",
			"This is exactly what is wrong with [TOPIC].",
			"Trillions of our dollars and millions of our jobs flowed overseas as a result. This is not some natural disaster. It is politician-made disaster.",
			"Trust me—",
			"We are going to fix [TOPIC] and we are going to do it fast.",
			"We are going to fix [TOPIC] in the first 100 days.",
			"We keep allowing [ADVERSARY] to beat us on trade.",
			"We cannot keep sending jobs to [ADVERSARY]. We’ve been doing it for far too long.",
			"We do not have much time.",
			"We don’t have victories anymore.",
			"Now we are $18 trillion in debt.",
			"We got nothing but problems.",
			"We have no choice but to [ACTION], and make Mexico pay for it.",
			"We have no choice—",
			"We have to [ACTION] and then we will work on fixing [TOPIC].",
			"We have to win. We will win big league.",
			"We used to have victories, but we don’t have them anymore.",
			"We will lock her up too.",
			"We’re tired of incompetence. We’re tired of [ADVERSARY] taking all our jobs. We are tired of not taking care of our military. Our vets are being taken care of very poorly.",
			"We’ve seen this election how our system is totally rigged. [PERSON] put the entire country in danger– the entire country in danger.",
			"When [ADVERSARY] sends its people, they’re not sending the best.",
			"When was the last time anybody saw us beating, let’s say, [ADVERSARY] in a trade deal? They kill us!",
			"You see, [PERSON] was a bad negotiator.",
		];

		endings = [
			"I never worked this hard in my life. But I like it, I like it, I love it actually because I’ve met so many incredible people. " + br + "In the end we’re all going to win! " + br + "God Bless you! America has won!",
			"It’s going to be America First from now on. We’re going to win so much, you’re going to be so sick and tired of winning. " + br + "We are one country, one people, and we will have together one great future. " + br + "God bless you!",
			"It’s going to be an amazing four years. Folks, to be honest. Once more, we will have a government of, by and for the people. " + br + "Thank you and God Bless!",
			"My promise to you is that this presidency is going to be the greatest four years of your life. We are going to get so much done, so fast, so beautifully. Whatever we don’t get done we will work on during my second term. But that is only if you get out and vote! Remember to vote! Thank you all.",
			"It’s going to be an amazing four years to be honest. Once more, we will have a government of, by and for the people. " + br + "Thank you and God Bless!",
			"The people of this country are absolutely amazing. I love you folks very much. Remember: Make America great again. We’re going to do it, and it’s going to happen fast. Thank you very much everybody. " + br + "We love you. God bless.",
			"This is how we are going to Make America Great Again– for all Americans. " + br + "Thank you, and God Bless You!",
			"We are going to embrace the possibilities of change. " + br + "We will Make America Great Again! " + br + "God Bless you all!",
			"We are going to win so much you will get tired of winning! We are going to Make America Great Again for everyone– greater than ever before. " + br + "Thank you and God Bless America.",
		];
	}


// Pick a random whole number ========================================================
	function randomNumber(start, end) {
	  var range = end - start;
	  var random = (Math.random() * range) + start;
	  var round = Math.floor(random);

	  return round;
	}


// Pick a random item from an array ==================================================
	function randomizer(list, splice) {
		var random = Math.floor(Math.random() * list.length);
		var item = list[random];

		// If the splice paramater is present, Remove the item from the list
		if (splice == true) {
			list.splice(random, 1);
		}

		return item;
	}


// Find and replace placeholders =====================================================
	function fixer(text) {
		var ADVERSARY = randomizer(adversaries);
		var NATIONALITY = randomizer(nationalities);
		var ACTION = randomizer(actions);
		var TOPIC = randomizer(topics);
		var PERSON = randomizer(persons);

		var text = text.replace(/\[ADVERSARY\]/g, ADVERSARY)
			.replace(/\[NATIONALITY\]/g, NATIONALITY)
			.replace(/\[ACTION\]/g, ACTION)
			.replace(/\[TOPIC\]/g, TOPIC)
			.replace(/\[PERSON\]/g, PERSON);

		return text;
	}


// Let's write the speech ============================================================
	function setupSpeech() {
		// Reset the speech
		$('.speech-text').empty();
		speech = [];

		// Setup speech parts
		var intro = randomizer(intros);
		var starter = randomizer(starters);
		var ending = randomizer(endings);

			speech.push(fixer(intro));
			speech.push(br + 'This is so huge—' + br);
			speech.push(fixer(starter));
			speech.push(br);

			for (i = 0; i < randomNumber(quips.length - 20, quips.length - 5); i++) {
		 		// Insert random line breaks
		 		if(i > 0 && randomNumber(0, 100) < 50) {
		 			speech.push(br);
		 		}

		 		var quip = randomizer(quips, true);
		 		speech.push(fixer(quip));
			}

				speech.push(br);
				speech.push(fixer(ending));
	}


// Get the speech in array form and write it out =====================================
	function printSpeech() {
		$.each(speech, function(i, text){
			$speech_text.append(text + ' ');
		});
	}


// Shuffle speech ====================================================================
	var globalID;

	function repeatOften() {
		resetVariables();
		setupSpeech();
		printSpeech();
		globalID = requestAnimationFrame(repeatOften);
	}


// Write a new speech =================================================================
	function newSpeech() {
		// Scroll to top of page
		window.scrollTo(0, 0);
		$body.addClass('generating');
		$generate.text('Writing...');
		globalID = requestAnimationFrame(repeatOften);

		setTimeout(function(){
			$body.removeClass('generating');
			$('.generate').blur();
			$('header .generate').text('Generate a new speech');
			$('footer .generate').text('Generate another speech');
			cancelAnimationFrame(globalID);
		}, 1000);
	}


// Init ==============================================================================
$(function(){
	resetVariables();
	newSpeech();

	// Handle clicks on generate button
	$generate.click(newSpeech);
});