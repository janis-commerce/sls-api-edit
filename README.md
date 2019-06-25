# Serverless API Edit

[![Build Status](https://travis-ci.org/janis-commerce/sls-api-edit.svg?branch=master)](https://travis-ci.org/janis-commerce/sls-api-edit)
[![Coverage Status](https://coveralls.io/repos/github/janis-commerce/sls-api-edit/badge.svg?branch=master)](https://coveralls.io/github/janis-commerce/sls-api-edit?branch=master)

An integration handler for Serverless and JANIS Views API Edit

# Installation

```
npm install @janiscommerce/sls-api-edit
```

# Usage

- API Edit Data
```js
'use strict';

const { SlsApiEditData } = require('@janiscommerce/sls-api-edit');

module.exports = SlsApiEditData.handler;
```


# Function minimal configuration

```yml
functions:
  handler: path/to/your.handler
  events:
    - http:
        integration: lambda
        path: view/{entity}/edit/data/{entityId}
        method: GET
        request:
          parameters:
            paths:
              entity: true
              entityId: true
```