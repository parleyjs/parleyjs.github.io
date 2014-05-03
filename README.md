#University_student_Government
 Simple landing page for Southern Tech University's Student Government Organization.
##Features
  - Mobile First responsive design
  - Bundled and minified Style and Script
  - Users can..
    1. Learn More about  USG
    2. VIew Relevant Forms
    3. View Upcoming events on a Calender
    4. Views relevant Links for organization
    5. VIew and contact Officers for USG
    6. See news for the Organization
    7. Join USG

##Setup
If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:
```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp Globally
Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*
```
npm install -g gulp
```

### Install Compass (if you haven't already)
The gulp-compass module relies on Compass already being installed on your system.
```
gem update --system
gem install compass
```
### Install npm dependencies
```
npm install
```
This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp and be amazed. :)
```
gulp
```

This will create and run the task defined in `gulpfile.js`. If you're on OS X,
and have Chrome installed, a window will open displaying the demo page. If not,
you can visit http://localhost:1337 to view the test page.
