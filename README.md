# S.M.R.T. (the smart mirror)

This is a dashboard web app for a smart mirror display, showing the weather (Metoffice) and travel (TfL) updates. See my [blog post](http://vann.io/posts/projects/2016/01/03/smrt.html) about it.

### Dependencies

- [Node.js](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)
- [Sass (3.4+)](http://sass-lang.com/install)

### Installation

1. Install dependencies listed above
2. `npm install && bower install`
3. `grunt serve`

### Deployment

To build the project, run `grunt build`.
Deploy to the `prod` branch with `grunt buildcontrol:prod`.

#### Notes

Run the app in kiosk mode for full effect.
