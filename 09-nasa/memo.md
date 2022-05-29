# multiple package.json

- root
- client
- server

# separate server / express app

- separation of concern
- easy for socket setup

# cors error

- reason

  - browser restrict http request by `same-origin-policy` to prevent webpage steal security data or something
  - host page: localhost:3000
  - request1: localhost:3000 : ok
  - request2: localhost:5000 : ng : different origin

- fix
  - add cors header to response from server
