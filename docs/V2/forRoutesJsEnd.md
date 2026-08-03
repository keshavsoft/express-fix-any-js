# Express Route Generation Flow

## Overview

This module automatically generates the required Express routing structure by executing different scripts. Each script is responsible for generating one part of the routing hierarchy.

------------------------------------------------------------
STEP 4: Generate Table Routes
------------------------------------------------------------

File:
test/v15/forRoutesJsEnd/routes.js

Purpose:
• Reads table names from the schema.
• Creates endpoint folders.
• Imports generated endpoint routers.
• Registers routes for every table.

Example:

Schema Table:
Doctors

Generated Code:

import { router as routerFromdoctors } from "./doctors/end-points.js";

router.use("/doctors", routerFromdoctors);

If another table exists:

Patients

Generated:

router.use("/patients", routerFrompatients);

------------------------------------------------------------
COMPLETE EXECUTION FLOW
------------------------------------------------------------

Run Test Script
      │
      ▼
Generate app.js
      │
      ▼
Generate Version Routes
      │
      ▼
Generate Table Routes
      │
      ▼
Generate Endpoint Methods
      │
      ▼
Ready-to-Use Express APIs

------------------------------------------------------------
PROJECT STRUCTURE
------------------------------------------------------------

app.js
│
├── api
│   ├── routes.js
│   │
│   ├── v1
│   │   ├── routes.js
│   │   │
│   │   ├── doctors
│   │   │   ├── end-points.js
│   │   │   ├── controller.js
│   │   │
│   │   ├── patients
│   │       ├── end-points.js
│   │
│   └── ...
│
└── server.js

------------------------------------------------------------
SUMMARY
------------------------------------------------------------

Step 1
File:
forAppJs/app.js

Purpose:
Generate main router imports and app.use() registrations.

------------------------------------------------------------

Step 2
File:
forEndPointsJs/end-points.js

Purpose:
Generate GET, POST, PUT and DELETE endpoint methods.

------------------------------------------------------------

Step 3
File:
forRoutesJs/routes.js

Purpose:
Generate version routes such as /v1.

------------------------------------------------------------

Step 4
File:
forRoutesJsEnd/routes.js

Purpose:
Generate table routes such as /doctors, /patients, etc.

------------------------------------------------------------
FINAL RESULT
------------------------------------------------------------

app.js
   │
   └── /api
         │
         └── /v1
               │
               ├── /doctors
               │      ├── GET
               │      ├── POST
               │      ├── PUT
               │      └── DELETE
               │
               ├── /patients
               │      ├── GET
               │      ├── POST
               │      ├── PUT
               │      └── DELETE
               │
               └── ...

This workflow automatically generates the complete Express routing hierarchy—from the main application router to version routes, table routes, and endpoint methods—based on the configured schema.