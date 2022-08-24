<template>
  <header class="row-limit-size">
    <div id="background-header-filter">
      <section class="little_header">
        <figure>
          <img src="./assets/cocktail_logo.png" alt="">
        </figure>
        <BurgerMenu></BurgerMenu>
      </section>
    </div>
  </header>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import BurgerMenu from '@/components/BurgerMenu.vue'
export default {
  name: 'App',
  components: {
    BurgerMenu
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

/* My classes */
.row-limit-size {
  max-width: 2000px;
  width: 100%;
}

.show{
  display: block;
}

/* Header for all pages */
header {
  height: 100vh;
  background-image: url(./assets/backgroundHeader.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#background-header-filter {
  height: 100%;
  background-color: #f1a2416e;
}

.little_header {
  height: 200px;
  background-color: #f1A141;
  opacity: 0.85;
}
.little_header>figure{
  width: 400px;
  height: 200px;
}
.little_header>figure>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#app {
  font-family: "Magical Story";
}
</style>
