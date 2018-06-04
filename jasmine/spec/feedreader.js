/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* In the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it("has a URL defined and that the URL is not empty", function () {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            }
        });


        /* In the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("has a name defined and that the name is not empty", function () {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            }
        });
    });


    /* A new test suite named "The menu" 
     * The menu element is hidden by default.*/
    describe("The menu", function () {
        const body = document.querySelector('body')
        it("is hidden by default", function () {
            
            expect(body.className).toBe('menu-hidden');
        });

        //The menu toggles visibility when the menu icon is clicked
        it("toggles visibility when the menu icon is clicked", function () {
            const iconClicker = document.querySelector('.menu-icon-link');
            iconClicker.click();
            expect(body.className).toBe('');
            iconClicker.click();
            expect(body.className).toBe('menu-hidden');
        });
    });


    //A new test suite named "Initial Entries"
    /*A test present at least 1 entry when the loadFeed
     * function is called and completes its work.
     * The beforeEach is used before the test starts.
     */
    describe("Initial Entries", function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it("should show at least a single entry element when the loadFeed function is called", function () {
            const entry = document.getElementsByClassName('entry');
            expect(entry.length).toBeGreaterThan(0);
        });
    });


    //A new test suite named "New Feed Selection"
    //The content changes when new feed is loaded using loaded function
    describe("New Feed Slection", function () {

        var initFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                initFeed = document.querySelector('.feed').innerHTML;

                loadFeed(1, done);
            });
        });

        it("changes content from old one to new one", function (done) {
            var newFeed = document.querySelector('.feed').innerHTML;
            expect(initFeed).not.toBe(newFeed);
            done();
        });
    });

}());