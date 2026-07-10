const { count } = require('console');
const fs = require('fs');
const Parse = require('parse/node');
const path = require('path');

// import Parse from 'parse/node';
// import Parse from 'parse/dist/parse.min.js';

Parse.initialize('LJsRx6ZQQaHcy0CmDnrk60xk2kRl3RoJK4zWvgfw', 'wo5GMOprqCJ5FIaCC7mF3OAinFukXyFaFWbdjXFZ', '246ru4DTlyGgW5sSN8frA7XViriJW1GE1O2kCnIJ');
Parse.serverURL = 'https://parseapi.back4app.com';


const Icons = Parse.Object.extend('icons');
const Categories = Parse.Object.extend('categories');
const Tags = Parse.Object.extend('tags');

// read the iconBrewAlgolia.json file
const iconBrewAlgolia = JSON.parse(fs.readFileSync('iconBrewAlgolia.json', 'utf8'));
// console.log("iconBrewAlgolia: ", iconBrewAlgolia);

let iconList = [
        "abc",
        "academic-book",
        "accessibility",
        "activity",
        "add",
        "add-to-playlist",
        "airplay",
        "alarm-clock-2",
        "alarm-clock",
        "alert-with-circle",
        "algolia",
        "analogue-watch",
        "apple",
        "apple-watch",
        "archive",
        "arrow-bend-left-down",
        "arrow-bend-left-up",
        "arrow-bend-right-down",
        "arrow-bend-right-up",
        "arrow-bottom-right",
        "arrow-circle-backward",
        "arrow-circle-backward-five",
        "arrow-circle-backward-fiveteen",
        "arrow-circle-backward-ten",
        "arrow-circle-backward-twenty",
        "arrow-circle-bckwards-thirty",
        "arrow-circle-forward",
        "arrow-circle-forward-five",
        "arrow-circle-forward-fiveteen",
        "arrow-circle-forward-ten",
        "arrow-circle-forward-thirty",
        "arrow-circle-forward-twenty",
        "arrow-down",
        "arrow-down-left",
        "arrow-left",
        "arrow-right",
        "arrow-switch",
        "arrow-thick-down",
        "arrow-thick-left",
        "arrow-thick-right",
        "arrow-thick-up",
        "arrow-up",
        "arrow-up-left",
        "arrow-up-right",
        "bank",
        "basketball",
        "battery-horizontal-charging",
        "battery-horizontal-empty",
        "battery-horizontal-full-horizontal",
        "battery-horizontal-low",
        "battery-horizontal-medium",
        "battery-vertical-charging",
        "battery-vertical-empty",
        "battery-vertical-full",
        "battery-vertical-low",
        "battery-vertical-medium",
        "beaker",
        "bell",
        "bold",
        "bool-exclude",
        "bool-intersect",
        "bool-subtract",
        "bool-union",
        "border-all",
        "border-bottom",
        "border-horizontal",
        "border-left",
        "border-right",
        "border-top",
        "border-vertical",
        "brightness-down",
        "brightness-up",
        "bullet-list",
        "burger-menu",
        "calculator",
        "calendar-2",
        "calendar-2-booking",
        "calendar",
        "calendar-booking",
        "camera",
        "capitalise-text",
        "car",
        "categories",
        "chart-bar",
        "chart-pie",
        "check",
        "check-with-circle",
        "chevron-double-down",
        "chevron-double-left",
        "chevron-double-right",
        "chevron-double-up",
        "chevron-down",
        "chevron-left",
        "chevron-right",
        "chevron-up",
        "chip",
        "chromatica",
        "chromecast",
        "circle",
        "circle-circle",
        "circle-circle-down",
        "circle-circle-left",
        "circle-circle-right",
        "circle-circle-up",
        "circle-square",
        "circle-triangle",
        "circle-with-blocks",
        "circle-with-cross",
        "clarus-the-dogcow",
        "clipboard-empty",
        "clipboard-full",
        "clock",
        "close",
        "close-full-screen-arrow",
        "cloud",
        "command",
        "connections",
        "connectivity",
        "contrast",
        "creative-cloud",
        "credit-card",
        "cross-with-circle",
        "crown",
        "cursor-default",
        "cursor-pointer",
        "dashboard",
        "dashboard-one-is-filled",
        "databse",
        "display-zoom",
        "document",
        "document-code",
        "document-photo",
        "document-text",
        "document-video",
        "dot",
        "dot-matrix",
        "download",
        "dpad",
        "earth",
        "ellipses-horizontal",
        "ellipses-vertical",
        "email",
        "entertainment",
        "equal",
        "euro",
        "euro-with-circle",
        "exclamation-mark",
        "expand-horizontal",
        "expand-vertical",
        "eye",
        "figma",
        "film",
        "filters",
        "flag",
        "flame",
        "folder-2",
        "folder",
        "folder-add",
        "folder-alert",
        "folder-cross",
        "folder-minus",
        "folder-tick",
        "folders",
        "full-screen",
        "full-screen-arrow",
        "games",
        "github",
        "globe",
        "graph-line-down",
        "graph-line-up",
        "graphics-and-design",
        "grid",
        "hammer",
        "headphones",
        "health-and-fitness",
        "heart",
        "heartbeat-monitor",
        "helm",
        "helmet",
        "helmet-with-lights",
        "hoops",
        "hot-brew",
        "house",
        "hug-content-horizontal",
        "hug-content-vertical",
        "icon-brew",
        "inbox-tray",
        "internet-browser",
        "iphone",
        "italic",
        "key",
        "laptop",
        "layout-bottom",
        "layout-left",
        "layout-right",
        "layout-top",
        "life-buoy",
        "light-bulb",
        "lightning",
        "lights-off",
        "lights-on",
        "line-chart-down",
        "line-chart-down-arrow",
        "line-chart-up",
        "line-chart-up-arrow",
        "line-weight",
        "link",
        "loader",
        "location",
        "locked",
        "mac-mini",
        "mac-window",
        "macintosh",
        "magic-wand",
        "map-folded",
        "masonery",
        "medical",
        "message-bubble",
        "message-bubble-with-ellipses",
        "microphone",
        "money-note",
        "moon",
        "mouse-rectangular",
        "mouse-rectangular-wired",
        "mouse-rounded",
        "mouse-rounded-wired",
        "music",
        "music-note",
        "news",
        "night",
        "numbers",
        "open-source",
        "option",
        "outbox-tray",
        "padding-all",
        "padding-bottom",
        "padding-horizontal",
        "padding-left",
        "padding-right",
        "padding-top",
        "padding-vertical",
        "pause",
        "peace",
        "pencil",
        "pencil-tip",
        "person",
        "pharmacy",
        "phone-call",
        "phone-call-in",
        "phone-call-out",
        "phone-call-transfer",
        "phone-signal",
        "photo",
        "pin",
        "plane-landing",
        "plane-take-off",
        "play",
        "pocket",
        "power",
        "presentation",
        "presentation-graph",
        "productivity",
        "question-mark-with-circle",
        "radio",
        "radio-pole",
        "receipt",
        "rectangle",
        "rectangle-contract",
        "rectangle-expand",
        "rectangle-left-filled",
        "rectangle-left-filled-rounded",
        "rectangle-on-rectangle-horizontal",
        "rectangle-on-rectangle-vertical",
        "rectangle-right-filled",
        "rectangle-right-filled-rounded",
        "rectangle-small-with-blocks",
        "rectangle-with-blocks",
        "recycle-triangle",
        "return-down",
        "return-left",
        "return-right",
        "return-up",
        "retweet",
        "ribbon",
        "ribbon-add",
        "rocket",
        "rudder-wheel",
        "ruler",
        "scale",
        "scale-circle",
        "search",
        "share",
        "share-arrow",
        "share-cirlce",
        "sharing",
        "shield",
        "shopping-basket ",
        "shopping-basket",
        "shopping-cart-empty",
        "shopping-cart-full",
        "side-bar-left",
        "side-bar-right",
        "soda-can",
        "spacing-horizontal",
        "spacing-vertical",
        "sparks",
        "splash",
        "sports",
        "spotify",
        "sprout",
        "square",
        "square-and-pencil",
        "stack-horizontal",
        "stack-vertical",
        "star",
        "statement",
        "stop",
        "store",
        "strikethrough",
        "stroke-width",
        "tab-bottom",
        "tab-left",
        "tab-left-compact",
        "tab-right",
        "tab-right-compact",
        "tabcells",
        "tabcells-add",
        "tag",
        "tags",
        "take-away",
        "target",
        "taylor-swift",
        "text-1",
        "text-2",
        "text-3",
        "text-align-center",
        "text-align-justified",
        "text-align-left",
        "text-align-right",
        "tornado",
        "trash",
        "trash-with-lines",
        "tray",
        "tray-and-arrow-down",
        "tray-and-arrow-left",
        "tray-and-arrow-right",
        "tray-and-arrow-up",
        "tray-full",
        "tray-stacked",
        "tree-map-down",
        "tree-map-left",
        "tree-map-right",
        "tree-map-up",
        "triangle",
        "triangle-down",
        "triangle-down-filled",
        "triangle-down-outline",
        "triangle-equilateral",
        "triangle-left",
        "triangle-left-filled",
        "triangle-left-outline",
        "triangle-right",
        "triangle-right-filled",
        "triangle-right-outline",
        "triangle-up",
        "triangle-up-filled",
        "triangle-up-outline",
        "triangle-with-blocks",
        "truck",
        "twitter",
        "underline",
        "unlocked",
        "upload-to-cloud",
        "user",
        "wallet",
        "wallet-pass",
        "weather",
        "website-with-image",
        "website-with-text",
        "wesbite-scaffolding",
        "widgets",
        "wind",
        "windows-window"
    ]

