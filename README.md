# netflix-mobile 

## What is it 
A simple netflix-like mobile application implemented using react native with expo that only includes frontend design where users can see contents of selected category, sort them by different properties and filter them by typing a few letters to find a specific content. 

## How it works 
- The application consists of 2 screens which are main screen where users can select a category between movies and TV shows and listing screen where contents get displayed and features such as search bar and dropdown menu are. 
- After selecting one of the categories between movies and TV shows, users get navigated into the listing screen. 
- Listing screen is the screen where contents get displayed depending on the selected category and only the first 18 contents are shown when this screen is visited since there are no filters applied. 
- Search bar and dropdown menu are the main components that users interact with. 
- Dropdown menu allows users to see contents in sorted order depending on which option they choose. Options are: release date (both new and old), imdb score (higher score appears on top) and random. 
- Search bar allows users to find all the contents that get matched with whatever they type regardless of category. 
- Filtering thanks to search bar starts to work when users type 3 or more letters and continues everytime they change their input by typing or deleting until input length is less than 3. When this happens, previous results of the current filter get displayed. For instance, if a user sorted contents by imdb scores using dropwdown menu and search for something that is longer than or equal to 3 letters and then deletes it until 2 or less letters are left, contents would be sorted by imdb scores since that is the current option that user selected. 
- Lastly, there are some buttons and texts in the footer and header components that are pressable but nothing happens when they get pressed other than an alert box popping up indicating that this does not lead to anywhere since this is not a real app.      

## How to test this app 
### Using APK File 
- drag and drop the apk file onto the screen of your android emulator. It'll be shown in your apps list. 

### Test in Development Mode 
- run `git clone https://github.com/koksalp/netflix-mobile.git ` to clone the repo 
- run `cd netflix-mobile` to navigate into the project folder     
- run `yarn install` to install all dependencies 
- run `yarn expo start` to start a development server   
- launch the app and test it either on an emulator device or on a physical device using expo go 
