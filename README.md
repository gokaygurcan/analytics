# Analytics
Analytics beacon for general purpose.

---

![analytics](https://analytics.gokaygurcan.com/UA-55204660-5/gokaygurcan/analytics.svg?style=flat-square)
![website](https://img.shields.io/website/https/analytics.gokaygurcan.com.svg?style=flat-square)
![travis ci](https://img.shields.io/travis/gokaygurcan/analytics.svg?style=flat-square)
![vulnerabilities](https://snyk.io/test/github/gokaygurcan/analytics/65f28c8313247b99daa4226ed27f5605085eceaf/badge.svg?style=flat-square)
![license](https://img.shields.io/github/license/gokaygurcan/analytics.svg?style=flat-square)

## Installation

```bash
git clone git@github.com:gokaygurcan/analytics.git
cd analytics
npm install
npm start
```

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

## License

GNU General Public Licence v3.0 © [Gökay Gürcan](https://www.gokaygurcan.com/)
