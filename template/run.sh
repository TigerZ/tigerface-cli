#!/bin/sh
rm -rf ./lib/*
# rm -rf ./example/assets/*
babel --optional es7.objectRestSpread ./src --out-dir ./lib
# babel --optional es7.objectRestSpread ./example/src --out-dir ./example/assets
# npm run hello