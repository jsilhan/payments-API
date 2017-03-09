# One-Click API repo

This is the One-Click API for Czech & Slovak e-shop integration.


## Contents
- apiary.apib - this is the source of documentation in API Blueprint format, it is online published to [Apiary](http://docs.oneclickapi.apiary.io/). This can be edited directly using text editor or online using Apiary (synchronization is two-way)
- packages.json - dependecies for offline generation of HTML output
- gulpfile.js - Gulp task runner configuration

## Usage
- prerequisities: Node.js & NPM installed
- run `npm install` to install all dependencies
- run `gulp dist` to generate HTML output

