#Build ReactJs with Production MODE
npm run build

#Move to build folder
cd build

#Clone index.html to 200.html
cp index.html 200.html

#Start Deploy to Surge
surge . kangcode-photo-app.surge.sh