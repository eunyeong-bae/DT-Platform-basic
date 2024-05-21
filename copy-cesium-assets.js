const path = require('path');
const fs = require('fs-extra');

const cesiumSource = 'node_modules/cesium/Build/Cesium';
const cesiumDestination = 'public/Cesium';

fs.copySync(path.join(cesiumSource, 'Workers'), path.join(cesiumDestination, 'Workers'));
fs.copySync(path.join(cesiumSource, 'Assets'), path.join(cesiumDestination, 'Assets'));
fs.copySync(path.join(cesiumSource, 'Widgets'), path.join(cesiumDestination, 'Widgets'));
fs.copySync(path.join(cesiumSource, 'ThirdParty'), path.join(cesiumDestination, 'ThirdParty'));
