# Movie-Radar

**a movie recommendation system**

Recommendation systems are information filtering systems that help deal with the problem of information overload by filtering and segregating information and creating fragments out of large amounts of dynamically generated information according to user’s preferences and observed behaviour.

Movie Radar is a Content Based Recommendation System that uses a machine learning algorithm to recommend movies similar to the movie liked by the user. It fetches the movie details from the TMDB API, `https://www.themoviedb.org/documentation/api`and analyses user reviews for that movie. These details include movie name, genre, ratings, release date, posters, etc.
The movie reviews are scraped from the IMDB site using beautifulsoup.

We can click on the recommended movies to get the info and further recommendations for the movie.

I have deployed the webapp on heroku.
Check out the live demo: https://movie--radar.herokuapp.com/

## Prerequisites

All the required libraries are mentioned in [requirements.txt](https://github.com/pooja610/Movie-Radar/blob/main/requirements.txt) file. You can install them by running the command `pip install -r requirements.txt`.

## Getting Started

Please follow the following steps to run the webapp on your system.

1. Clone or download this repository to your local machine.
2. Install all the libraries mentioned in the [requirements.txt](https://github.com/pooja610/Movie-Radar/blob/main/requirements.txt) as shown above.
3. To get the `API key`, create an account on https://www.themoviedb.org/. Go to account settings and click on `API`. Fill in the required details (you can write NA for website URL). You will get the API key as soon as your request gets approved.
3. Set my_api_key in the lines 15 and 29 of `static/recommend.js` file to the API key you just got and save.
4. In your terminal/command prompt, execute the command `python main.py` to run the file `main.py`.
5. Run `http://127.0.0.1:5000/` in your browser.
6. Now you are good to go!

## Datasets

I have performed data preprocessing to get useful information from raw data. The datasets folder conains the preprocessed data in `.csv` format.
The sources of movie dataset are:
1. [IMDB Movie Dataset from kaggle](https://www.kaggle.com/carolzhangdc/imdb-5000-movie-dataset)
2. [The-Movies-Dataset from kaggle](https://www.kaggle.com/rounakbanik/the-movies-dataset)
3. [Movies_2018](https://en.wikipedia.org/wiki/List_of_American_films_of_2018)
4. [Movies_2019](https://en.wikipedia.org/wiki/List_of_American_films_of_2019)
5. [Movies_2020](https://en.wikipedia.org/wiki/List_of_American_films_of_2020)

## Similarity Score : 

The similarity scores decide which item is the most similar to the item liked by the user. 
   It is a numerical value ranges between zero to one which helps to determine how much two items are similar to each other on a scale of zero to one. This similarity score is obtained measuring the similarity between the text details of both of the items. So, similarity score is the measure of similarity between given text details of two items. This can be done by cosine-similarity.
   
## Cosine Similarity

Cosine similarity measures the similarity between two vectors of an inner product space. Mathematically, Cosine similarity measures the cosine of the (orientation)angle between two vectors projected in a multi-dimensional space.

It is often used to measure document similarity in text analysis. Smaller the angle, higher the similarity. We can use `NumPy` to perform cosine similarity calculations.

You can learn more about cosine similarity [here](https://www.sciencedirect.com/topics/computer-science/cosine-similarity#:~:text=Cosine%20similarity%20measures%20the%20similarity,document%20similarity%20in%20text%20analysis.)


You can explore Movie Radar here: https://movie--radar.herokuapp.com/
