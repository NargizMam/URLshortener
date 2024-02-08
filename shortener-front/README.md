# URL shortener

URL shortener. It consists of two parts - Backend and Frontend.
If you follow the provided link, the browser should perform a redirect to the URL that you entered in the field.
When making such a request, a new object is created in the database, and a unique ID is generated for it in the form of a string with a length of 6-7 characters. 
The characters should be only from the English alphabet, both lowercase and uppercase. A JSON object is returned in the response.

Note: The actual implementation of generating a unique ID may involve various techniques or algorithms depending on the programming language or framework you are using.