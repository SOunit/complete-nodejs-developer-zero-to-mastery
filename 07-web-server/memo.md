# how to get page

- request url using browser
  - http://faceboook.com
- DNS server / Domain Name System
  - like google map
  - shop name returns address
  - URL returns IP address
- http / https server
  - port number specify service of server
    - email
    - http

# http request

- how to communicate with server

## sample

- method : post
- path : /messages
- body : {text: 'hello', photo: 'smile.jpg'}
- headers : Host: facebook.com
  - for meta data of http request

# http response

- headers: Content-Type: application/json
- body: {text: 'hi', photo: 'wave.jgp'}
- status code: 200

# endpoint

/friends
/messages

# origin

- origin is combination of protocol, host, port

- https://www.google.com/maps/
- protocol | https://
- host | www.google.com
- port | :3000

# same origin policy

- current origin = https://www.google.com
  - where JavaScript run and try to fetch data
- fetch1 = https://www.google.com
  - same origin with current origin, no problem
- fetch2 = https://facebook.com
  - different origin with current origin, cors error!

# for what? same origin policy

- bad case

  - webpageA try to get data from yourBankPage

- how to solve
  - browser set same origin policy to prevent data fetching

# CORS / Cross Origin Resource Sharing

- cors header
  - added to response
  - server has control

```
access-control-allow-origin: *
```

```
access-control-allow-origin: https://www.google.com
```

# handling request is complex without framework...

- let's use express!
- node is good at handling stream
