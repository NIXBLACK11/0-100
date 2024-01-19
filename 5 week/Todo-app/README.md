# Todo app
This project contains simple todo application:

- Anyone can create a todo
- Anyone can see their existing todos
- Anyone can mark a todo as done

Status Code	Meaning	When to Return
200	OK	Successful GET or POST request
201	Created	Successful creation of a new resource
204	No Content	Successful request with no additional content
400	Bad Request	Malformed request or missing parameters
401	Unauthorized	Authentication required or credentials invalid
403	Forbidden	Lack of permission for the requested resource
404	Not Found	Requested resource not found
405	Method Not Allowed	Unsupported HTTP method for the resource
409	Conflict	Request could not be completed due to a conflict
500	Internal Server Error	Unexpected server error
502	Bad Gateway	Invalid response received from upstream server
503	Service Unavailable	Server is not ready to handle the request
504	Gateway Timeout	Timeout while waiting for a response from upstream server

        npm create vite@latest