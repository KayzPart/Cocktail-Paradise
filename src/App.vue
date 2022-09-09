<template>
  <HomePage />
  <router-view />
  <FooterView />
</template>

<script>
import HomePage from '@/components/HomePage.vue'
import FooterView from '@/components/Footer.vue'
import ApiService from '@/services/ApiService.js'

const apiService = new ApiService()
export default {
  name: 'App',
  components: {
    HomePage, FooterView
  }
}
</script>
<style>
/* Reset CSS */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* Import font-family */
@font-face {
  font-family: "Magical Story";
  src: url(./assets/font/Magical\ Story.ttf) format('truetype');
}

/* Body background */
body {
  background-color: #fff3aa;
}

/* My classes */
.row-limit-size {
  max-width: 2000px;
  width: 100%;
}

a {
  text-decoration: none;
  cursor: pointer;
}

h1{
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
}
.box_sizing {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.show {
  display: block;
}

#app {
  font-family: "Magical Story";
}

/* Carousel */
.carousel {
  height: 300px;
  width: 100%;
  top: -150px;
}

.carousel__viewport {
  height: 100%;
}

.carousel__prev {
  left: 2%;
}

.carousel__next {
  right: 2%;
}
</style>
