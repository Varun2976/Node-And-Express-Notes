// if u wanna install an npm package locally
// --> npm i <package_name>

/*
    Global commands
    npm install -g <package_name>
    sudo npm install -g <package_name> (for mac)
*/

/*
    package.json
    Writing manually the properties into the json file
    npm init (select instruction by instruction)
    npm init -y(download default)
*/

// ------------- EXAMPLE USAGE ------------

const _ = require('lodash');

const items = [1,[2,[3,[4,[5]]]]];

const NewItems = _.flattenDeep(items); // one of the methods of lodash that creates an array of arrays into a flat array

console.log(NewItems);