// Create a function that iterates through the iconList array, find it on the exampleSchema array and create a new Parse object based and data from the respective icon on exampleSchema, but for the 'iconImage24px' and 'iconImage18px' property find the .svg file inside the 'icons/18px' and 'icons/24px' directories by adding -24px and 18px respectively, create e new Parse.File and set it to the 'iconImage24px' and 'iconImage18px' properties resepctively.


// Iterate through iconBrewAlgolia and creates an array of all unique tags and returns it
function createUniqueTagsArray() {
    let uniqueTags = [];
    iconBrewAlgolia.forEach(function (icon) {
        icon.tags.forEach(function (tag) {
            // console.log(tag.tag);
            if (uniqueTags.indexOf(tag.tag) === -1) {
                uniqueTags.push(tag.tag);
            }
        });
    });
    return uniqueTags;
}

// Iterate through iconBrewAlgolia and creates an array of all unique categories
function createUniqueCategoriesArray() {
    let uniqueCategories = [];
    iconBrewAlgolia.forEach(function (icon) {
        icon.categories.forEach(function (category) {
            if (uniqueCategories.indexOf(category.categoryName) === -1) {
                uniqueCategories.push(category.categoryName);
            }
        });
    });
    return uniqueCategories;
}

// Create a new Parse object for each unique tag and save it to the Tags class only if it's already not there
function createTagsParseObjects() {
    let uniqueTags = createUniqueTagsArray();
    uniqueTags.forEach(async function (tag) {
        // const Tags = Parse.Object.extend("tags");
        const query = new Parse.Query(Tags);
        query.equalTo("tag", tag);
        let results = await query.find(null, { useMasterKey: true });
        console.log("results: ", results);
        if (results.length === 0) {
            let tagParseObject = new Tags();
            tagParseObject.set("tag", tag);
            let tagsLeft = uniqueTags.length - uniqueTags.indexOf(tag);
            await tagParseObject.save();
            console.log("Tag: " + tag + " saved - " + uniqueTags.length + '/' + tagsLeft);
            return
        }else{
            return
        }
    });
}

