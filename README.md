# About
## General Overview
This is just a personal pet project to get back into coding after a 2-year long career break (for now).

The goal here is a handful of things:
- Reacclimate to C#
- Learn more front-end webdev work, which I feel I didn't get enough exposure to
- Learn React, Typescript, Material UI
- Learn some Docker, maybe eventually Kubernetes if I can find a use case for it (See Nkno.Dev.Scripts for any of the non Web Page docker stuff)

## About the Data
### Encounters
I play a bit of Final Fantasy XIV, a fantasy MMORPG. There exists ways to collect and poll data from the game, specifically combat. So it represents data polled in regards to combat when I play. I'm also using it to teach myself some pitfalls and mistakes in data modeling, particularly reshaping. I'm still learning on that front.

It just happens that the application that is often used can push data into SQL. It also so happens that the data is fairly ill-formated for a solid key-based relationships, as this is based on a much older application, so the dev never accounted for such things. So there's some data nursing I have to do. See Nkno.Dev.Scripts about that.

### Games
This is just a view of some games I've played with some stats on them to allow for me to play with filters, and even add/delete/edit the data. Nothing complex.

I was looking for an excuse to use SQL & Mongo, as well as use Dependancy Injection proper. I also can't do Add/Delete into the above mentioned Encounters table, it's far too complex, and I wouldn't have any adds, or deletes. So I came up with a sort of simplistic, lightly nested BSON model to run with.
