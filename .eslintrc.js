module.exports = {
    "plugins": [
	"react",
	"jest"
    ],
    "extends": "airbnb",
    "env": {
	"jest/globals": true,
	"node": true,
	"browser": true,
	"es6": true
    },
    "rules": {
	"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};