// Create a new Parse object for each unique category and save it to the Categories class only if it's already not there
function createCategoriesParseObjects() {
    let uniqueCategories = createUniqueCategoriesArray();
    uniqueCategories.forEach(async function (category) {
        // const Tags = Parse.Object.extend("tags");
        const query = new Parse.Query(Categories);
        query.equalTo("categoryName", category);
        console.log("category: ", category);
        let results = await query.find(null, { useMasterKey: true });
        if (results.length === 0) {
            let categoryParseObject = new Categories();
            categoryParseObject.set("categoryName", category);
            let categoriesLeft = uniqueCategories.length - uniqueCategories.indexOf(category);
            await categoryParseObject.save();
            console.log("Category: " + category + " saved - " + uniqueCategories.length + '/' + categoriesLeft);
            return
        }else{
            return
        }
    });
}


async function createIconBrewParseObject(iconName) {
    try {
        let iconBrewAlgoliaObject = iconBrewAlgolia.filter(function (icon) {
            return icon.iconName === iconName;
        })[0];

        if (iconBrewAlgoliaObject) {
            let iconBrewParseObject = new Icons();            

            // first check if the icon is already there
            const query = new Parse.Query(Icons);
            query.equalTo("iconName", iconBrewAlgoliaObject.iconName);
            let results = await query.find(null, { useMasterKey: true });
            if (results.length != 0) {
                return
            }
            
            iconBrewParseObject.set("iconName", iconBrewAlgoliaObject.iconName);
            iconBrewParseObject.set("downloads", iconBrewAlgoliaObject.downloads);
            iconBrewParseObject.set("iconImage24px", new Parse.File(iconBrewAlgoliaObject.iconName + "-24px.svg", {
                base64: fs.readFileSync("./icons/24px/" + iconBrewAlgoliaObject.iconName + "-24px.svg").toString("base64")
            }));
            iconBrewParseObject.set("iconImage18px", new Parse.File(iconBrewAlgoliaObject.iconName + "-18px.svg", {
                base64: fs.readFileSync("./icons/18px/" + iconBrewAlgoliaObject.iconName + "-18px.svg").toString("base64")
            }));
            
            let categoriesRelation = iconBrewParseObject.relation("categories");
            iconBrewAlgoliaObject.categories.forEach(async function (category) {
                const query = new Parse.Query(Categories);
                query.equalTo("categoryName", category.categoryName);
                let results = await query.find(null, { useMasterKey: true });
                if (results.length > 0) {
                    categoriesRelation.add(results[0]);
                    await iconBrewParseObject.save();

                    // Also save the icon to the category
                    let iconsRelation = results[0].relation("icons");
                    // results[0].increment("iconCount");
                    iconsRelation.add(iconBrewParseObject);
                    await results[0].save();
                }
            });


            let tagsRelation = iconBrewParseObject.relation("tags");
            iconBrewAlgoliaObject.tags.forEach(async function (tag) {
                const query = new Parse.Query(Tags);
                query.equalTo("tag", tag.tag);
                let results = await query.find(null, { useMasterKey: true });
                if (results.length > 0) {
                    tagsRelation.add(results[0]);
                    await iconBrewParseObject.save();
                    // Also save the icon to the tag
                    let iconsRelation = results[0].relation("icons");
                    // results[0].increment("iconCount");
                    iconsRelation.add(iconBrewParseObject);
                    await results[0].save();
                }
            });

            await iconBrewParseObject.save()
            requests++;
            return;
        }
    } catch (error) {
        return handleParseError(error);
    }
}

