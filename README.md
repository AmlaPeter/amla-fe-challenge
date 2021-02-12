# AMLA Front End Technical Challenge

For this technical challenge we would like to review the minimal app in this repository and improve it. Suggested areas to look at are:

- Are there any bugs you can find and fix? (see hints below)
- Can you apply your knowledge of the technologies within to improve the code quality (look for bad practices and code smells)
  - Note we understand you may not be familiar with these technologies and this will be taken into consideration.
- Can you improve the structure of the code? Is there a new component you could introduce to remove some logic from the AppComponent?
- Can you improve the look and feel?

You should fork or clone this repository, commit your changes as you would normally and provide either a link to the publicly available forked repo on github, or a zip file of the repository (it's recommended you delete the node-modules directory before compressing) to the recruiter.

Note: if you feel you do not have time to make any changes to the app, please perform a peer review of the code and return this to the recruiter, though we prefer you make the improvements as described.

# Hints

- At AML Analytics we favour separating Presentation / Container components (smart/dumb), has this been adhered to here?
- Our testers have raised a bug ticket, noting that the after selecting a list - all of the updates for all lists are shown, not just for the list that was selected (can you write a unit test?)
- A feature request has been raised for the first list and update to be pre-selected.

# The App

At AML Analytics Ltd. we monitor Sanction lists as published by various governments, notify customers of each update and provide them details of the individuals within, for example: how many individuals were added, modified or removed and what were there names.

This is a minimal Angular App and associate API to display the details of these updates. There are three end points on the API

- http://localhost:4000/api/lists - this returns a list of sanction "Lists", these are displayed in a drop down at the top of the application
- http://localhost:4000/api/versions?listId=<listId> - given a list id this returns the details of a number of updates that have happened on the list. These are shown in the UI after selecting a list
- http://localhost:4000/api/details?versionId=<versionId> - give a version id this returns the list of individuals that there either added to, removed from or otherwise modified in the list, include there names. In the UI these are shown after clicking a list version.

To run the app and associated API run the following commands:

1.  `npm i`
2.  `npm start`
3.  The API is started on port 4000, the app will be accessible on http://localhost:4200

Note: we suggest using Visual Studio Code to edit this project.

If you have any issues running the app or any questions, please contact me at: peter@aml-analytics.com
