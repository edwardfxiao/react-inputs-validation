### Q: How to development? 
**A**: ```npm run dev```

### Q: How to compile the ultimate files? 
**A**: ```npm run compile```


### Q: What is the difference between ```umd_local```, ```umd_global``` and ```umd_global_min``` in the script of ```package.json```?
**A**: ```umd_local``` intend to compile / build a not ```window``` exposed variables for ```Textbox```,```Textarea``` ,```Select```, ```Checkbox``` and ```Radiobox```
while ```umd_global``` gives ```window.Textbox = Textbox``` if ```window``` exists.

Lastly ```umd_global_min``` minifies the assets and generates ```react-inputs-validation.min.js``` and ```react-inputs-validation.min.css```

They ruled by ```umd.local.config.js``` and ```umd.global.config.js```, which located in ```/src/webpack/```

### Q: What does ```build_gh_page``` do?
**A**: Just for building the gh page

