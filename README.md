# netflix-mobile 

## What is it 
A simple mobile application implemented using react native with expo where users can see movies/TV series after they select a category. Users can sort contents using a dropdown list by either release date, imdb score or randomly. There is also a search bar where users can type to search something. 

## How to use 
The application consists of 2 screens which are main screen where users can select a category between movies and TV shows and listing screen where contents get displayed and features such as search bar and dropdown menu are. After selecting one of the categories , movies and TV shows, user gets navigated into listing screen. Listing screen is the screen where contents get displayed depending on the category selected and only the first 18 contents get displayed since no filters applied. There are two main components that users interact with which are search bar and dropdown menu . Dropdown menu allows users to see contents in sorted ordder depending on what option they chose. They can sort by release date (both new and old ), imdb score (higher score appears on top) and randomly. Users can only sort contents in the same category. All the movies get sorted if movies category was selected and the same thing applies for TV series. However, search bar allows users to find all the contents that get matched with whatever they type regardless of category . Filtering thanks to search bar starts to work when users type 3 or more letters but it works everytime user deletes a character and when input gets empty after deletion. Results of the current filter selected in the dropdown menu get displayed. For instance, contents were sorted by imdb ranking and user starts to type to find a movie, movie gets displayed on the screen and user starts to delete input using search bar. When user deletes all the characters , he/she will see contents sorted by imdb rankings since it is current filter. Lastly, there are some buttons and texts in the footer and header components that are pressable but nothing happens when they get rpressed other than an alert box popping up indicating that this does not lead to anywhere since this is not a real app. 

## How to test this app 
### Using APK File 
- drag and drop the apk file onto the screen of your android emulator. It'll be shown in your apps list. 

### Test in Development Mode 
- `git clone https://github.com/koksalp/netflix-mobile.git ` to clone the repo 
- `cd netflix-mobile` to navigate into the project folder     
- run `yarn install` to install all dependencies 
- run `yarn expo start` to start a development server   
- launch the app and test it either on an emulator device or on a physical device using expo go 
