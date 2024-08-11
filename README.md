# About
## General Overview
This is just a personal pet project to both reacclimate myself to coding after a 2-year long career break. 

The goal here is a handful of things:
- Reacclimate to C#
- Learn more front-end webdev work, which I feel I didn't get enough exposure to
- Learn React, Typescript, Material UI
- Learn some Docker, maybe eventually Kubernetes if I can find a use case for it

## About the Data
### Encounters
I play a bit of Final Fantasy IV, a fantasy MMORPG. There exists ways to collect and poll data from the game, specifically combat. So it represents data polled in regards to combat when I play. I'm also using it to teach myself some pitfalls and mistakes in data modeling, particularly reshaping. I'm still learning on that front.

It just happens that the application that is often used can port to SQL. It also so happens that the data is fairly ill-formated for a solid key relationships, as this is based on a much older application. So there's some data nursing I have to do. See the Nkno.Dev.Scripts about that.

### Games
This is just a view of some games I've played with some stats on them to allow for me to play with filters, and even add/delete/edit the data.

I was looking for an excuse to use SQL & Mongo, as well as use Dependancy Injection proper. I also can't do Add/Delete into the above mentioned Encounters table, it's far too complex, and I wouldn't have any adds, or deletes. So I came up with a sort of simplistic, lightly nested BSON model to run with.
