# node internal

- v8 engine
- node.js API (including lower level language like c / c++)
  - fs
  - http
  - path
  - crypto
- node.js binding (to connect js to lower level language)
- lib uv (for async process, file operation etc. using c / c++)
  - event loop
    - callback queue
  - async Input / Output
    - file system(handled by thread pool)
    - network(directly by OS, kernel)
  - thread pool(it is written in C and C has thread implementation)

# asynchronous

- at the same time

# non-blocking function

```
setTimeout(myFunction, 1000)
```

# how to node run code?

- process

  - code
  - memory
  - thread1
    - call stack
  - thread2
    - call stack

- JavaScript is single thread language
  - dealing with multi-thread is difficult
    - multi-thread language(Java, C) dealing with dead-lock is difficult
    - JavaScript decided not to have the difficulty

# event loop phases

- one loop check 4 phases
  - Timers
  - I/O inputs
  - setImmediate
  - Close Callbacks

# node / php / python

- php / python needs web server like Apache
- each request ask thread, so server has to have a lot of thread

# what is Node.js best at?

- good for Input / Output, CPU idle and asking other devices to handle tasks
- Netflix
- not good at process heavy calculation using CPU like machine learning or video processing
