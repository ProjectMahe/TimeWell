document.addEventListener('DOMContentLoaded', () => {
    // Array of time management and motivational quotes
    const motivationQuotes = [
        "The best way to predict the future is to create it.",
        "Your time is limited, don't waste it living someone else's life.",
        "The secret of getting ahead is getting started.",
        "Don't wait for the perfect moment, take the moment and make it perfect.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "The bad news is time flies. The good news is you're the pilot. – Michael Altshuler",
        "The key is not to prioritize what's on your schedule, but to schedule your priorities. – Stephen Covey",
        "Lost time is never found again. – Benjamin Franklin",
        "Until we can manage time, we can manage nothing else. – Peter Drucker",
        "Time is the most valuable thing a man can spend. – Theophrastus",
        "Either you run the day or the day runs you. – Jim Rohn",
        "The chief enemy of creativity is 'good' sense. – Pablo Picasso",
        "You may delay, but time will not. – Benjamin Franklin",
        "Don’t be fooled by the calendar. There are only as many days in the year as you make use of. – Charles Richards",
        "The essence of time management is to organize your time and yourself. – Brian Tracy",
        "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
        "It's not enough to be busy, so are the ants. The question is, what are we busy about? – Henry David Thoreau",
        "Ordinary people think merely of spending time, great people think of using it. – Arthur Schopenhauer",
        "Time is what we want most, but what we use worst. – William Penn",
        "He who every morning plans his day, and follows out that plan, carries a thread that will guide him through the labyrinth of the most busy life. – Victor Hugo",
        "The future depends on what you do today. – Mahatma Gandhi",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
        "It always seems impossible until it's done. – Nelson Mandela",
        "Strive not to be a success, but rather to be of value. – Albert Einstein",
        "The journey of a thousand miles begins with a single step. – Lao Tzu",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. – Henry David Thoreau",
        "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. – Thomas A. Edison",
        "The best revenge is massive success. – Frank Sinatra",
        "Quality is not an act, it is a habit. – Aristotle",
        "If you want to achieve greatness stop asking for permission. – Unknown",
        "To live a creative life, we must lose our fear of being wrong. – Joseph Chilton Pearce",
        "If you are not willing to risk the usual, you will have to settle for the ordinary. – Jim Rohn",
        "Try not to become a man of success, but rather try to become a man of value. – Albert Einstein",
        "Great minds discuss ideas; average minds discuss events; small minds discuss people. – Eleanor Roosevelt",
        "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
        "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence. – Confucius",
        "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats",
        "The less I have to do, the less time I have to do it in. – Napoleon Bonaparte",
        "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. – Mark Twain",
        "Perfection is not attainable, but if we chase perfection we can catch excellence. – Vince Lombardi",
        "The path to success is to take massive, determined action. – Tony Robbins",
        "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
        "Focus on being productive, not busy. – Tim Ferriss",
        "Efficiency is doing things right. Effectiveness is doing the right things. – Peter Drucker",
        "Don't count the days, make the days count. – Muhammad Ali",
        "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will. – Vince Lombardi",
        "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin",
        "The impediment to action advances action. What stands in the way becomes the way. – Marcus Aurelius",
        "Happiness is not something ready made. It comes from your own actions. – Dalai Lama XIV",
        "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. – Earl Nightingale",
        "The productivity guru who doesn’t take a break is the one who will eventually break down. – Unknown",
        "The art of being wise is the art of knowing what to overlook. – William James",
        "Most of us spend too much time on what is urgent and not enough time on what is important. – Stephen Covey",
        "Work-life balance is not a myth. It's a choice you make every day. – Unknown",
        "The two most powerful warriors are patience and time. – Leo Tolstoy",
        "To think is easy. To act is difficult. To act as one thinks is the most difficult of all. – Johann Wolfgang von Goethe",
        "You can’t make up for lost time. You can only do better in the future. – Unknown",
        "The more time you waste, the more you will regret. – Unknown",
        "Take care of the minutes and the hours will take care of themselves. – Lord Chesterfield",
        "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
        "Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.' – Lao Tzu",
        "Don't wish it were easier, wish you were better. – Jim Rohn",
        "The reason most people never reach their goals is that they don't define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them. – Denis Waitley",
        "The shortest way to do many things is to do only one thing at a time. – Samuel Smiles",
        "If you want to make an easy job seem hard, just keep putting off doing it. – Olin Miller",
        "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days. – Zig Ziglar",
        "The surest way to be late is to have plenty of time. – Leo Kennedy",
        "Time is the coin of your life. It is the only coin you have, and only you can determine how it will be spent. Be careful lest you let other people spend it for you. – Carl Sandburg",
        "The difference between successful people and very successful people is that very successful people say 'no' to almost everything. – Warren Buffett",
        "We are always complaining that our days are few, and acting as though there would be no end to them. – Seneca",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "It’s hard to beat a person who never gives up. – Babe Ruth",
        "Whether you think you can or you think you can’t, you’re right. – Henry Ford",
        "Your attitude, not your aptitude, will determine your altitude. – Zig Ziglar",
        "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
        "I have not failed. I've just found 10,000 ways that won't work. – Thomas A. Edison",
        "Challenges are what make life interesting and overcoming them is what makes life meaningful. – Joshua J. Marine",
        "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. – Steve Jobs",
        "What seems to us as bitter trials are often blessings in disguise. – Oscar Wilde",
        "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
        "If you genuinely want something, don’t wait for it—teach yourself to be impatient. – Gurbaksh Chahal",
        "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
        "The best way to appreciate your job is to imagine yourself without one. – Oscar Wilde",
        "Develop an 'attitude of gratitude.' Say thank you to everyone you meet for everything they do for you. – Brian Tracy",
        "You miss 100% of the shots you don’t take. – Wayne Gretzky",
        "The mind is everything. What you think you become. – Buddha",
        "Eighty percent of success is showing up. – Woody Allen",
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. – Steve Jobs",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. – Oprah Winfrey",
        "Remember that not getting what you want is sometimes a wonderful stroke of luck. – Dalai Lama XIV",
        "The most difficult thing is the decision to act, the rest is merely tenacity. – Amelia Earhart",
        "Do not let what you cannot do interfere with what you can do. – John Wooden",
        "The future starts today, not tomorrow. – Pope John Paul II",
        "It is by acts and not by ideas that people live. – Anatole France",
        "The purpose of our lives is to be happy. – Dalai Lama XIV",
        "Keep your eyes on the stars, and your feet on the ground. – Theodore Roosevelt",
        "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
        "To conquer without risk is to triumph without glory. – Pierre Corneille",
        "What you do today can improve all your tomorrows. – Ralph Marston",
        "The best way out is always through. – Robert Frost",
        "It's not about perfect. It's about effort. And when you bring that effort every single day, that's where transformation happens. That's how change occurs. – Jillian Michaels",
        "There is no substitute for hard work. – Thomas Edison",
        "The man who moves a mountain begins by carrying away small stones. – Confucius",
        "Either write something worth reading or do something worth writing. – Benjamin Franklin",
        "Action is the foundational key to all success. – Pablo Picasso",
        "The only way to do great work is to love what you do. – Steve Jobs",
        "You are the master of your destiny. You can influence, direct and control your own environment. You can make your life what you want it to be. – Napoleon Hill",
        "The way to get started is to quit talking and begin doing. – Walt Disney",
        "If I have seen further than others, it is by standing upon the shoulders of giants. – Isaac Newton",
        "It's not about having time. It's about making time. – Unknown"
    ];

    // Get references to the HTML elements
    const newQuoteBtn = document.getElementById('newQuoteBtn');
    const dynamicQuoteParagraph = document.getElementById('dynamicQuote');
    const initialQuoteParagraph = document.getElementById('initialQuote');
    const initialCiteElement = document.getElementById('initialCite');

    // Function to display a random quote
    const displayRandomQuote = () => {
        if (motivationQuotes.length === 0) {
            dynamicQuoteParagraph.textContent = "No quotes available. Please add some!";
            initialQuoteParagraph.style.display = 'none'; // Hide initial quote if no dynamic ones
            initialCiteElement.style.display = 'none';
            return;
        }

        // Hide the initial quote and cite once the button is clicked or a dynamic quote is shown
        // This ensures only the dynamic quote is visible after interaction
        if (initialQuoteParagraph) {
            initialQuoteParagraph.style.display = 'none';
        }
        if (initialCiteElement) {
            initialCiteElement.style.display = 'none';
        }

        const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
        dynamicQuoteParagraph.textContent = motivationQuotes[randomIndex];
    };

    // Event listener for the button click
    if (newQuoteBtn) { // Check if the button exists before adding listener
        newQuoteBtn.addEventListener('click', displayRandomQuote);
    }

    // Optional: Display an initial dynamic quote on page load instead of the static one.
    // If you prefer the static one to show first until the button is clicked, remove this line.
    // displayRandomQuote(); 
});