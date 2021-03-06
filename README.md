## Data processing

Write a python script called 'readToDB.py' to store the data from the excel into a table in MySQL database

- DB Table Name: Export
- Process the data: Pandas

## Backend

Documentation of the api design could be found at [api docs](127.0.0.0.1:8000/api/docs)

- Language: Python
- Framework: Django, [RESTful framework](https://www.django-rest-framework.org/)
- Database: MySQL

### API Documentation

| URL                 | Method | Query Parameter |  Type   |                Response                |                     Description                      |
| ------------------- | :----: | :-------------: | :-----: | :------------------------------------: | :--------------------------------------------------: |
| /api/export/search  |  Get   |     keyword     | string  |             Max 10 results             |                keyword for searching                 |
|                     |        |     choice      | string  | With id, billno, indianCom, foreignCom |   category for searching(product,indian, foreign)    |
|                     |        |     isExact     | boolean |                                        |        Specify if one wants to exactly match         |
|                     |        |      page       | number  |                                        | Current page of search results, each page has max 10 |
| /api/export/product |  Get   |       id        | number  |  All info of the product with the id   |               Unique ID of the product               |

## Frontend

- Language: Typescript
- Framework: React
- Additional library: react-router, axios
- Style: [Semantic UI](https://semantic-ui.com/)

## Deployment

#### Time used in each part (Approximately)

- Refresh how DRF framework works, django queryset filter, APIView: 2h
- Set Django project, set connection to MySQL database: 1h
- Process data, store to MySQL database, add id: 1h
- API design, implementation: 4h
- Frontend: search page, product detail page: 4h
- API debugging using postman: 1h
- Other debugging: cors error, pagination: 2h
