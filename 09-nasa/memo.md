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
  - origin
    - protocol
    - host
    - port

- fix
  - add header option to response from server
    - Access-Control-Allow-Origin: https://www.google.com
    - Access-Control-Allow-Origin: \*

# model

- can be used multiple places
- router / controller is 1 to 1 relationship

# log middleware

- morgan
- log to new files in hrs / day
