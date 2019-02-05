# Overview

This project provides a set of test suites that test the functionality of RSS feed testing, RSS Feed properties, menu default state, and menu hiding/showing.

## Installation

Download the project folder into your preferred location. Unzip the files. This project contains test suites (located in jasmine/spec/feedreader.js) that test a javascript file (located in js/app.js).

## How to Run

Open index.html file in the root folder using your preferred browser. You can replace the js/app.js with your own script to test it.

## Test Suites

We have 4 test suites testing 7 specs.

1. RSS Feeds
    * Does  allFeeds object have a name?
    * Does allFeeds object contain URLs?
    * Was allFeeds variable defined?

2. Initial Entries
    * Does the initial entry have at least a single element within the container?

3. New Feed Selection
    * The new feed change its contents?

4. The Menu
    * Does the manu change its visibility when clicked?
    * Is the menu hidden by default?

