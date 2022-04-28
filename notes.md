# NestJS - Zero to Hero

## Requirements
* Download and install [node](https://nodejs.org/en/download/)
* Install `yarn` with `npm`:
```
$ npm install --global yarn
```
Or with `brew` for MacOS:
```
$ brew install yarn
```

* Install `nestjs` cli
```
$ yarn global add @nestjs/cli
```
* Install [postman](https://www.postman.com/downloads/)

#### Libs:
`uuid`:

```shell
$ yarn add uuid
```
### App Structure
![img.png](images/img.png)

### Endpoints
![img_1.png](images/img_1.png)

## Get Started
```shell
$ nest -v nestjs-task-mamagement
```
and the choose `yarn`

This will create the project structure that looks like this
![img_2.png](images/img_2.png)

* `json` files are configuration files
* `src` include all the source files, and the main is the `main.ts`
* `AppModule` in `main.ts` is our `rootmodule`


## NestJS Modules
* Each app has at least one module - the root module
* Have a folder per module
* It's define by annotatinf a class with the `@Module` decorator
* `providers`, `controllers`, `exports` and `imports` are decorator properties

![img_3.png](images/img_3.png)
![img_4.png](images/img_4.png)

## Create a schematic with NestJS CLI
Modules are _schematics_, and we can create one by running:
```shell
$ nest g module tasks
```
This will generate one in the `app.modules` file of the project

#### Run the app
Run the standard `npm` command in development mode
```shell
$ yarn start:dev
``` 

## Controllers
* Handle requests and return responses
* Bound to specific path (like `/tasks`)
* Contain `handlers` - handle endpoints and request methods
* Defined with the `@Controller`

![img_5.png](images/img_5.png)

* Define a handler by using `@Get`, `@Post` etc

![img_6.png](images/img_6.png)

Create a controller with nest cli:
```shell
$ nest g controller tasks
```
#### Examples
![img_7.png](images/img_7.png)
![img_8.png](images/img_8.png)


## NestJS Providers
* Can be injected in constructors if decorated with `@Injectable`
* Can be whatever
* Must be provided to a module
* Can be exported from a module

## Services
* Implemented using providers - not all providers are services
* Can be impolemented as singleton, wrapped with `@Injectable`
* It's the main source of bussines logic

![img_9.png](images/img_9.png)
This is how services are injectable to a controller (through importing into modules and adding them into `providers:`)
![img_10.png](images/img_10.png)

Create services by runing
```shell
$ nest g service tasks --no-spec
```

## Dependency Injection
* Any component can inject a provider that is decorated with `@Injectable`
![img_11.png](images/img_11.png)

## Interfaces vs Classes
* Interfaces help us creating an object, but won't exist once the object is impolemented
* Classes do, and we can also add methods as well

That how all above work together
![img_12.png](images/img_12.png)

## Data Transfer Objects (DTO)
* In order to not change impoementations in different places, we can use DTO so we can changes things like types from a single place. DTO defined how data will be transfered over a network.
* Don't have any behavios. only serialization or deserialization
* Is not a model, only defines the shape of data, can be as simple as ![img_14.png](images/img_14.png)
* Can be defined with interfaces or classes (better classes as they allow more and wil be preserved on runtime).
* Can be used throughout a project
* Useful to validate data too

#### Example
![img_13.png](images/img_13.png)

### Notes
> `3000` is the standard port for the node applications - makes our nextjs server up and running

> `eslint` is the linter that we're using