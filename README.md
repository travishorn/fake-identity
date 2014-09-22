# fake-identity.js

[![Build Status](https://travis-ci.org/travishorn/fake-identity.svg?branch=master)](https://travis-ci.org/travishorn/fake-identity)

Generate random identity objects including name, address, etc. This may be useful if you are trying to fill your application with random personal data.

## Features

- Generates a single random identity or multiple identities in an array.
- Includes first and last names, email address, phone number, street, city, state, zip code, date of birth, sex, company, and department.
- Email address is based off of name.
- First name matches sex.
- All names, streets, and cities are commonly found in the US.
- States are weighted on population, so more populous states appear more often.
- Zip codes are loosely based on state. Zip codes are weird so it's not perfect, though.
- Date of birth will be between 18 and 60.
- Usable in the browser or Node.js.
- No dependencies.

## Installation

### Browser

Add the following to your page:

    <script src="dist/fake-identity.js"></script>
    
This will make a new global variable named `Identity` available.

### Node

Run

    npm install fake-identity

Add the following to your application:

    var Identity = require('fake-identity');

## Usage

Once installed, just use `Identity.generate()` in your scripts to get an identity object with random values. The returned object looks like this:

    {
      firstName: "Amelia",
      lastName: "Wright",
      emailAddress: "awright@example.com",
      phoneNumber: "(555) 555-0155",
      street: "7327 Central Avenue",
      city: "Oxford",
      state: "TX",
      zipCode: "75045",
      dateOfBirth: Fri Jul 20 1962 00:00:00,
      sex: "female",
      company: "Contoso Pharmaceuticals",
      department: "Legal"
    }
    
You can also pass a number to generate more than one identity. Multiple identity objects are returned in an array like so:

    Identity.generate(3);
    
    [
      {
        firstName: ...
        lastName: ...
        ...
      },
      {
        firstName: ...
        lastName: ...
        ...
      },
      {
        firstName: ...
        lastName: ...
        ...
      }
    ]

## Tests

Run `gulp test`

Please note that, to run tests, you must clone the repository in git. Tests are not included in the NPM module.

## To do

- Add configuration options

## License

The MIT License (MIT)
Copyright © 2014 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.