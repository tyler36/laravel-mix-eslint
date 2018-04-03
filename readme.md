# laravel-mix-eslint

This extension is designed to allow you add eslint to your laravel-mix chain.

## Installation
1. Require the package through ```yarn``` or ```npm```.
Laravel-mix will install the required dependencies as needed.
```
yarn add laravel-mix-eslint
```


2. Add a configuration file to your project root. By default, this package looks for a called ```.eslintrc.js``` in your project root. This can be overridden during the follow step.


3. Import package into your laravel webpack config file (```webpack.mix.js```) and call it.
```
require( 'laravel-mix-eslint' );
...
mix.eslint();
```

Defaults may be overridden by passing an object to the mix call:
```
mix.eslint({configFile:  path.join( {'default.js'} )});
```