function handleParseError(err) {
    console.error("parse error: ", err.code);

    switch (err.code) {
        case Parse.Error.INVALID_SESSION_TOKEN:
            break;
        default:
            break;
    }
}

var requests = 0;
var totalSaved = requests;

let objSaved = []

// iterate iconList and create a Parse object for each icon but do not move on to the next icon until the current one is saved, after each 9 icons, wait 2 seconds
async function createIconBrewParseObjects() {
    for (let i = requests; i < iconList.length; i++) {
        try {
            await createIconBrewParseObject(iconList[i]);
            totalSaved++;
            objSaved.push({ icon: iconList[i], length: totalSaved + "/" + iconList.length })
            // console.table(objSaved);
            // console.clear();
            console.log(iconList[i] + "\t \t " + totalSaved + "/" + iconList.length);
            await new Promise(resolve => setTimeout(resolve, 100));
            // if (requests === 9) {
            //     requests = 1;
            //     await new Promise(resolve => setTimeout(resolve, 3000));
            // }
        } catch (error) {
            i = i + totalSaved;
            await createIconBrewParseObject(iconList[i]);
            totalSaved++;
            console.log(iconList[i] + "\t \t " + totalSaved + "/" + iconList.length);
            await new Promise(resolve => setTimeout(resolve, 100));
            console.log("error: ", error);    
        }
    }
}

