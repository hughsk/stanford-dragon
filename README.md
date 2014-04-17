# stanford-dragon [![stable](http://hughsk.github.io/stability-badges/dist/stable.svg)](http://github.com/hughsk/stability-badges)

![stanford dragon](http://imgur.com/d8r89j9.png)

## Usage ##

[![stanford-dragon](https://nodei.co/npm/stanford-dragon.png?mini=true)](https://nodei.co/npm/stanford-dragon)

### require('stanford-dragon') ###

Returns an object with the following properties:

* `positions`: the position vertices of the dragon.
* `cells`: an indexed list of the dragon's positions.

You can require decimated versions of the original model too – by default,
quality level 2 is used, but the following are possible:

* `require('stanford-dragon/1')`: 43MB (the original model)
* `require('stanford-dragon/2')`: 9.4MB
* `require('stanford-dragon/3')`: 2.1MB
* `require('stanford-dragon/4')`: 476KB

It's all a trade-off between file size/performance and quality.
