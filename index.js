/* eslint-disable class-methods-use-this */

let mix = require( 'laravel-mix' );

/**
 * Lint Javascript via ESLINT
 *
 * return {void}
 *
 */
class Eslint {
    /**
     * The optional name to be used when called by Mix.
     *
     * @return {String|Array}   Name
     */
    name() {
        return ['eslint'];
    }

    /**
     * All dependencies that should be installed by Mix.
     *
     * @return {Array}  Dependencies
     */
    dependencies() {
        this.requiresReload = 'Eslint dependencies have been installed. Please ensure you have added a config file.';

        return [
            'eslint',
            'eslint-loader',
        ];
    }

    /**
     * Rules to be merged with the master webpack loaders.
     *
     * @return {Array|Object}   Configuration
     */
    webpackRules() {
        return {
            enforce: 'pre',
            loader:  'eslint-loader',
            options: {
                emitWarning: false,
            },
            test:    /\.(js|vue)$/,
        };
    }
}

mix.extend( 'eslint', new Eslint() );
