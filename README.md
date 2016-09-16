# paste-node

Super Basic PasteBin Clone built with [Koa](http://koajs.com/), [MongoDB](https://www.mongodb.org/), [Jade](http://jade-lang.com/), [Bootstrap 4](http://v4-alpha.getbootstrap.com/) and [Prism.js](http://prismjs.com/).

Try it out at [paste-node.herokuapp.com](http://paste-node.herokuapp.com/)

## Features
* Clean code thanks to ES7 async/await, [Koa](http://koajs.com/) and [Babel](https://babeljs.io/)
* Full syntax highlighting via [Prism.js](http://prismjs.com/)
* Short URLs via [shortid](https://github.com/dylang/shortid), e.g. `NyQO9puMe`
* Full support for CLI requests with [curl](http://curl.haxx.se/) etc
* Textarea grows to fit content via [autosize](https://github.com/jackmoore/autosize)
* Automatic and configurable paste expiry
* Simple and responsive UI built with [Bootstrap 4](http://v4-alpha.getbootstrap.com/)

## Usage
```sh
# Simple paste
$ echo 'Hello World' | curl -F 'paste=<-' http://paste-node.herokuapp.com
http://paste-node.herokuapp.com/N15FNVqfg

# wget or any other tool is fine too:
$ wget --post-data 'paste=Hello from wget' -qO- http://paste-node.herokuapp.com

# Either form or multipart data is accepted:
$ curl -d 'paste=Sent as multipart' http://paste-node.herokuapp.com

# Specify the syntax to highlight:
$ git diff README.md | curl -F 'paste=<-' -F 'highlight=diff' http://paste-node.herokuapp.com
```
