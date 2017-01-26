#RHMAP-HSSH-SERVICE

RHMAP mBaaS Service wrapper for hssh to allow [hssh](https://www.npmjs.com/package/hssh) access to server.

* Port forward
* Shell access
* File transport


...


# Steps

1. Locally install `hssh`: `npm install -g hssh`
2. Create service in RHMAP and make it public accessible
3. Clone this repo and add the service git repo url as a remote.
4. Push forcely to RHMAP service.
5. deploy the service to a environment
6. get the public URL of the service from RHMAP.
7. On local machine, type `hssh <url_of_service>`
8. Type in your RHMAP usernamd and password
9. Enjoy

