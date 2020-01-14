// spec/
//   specs.js

//you can install jasmine-console-report

//npm i jasmine-console-reporter --save-dev

const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');


const jasmine = new Jasmine();
const jasmineConsoleReporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4|Object
    listStyle: 'indent', // "flat"|"indent"
    timeUnit: 'ms',      // "ms"|"ns"|"s"
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 }, // Object|Number
    activity: false,     // boolean or string ("dots"|"star"|"flip"|"bouncingBar"|...)
    emoji: true,
    beep: true
});

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.addReporter(jasmineConsoleReporter);

//package.json

"test:server:coverage" : "node spec/specs.js"

//that is bein more beaty in console report.


