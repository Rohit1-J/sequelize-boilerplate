# Sequelize Boilerplate

This template generates the following folder structure

```
    -- root
    ---- config :: Config file to connect to database
    ---- controllers :: CRUD operations for each model
    ---- models :: DDL definitions
    ---- routes :: Express Router to invoke controller operations
    -- app.js :: Express app/server module
```

_**Note**: Seeders and Migrations are not generated automatically with this template_

## Purpose

This tempalate generates a bare minimum configuration and APIs for a single table.
This generates a model, controller and route for a table `User`

## How to use this template

This template uses postgres dependecies to run by default.
To use any other databases, the relevant dependecies needs to be manually installed and the relevant dialect needs to be updated in the `config/db.config.js` file

### `config/db.config.js`

This exports the required DB attributes needed for establishing a connection. The values are being read from an environment file

Create a `.env` file and update the below content

```
HOST = "<Database Host>"
USER = "<User>"
PASSWORD = "<Password>"
DB = "<Database>"
PORT = 5432 or <Any other port on which the database is running>
URI = "" #Optional
dialect= "<Dialect>"

```

### `models/index.js`

This exports the `db` object which has the sequelize objects and the model objects
Any new model that is added on top of this template should be added to this file for exports

**TODO**: Update this file where the new models added in the `models` directory are automatically added to the exports
