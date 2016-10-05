# Analytics
Analytics beacon for general purpose.

---

![analytics](https://analytics.gokaygurcan.com/UA-55204660-5/gokaygurcan/analytics.svg?style=flat-square)
![website](https://img.shields.io/website/https/analytics.gokaygurcan.com.svg?style=flat-square)
![travis ci](https://img.shields.io/travis/gokaygurcan/analytics.svg?style=flat-square)
![vulnerabilities](https://snyk.io/test/github/gokaygurcan/analytics/65f28c8313247b99daa4226ed27f5605085eceaf/badge.svg?style=flat-square)
![license](https://img.shields.io/github/license/gokaygurcan/analytics.svg?style=flat-square)


## Installation

You can deploy to Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

or run on your own machine:

```bash
git clone git@github.com:gokaygurcan/analytics.git
cd analytics
npm install
npm start
```


## Showcase

| Type        | Google (svg) | Google (png) | Yandex (svg) | Yandex (png) |
| ----------- | ------------ | ------------ | ------------ | ------------ |
| Flat square | ![google flat-square](public/badge-google-flat-square.svg) | ![google flat-square](public/badge-google-flat-square.png) | ![yandex flat-square](public/badge-yandex-flat-square.png) | ![yandex flat-square](public/badge-yandex-flat-square.png) |
| Flat        | ![google flat](public/badge-google-flat.svg) | ![google flat](public/badge-google-flat.png) | ![yandex flat](public/badge-yandex-flat.png) | ![yandex flat](public/badge-yandex-flat.png) |
| Plastic     | ![google plastic](public/badge-google-plastic.svg) | ![google plastic](public/badge-google-plastic.png) | ![yandex plastic](public/badge-yandex-plastic.png) | ![yandex plastic](public/badge-yandex-plastic.png) |
| Social      | ![google social](public/badge-google-social.svg) | ![google social](public/badge-google-social.png) | ![yandex social](public/badge-yandex-social.png) | ![yandex social](public/badge-yandex-social.png) |


## Usage

You can put the beacon in your Readme file to track GitHub statistics:

```markdown
![analytics](https://analytics.gokaygurcan.com/UA-XXXXXXXX-X/organization_name/repository_name.svg)
```

Or, you can call the pixel via AJAX call or something similar to track some pages/events:

```javascript
$.ajax({
  method: 'GET',
  url: 'https://analytics.gokaygurcan.com/UA-XXXXXXXX-X/organization_name/repository_name.gif'
}).done(function(response) {
  console.log(response); // this will be a 1x1 pixel image though
});
```

> Note: you can use anything you like but using organization_name/repository_name will help you if you want to use more than one repository with only one tracking id.


## Examples

### Google

You can use either _svg_ or _png_ extension with _style_ querystring. Default is _flat-square_.

- Flat square: `![analytics](https://analytics.gokaygurcan.com/UA-XXXXXXXX-X/organization_name/repository_name.svg?style=flat-square)`

- Flat: `![analytics](https://analytics.gokaygurcan.com/UA-XXXXXXXX-X/organization_name/repository_name.svg?style=flat)`

- Plastic: `![analytics](https://analytics.gokaygurcan.com/UA-XXXXXXXX-X/organization_name/repository_name.svg?style=plastic)`

- Social: `![analytics](https://analytics.gokaygurcan.com/UA-XXXXXXXX-X/organization_name/repository_name.svg?style=social)`

### Yandex

You can use either _svg_ or _png_ extension with _style_ querystring. Default is _flat-square_.

- Flat square: `![analytics](https://analytics.gokaygurcan.com/UA-XXXXXXXX-X/organization_name/repository_name.svg?style=flat-square)`

- Flat: `![analytics](https://analytics.gokaygurcan.com/UA-XXXXXXXX-X/organization_name/repository_name.svg?style=flat)`

- Plastic: `![analytics](https://analytics.gokaygurcan.com/UA-XXXXXXXX-X/organization_name/repository_name.svg?style=plastic)`

- Social: `![analytics](https://analytics.gokaygurcan.com/UA-XXXXXXXX-X/organization_name/repository_name.svg?style=social)`

### Pixel

You can only use gif extension, no svg or png can be used as a pixel image.

- Pixel: `![analytics](https://analytics.gokaygurcan.com/UA-XXXXXXXX-X/organization_name/repository_name.gif)`


## License

MIT © [Gökay Gürcan](https://www.gokaygurcan.com/)
