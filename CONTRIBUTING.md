# Contributing to react-inputs-validation

 First off, thanks for taking the time to contribute! Here are a little dev FAQ below.
 
### Q: How to development? 
**A**: ```npm run dev```

### Q: How to compile the ultimate files? 
**A**: ```npm run compile```, and the files will be locating in ```/lib``` folder.


### Q: What is the difference between ```umd_local```, ```umd_global``` and ```umd_global_min``` in the script of ```package.json```?
**A**: ```umd_local``` intend to compile / build a not ```window``` exposed variables for ```Textbox```,```Textarea``` ,```Select```, ```Checkbox``` and ```Radiobox```
while ```umd_global``` gives ```window.Textbox = Textbox``` if ```window``` exists.

Lastly ```umd_global_min``` minifies the assets and generates ```react-inputs-validation.min.js``` and ```react-inputs-validation.min.css```

They ruled by ```umd.local.config.js``` and ```umd.global.config.js```, which located in ```/src/webpack/``` folder.

### Q: What does ```build_gh_page``` do?
**A**: Just for building the gh page