function createVueFiles() {
    const iconsDir = path.join(__dirname, 'icons'); // replace with your icons directory path
    try {

        iconList.forEach(iconName => {
            const icon18pxPath = path.join(iconsDir, '18px', `${iconName}-18px.svg`);
            const icon24pxPath = path.join(iconsDir, '24px', `${iconName}-24px.svg`);

            let icon18px = fs.readFileSync(icon18pxPath, 'utf8');
            let icon24px = fs.readFileSync(icon24pxPath, 'utf8');

            // icon18px.replace(/<svg /g, '<svg v-if="size === 18"'));
            icon18px = icon18px.replaceAll('<svg ', '<svg v-if="size === 18" ');
            icon18px = icon18px.replaceAll('stroke="currentColor"', ':stroke="color"');
            icon18px = icon18px.replaceAll('fill="currentColor"', ':fill="color"');
            
            icon24px = icon24px.replaceAll('<svg ', '<svg v-if="size === 24" ');
            icon24px = icon24px.replaceAll('stroke="currentColor"', ':stroke="color"');
            icon24px = icon24px.replaceAll('fill="currentColor"', ':fill="color"');

            // ${icon18px.replace(/currentColor/g, 'color')}
            // \n
            // ${icon24px.replace(/currentColor/g, 'inherit')}
            const template = `
<template>
        ${icon18px}
        \n
        ${icon24px}
</template>`;

        const script = `
<script>
    export default {
        name: '${iconName}Icon',
        props: {
            size: {
                type: Number,
                required: false,
                default: 24
            },
            color: {
                type: String,
                required: false,
                default: "currentColor"
            }
        }
    }
</script>`;

            const content = `${template}\n\n${script}`;

            const outputDir = path.join(__dirname, 'output'); // replace with your output directory path
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir);
            }

            // Remove all spaces and - in iconName and make it capital case after each space or - or if it is the first word
            const iconNameCamelCase = iconName.replace(/-| /g, ' ').split(' ').map((word, index) => {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }).join('');

            const outputPath = path.join(outputDir, `${iconNameCamelCase}Icon.vue`);
            fs.writeFileSync(outputPath, content);
        });

    } catch (error) {
        console.log(error);
    }
}

createVueFiles();

// a fuction that iterates through the iconList and writes an import statement for each icon like this: AdminPage: defineAsyncComponent(() =>import('./components/icons/AdminPageComponent.vue') )
function createImportStatements() {
    iconList.forEach(iconName => {
        const iconNameCamelCase = iconName.replace(/-| /g, ' ').split(' ').map((word, index) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
        console.log(`${iconNameCamelCase}: defineAsyncComponent(() =>import('./components/icons/${iconNameCamelCase}Icon.vue') ),`);
    });
}

// createImportStatements();
