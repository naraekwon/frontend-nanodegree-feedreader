/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite about the RSS feeds definitions. */
    describe('RSS Feeds', function() {
        /*
         * This tests to make sure that allFeeds variable has been defined and 
         * that it is not empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*
         * This tests to make sure allFeeds objects have their URL defined
         * and that the URL is not empty.
         */
        it('have URL', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* 
         * This tests to make sure allFeeds objects have their names defined
         * and that it is not empty. 
         */
        it('have names', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* This is a new test suite named "The menu" */
    describe('The menu', function() {
        /* 
         * This tests to make sure the menu element is hidden by default.
         */
        it('is hidden by default.', function() {
            var isHidden = document.body.classList.contains('menu-hidden');
            expect(isHidden).toBe(true);
        });

        /*
        * This tests to make sure that the menu changes its visibility 
        * when the menu icon is clicked. 
        */
        it('changes its visibility when it is clicked', function() {
            var menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(document.body.classList.contains('menu-hidden')).not.toBe(true);
            menuIcon.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    });


    /* This is a new test suite named "Initial Entires" */
    describe('Initial Entries', function() {
        /* 
         * This tests to make sure when the loadFeed function is called and complete its work,
         * there is at least a single element within the contianer. 
         */
        beforeEach(function(done) {
            loadFeed(1, done);
        });

        it('have at least a single element within the container', function() {
            let feed = document.querySelector('.feed');
            let entries = feed.querySelectorAll('.entry');
            expect(entries.length).toBeGreaterThan(0);
        });
    });


    /* This is a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* 
         * This ensure that the content changes when a new feed is loaded by 
         * the loadFeed function. 
         */
        var preFeed, postFeed;

        beforeEach(function(done) {
            loadFeed(1, function() {
                preFeed = document.querySelector('.feed').innerHTML;
                loadFeed(2, function() {
                    postFeed = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        it('changes its contents', function() {
            expect(preFeed).not.toMatch(postFeed);
        });
    });
}());