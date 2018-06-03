# Udacity Feedreader Testing

This project uses jasmine to test of a web-based application that reads RSS feeds. 

## Preparation of Test
All files must be downloaded to test this app. After you receive the download, open the index.html file to proceed with the test.

### How to run 
- visit git hub repo
- Click "Clone in Desktop" / "Download ZIP"
- Open the folder
- Open `index.html` on your browser
- There should be several test results at the bottom of the screen

## Tests
RSS Feeds:
* The allFeeds variable has been defined and that it is not empty.
* The allFeeds object has URL property that is not empty.
* The allFeeds object has name property that names are not empty

The Menu:
* The menu is hidden by default
* THe menu toggles visibility when the menu icon is clicked.

Initial Entries:
* This test should show at least 1 entry when the loaded function is called and completes its work. The beforeEach functionallity is used before the test starts.

New Feed Selection:
* The content container should express the change from the old to the new

