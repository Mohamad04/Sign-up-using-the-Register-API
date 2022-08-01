# Front End 
using React framework. 
cd the front-end folder and run "npm start" to run the app
1. once the application is up go to "/", path will show the design page
2. "/admin/login" so that the admon can login and a JWT token will be created and and send to the client side
3. "customers/signup" so sign the customers
4. "/customers" to see all the registered customers with pagination and an option to choose between 20, 40, 60 customers per page and filter (id, first name and email).
5. also  returns the average number of registrations within a specific period (last 24 hours, last week, last month, last 3 months, last year).


# Back End
using Express framework
created API's for :
 Login API using JWT authentication (Admin section)
 Logout API (Admin section)
 Register API to add new customers. (Front section)
 Customers API that returns list of registered customers with pagination and an option to choose between 20, 40, 60 customers per page and filter (id, first name and email).
 Average API that returns the average number of registrations within a specific period (last 24 hours, last week, last month, last 3 months, last year).
