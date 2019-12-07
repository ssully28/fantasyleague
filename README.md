## Fantasy League
##### Little League to Beer League....zero pro's here!

**Author:**
Steve Sullivan Great Guy
ssully28@gmail.com
___

### Documentation:
This app is growing pretty quick so I figure would be good to start documenting things as I go along...as well as start doing more frequent check-ins with my code.

### Game Info:
I'm setting this up for the rink I play roller hockey at (Contra Costa Sports Complex) - I play hockey in two leagues (Sunday 30+ and Thursday Night Silver).

For Fantasy, there should be a "results" view for a week that has completed, along with a "standings" for the season (running total). For the upcoming week a user should be abl

### User Flow:
1 - Enter site
Get splash screen as F.E. connects to API
2 - If user does not have active session they'll see the link to login/register
3 - Once logged in they'll see list of "leagues" to play (Sunday 30+, Silver, etc...)
4 - When user selects a league they then see the ongoing standings and last weeks results (shows all players scores and if the user played, shows their picks and results) and a link to play the upcoming week.
5 - Clicking link will bring up the lineup page.
6 - Lineup page shows lineup (either the players they've selected/submitted || the empty slots). User can then click the green + button on the right to select from a list of users for that position.

#### Pages:

**Splash Screen**
[not started]
**Login Page**
[not started]
**Sign-up Page**
[not started]
**League Page**
[not started]
**Lineup Page**
75% done
Display and allow user to edit their lineup for the upcoming round...

**Select Player Page** (need better name)
[not started]
**Player View**
[probably not necessary - so few stats available, simple card view from 'select player page' should suffice...]
**Game Results**
[not started]
#### Additional Components
**Nav**
[just starting now]
**Player Card**
[DONE]

**TODO**
* Make responsive...I imagine if anyone actually uses this, they'll do it on their phone at the rink 10 minutes before they play!
* Rename League container...
* Create add player function - will need to open a modal to list all players that can be added to that particular slot, when user clicks the + button, should add player to state and close modal.

**Other Ideas to Possibly Add Later**
* League wide comments/smack talk....
* Admin page to edit players/stats
* History view to show lineup/results for a specific week
* Teams page - to show league standings/schedule/players etc...
* Expanded player card view to show stats from last X number of games....
* Eventually change player card layout to use space around css - put player image in the middle, then have the different stats and info kind of hug the outline of the image - will save a lot of space for phone screens.
* Consider refactoring to use Redux... Not sure it's worth the effort yet - I don't think I'll have to do that much prop drilling..., but something to consider.

###API
This app will require an API and DB....which I haven't started yet. Since this readme is handy here, I'll likely keep some notes here while I'm going through the front end for the various endpoints/datapoints I'll need to develop later.

###Database
Going to use Postgres - the data we'll be dealing with benefits from having relational tables in this case. We'll have schedules and stats for multiple leagues, team tables, etc...

**Tables**
(general info now...will obviously need to be fleshed out quite a bit as this evolves)
league
players
users
schedule
game_results

___
##Usage:

**Start App:**
`npm start`

**Run Tests:**
`npm test`

**Build App for Deployment**
`npm run build`


**Eject (just don't)**
`npm run eject`



**More Info**
This app was bootstrapped with Create React App, to learn more:

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
