<img src="https://github.com/IggyBlob/instire.io/blob/master/src/assets/img/instire.io-logo-github.png" width="300">

---
_instire.io_ allows Instagram users to get a simple, yet powerful insight on their Instagram success by compiling different profile metrics (followers, likes, comments, …) into one single value that can be compared, shared and discussed with friends and colleagues. 

You are currently inspecting the frontend / project landing page repository. For details on the backend service, please refer to the [instire.io-server repository](https://github.com/IggyBlob/instire.io-server).

## Live Preview
A live version of instire.io can be found at http://instire.io.paulhaunschmied.com. 

_Please note that instire.io is currently stuck in Instagram's review process, which every app has to pass before
being able to use the Instagram API in production. This means that instire.io is running in a sandbox API environment 
that can only be used by registered users at the moment. If you'd like to use instire.io with your personal Instagram 
account, please send me an e-mail to [inbox@paulhaunschmied.com](mailto:inbox@paulhaunschmied.com)._

## Setup
Angular requires [Node.js](https://nodejs.org/en/), so please download and install the appropriate runtime and npm for 
your system. Conveniently, Node.js and npm are distributed via package managers for most operating systems, so please 
refer to [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/) for more details.

The [Angular CLI](https://cli.angular.io), a command-line interface that eases Angular development, itself is 
distributed via npm and therefore no rocket science to install:

```bash
npm install -g @angular/cli
```

Clone the instire.io repository 

```bash
git clone https://github.com/IggyBlob/instire.io.git
```

Navigate to the project's root directory 

```bash
cd instire.io
```

Fetch the project's dependencies

```bash
npm install
```

Open the files `src/app/_services/login.service.ts` and `src/app/_services/user.service.ts` in your favourite editor and
replace the `<API HOST>` placeholder with a valid FQDN or IP address that points to the instire.io API server. Make sure
the API server is up and running before starting up the frontend.

### Running in Development Mode (Local)
Running the instire.io frontend on your local machine is quite easy, thanks to the Angular CLI:

```bash
ng serve [--host 0.0.0.0]
```

_The optional `--host 0.0.0.0` flag allows any host in your current network to access the Angular app via your host's IP
address. This behaviour may be useful during development, but is disabled by default._

Now you can access the Angular app using your favourite browser via

```bash
http://localhost:4200
```

### Running in Production Mode
Building artifacts for production is quite simple when using the Angular CLI:

```bash
ng build [--prod]
```

_The optional `--prod` flag tells the Angular CLI to generate a optimized version of your app with minified source code
fields, which yields smaller loading times._

After the command has finished, you'll find a newly generated directory `dist` in your project root, which holds the 
optimized production app that now can be deployed to AWS S3, Azure or your plain old FTP server.  

## Third-party libraries
instire.io uses numerous libraries developed by external developers as well as content that has been produced by third 
parties who may not necessarily share the opinions expressed on instire.io. Please find a list of these authors at
http://instire.io.paulhaunschmied.com/about/legal.