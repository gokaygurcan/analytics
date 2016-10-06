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

Or you can deploy on OpenShift:

[![DEPLOY TO OpenShift](http://launch-shifter.rhcloud.com/launch/DEPLOY%20TO.svg)](https://openshift.redhat.com/app/console/application_type/custom?&cartridges[]=nodejs-0.10&initial_git_url=https://github.com/gokaygurcan/analytics.git&name=launch)

or run on your own machine:

```bash
git clone git@github.com:gokaygurcan/analytics.git
cd analytics
npm install
npm start
```


## Showcase

<table>
  <tr>
    <td><b>Type</b></td>
    <td><b>Google (svg)</b></td>
    <td><b>Google (png)</b></td>
    <td><b>Yandex (svg)</b></td>
    <td><b>Yandex (png)</b></td>
  </tr>
  <tr>
    <td><i>Flat square</i></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-google-flat-square.svg" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-google-flat-square.png" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-yandex-flat-square.svg" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-yandex-flat-square.png" /></td>
  </tr>
  <tr>
    <td><i>Flat</i></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-google-flat.svg" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-google-flat.png" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-yandex-flat.svg" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-yandex-flat.svg" /></td>
  </tr>
  <tr>
    <td><i>Plastic</i></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-google-plastic.svg" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-google-plastic.png" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-yandex-plastic.svg" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-yandex-plastic.png" /></td>
  </tr>
  <tr>
    <td><i>Social</i></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-google-social.svg" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-google-social.png" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-yandex-social.svg" /></td>
    <td><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/badge-yandex-social.png" /></td>
  </tr>
  <tr>
    <td><i>Pixel</i></td>
    <td colspan="4"><img src="https://cdn.rawgit.com/gokaygurcan/analytics/master/public/pixel.gif" /> (there is a pixel here)</td>
  </tr>
</table>


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
