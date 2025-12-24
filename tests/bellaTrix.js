const fs = require('fs')
const { browserSync } = require('vibium')

// Launch a browser (you'll see it open!)
const vibe = browserSync.launch()

// Go to Bellatrix demos website
vibe.go('https://demos.bellatrix.solutions/')
console.log('Loaded Bellatrix demos website')

// Take a screenshot
const png = vibe.screenshot()
//create folder screenshots if not exists
if (!fs.existsSync('screenshots')){
    fs.mkdirSync('screenshots');
}
//add screenshot to screenshots folder
// add timestamp with date_mm_dd_yyyy_hh_mm_ss format
const date = new Date();
const dateString = `${date.getFullYear()}_${(date.getMonth()+1).toString().padStart(2, '0')}_${date.getDate().toString().padStart(2, '0')}_${date.getHours().toString().padStart(2, '0')}_${date.getMinutes().toString().padStart(2, '0')}_${date.getSeconds().toString().padStart(2, '0')}`;
fs.writeFileSync(`screenshots/bellatrix_screenshot_${dateString}.png`, png)       
console.log('Saved bellatrix_screenshot.png')  

// Close the browser
vibe.quit()
console.log('Done!') 
