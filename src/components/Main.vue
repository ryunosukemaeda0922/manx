<template>
  <div class="main">
    <header>
      <nav class="header-link">
        <div class="header-right">
          <a href="#about" v-smooth-scroll>About</a>
          <a href="#skill" v-smooth-scroll>Skill</a>
          <a href="#works" v-smooth-scroll>Works</a>
          <a href="#contact" v-smooth-scroll>Contact</a>
        </div>
      </nav>
    </header>

    <section id="home" name="home">
      <div class="top-wrapper">
        <div class="header-name header-name-color">
          <h1>
            <span>Ryunosuke Maeda's portfolio</span>
          </h1>
        </div>
      </div>
    </section>

    <section id="about" name="about">
      <div class="about">
        <div class="container">
          <h2>ABOUT ME</h2>

          <div class="row">
            <div class="col-lg-4 about-left">
              <img src="../assets/icon.jpg" />
              <p class="name">Ryunosuke Maeda</p>
            </div>
            <div class="col-lg-8 about-right">
              <h3>エンジニア & 猫好き</h3>
              <p>
                Ryunosuke Maeda
                <a href="https://twitter.com/ryunosuke0922">@ryunosuke0922</a>
                <br />東京でWebエンジニアをしています。Web系にきて1年ちょっとになります。
                <br />遊技機の組み込み→SE→スマホアプリ開発→Web系と色々やっていました。
                <br />ジョブホッパー気味。
                <br />
              </p>
              <p style="margin-top:80px">五匹の猫と暮らしています</p>
              <div
                class="row fade"
                v-observe-visibility="visibilityChangedCat"
                v-bind:class="{ active: this.isVisible_Cat }"
              >
                <img src="../assets/cat1.png" />
                <img src="../assets/cat2.png" />
                <img src="../assets/cat3.png" />
                <img src="../assets/cat4.png" />
                <img src="../assets/cat5.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="about-low"></div>

    <section id="skill" name="skill">
      <div class="skill">
        <div class="container">
          <h2>SKILL</h2>
          <div
            class="row fade"
            v-observe-visibility="visibilityChangedSkill"
            v-bind:class="{ active: this.isVisible_skill }"
          >
            <div class="col-lg-2"></div>
            <div class="col-lg-4">
              <p>
                HTML/CSS
                <br />C/C++
                <br />PHP
                <br />JavaScript
                <br />Objective-C
              </p>
            </div>
            <div class="col-lg-4">
              <p>
                Laravel
                <br />ReactNative
                <br />Vue.js
                <br />JavaScript
              </p>
            </div>
            <div class="col-lg-2"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="works" name="works">
      <div class="works">
        <div class="container">
          <h2>WORKS</h2>

          <div
            class="row fade"
            v-observe-visibility="visibilityChangedWork"
            v-bind:class="{ active: this.isVisible_work }"
          >
            <div class="col-lg-2"></div>
            <div class="col-lg-4">
              <h3>現職</h3>
              <p>
                Laravel | PHP
                <br />業務改善Webアプリケーション
                <span>3ヶ月</span>
              </p>
              <p>
                iOS / Android | ReactNative | JavaScript
                <br />イベントアプリ
                <span>半年</span>
              </p>
              <p>
                iOS / Android | ReactNative | JavaScript
                <br />イベントアプリ
                <span>1年</span>
              </p>
            </div>
            <div class="col-lg-4">
              <h3>前職</h3>
              <p>
                iOS / Android | Objective-C / Java / C/C++
                <br />パチンコ、パチスロのネイティブアプリ開発
                <span>8ヶ月</span>
              </p>
              <p>
                アニメ版権 | 独自基盤 | C/C++
                <br />遊技機の液晶開発
                <span>1年半</span>
              </p>
              <p>
                オリジナル版権 | 独自基盤 | C/C++
                <br />遊技機の液晶開発
                <span>1年半</span>
              </p>
            </div>
            <div class="col-lg-2"></div>
          </div>
        </div>
      </div>
    </section>

    <div class="contact-up"></div>

    <section id="contact" name="contact">
      <div class="contact">
        <div class="container">
          <h2>CONTACT</h2>

          <div>
            <a href="https://twitter.com/ryunosuke0922">
              <p>Twitter</p>
            </a>
            <a href="https://qiita.com/ryunosuke0922">
              <p>Qiita</p>
            </a>
            <a href="https://www.instagram.com/_ryunosuke0922/">
              <p>Instagram</p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div id="copyrights">
      <div class="container">
        <p>
          &copy; Copyrights
          <strong>Ryunosuke</strong>. All Rights Reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data: function() {
    return {
      isVisible_Cat: false,
      isVisible_skill: false,
      isVisible_work: false
    };
  },
  methods: {
    visibilityChangedCat(isVisible) {
      this.isVisible_Cat = isVisible;
    },
    visibilityChangedSkill(isVisible) {
      this.isVisible_skill = isVisible;
    },
    visibilityChangedWork(isVisible) {
      this.isVisible_work = isVisible;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  color: #333;
  font-weight: lighter;
  letter-spacing: 2px;
}

p {
  font-weight: lighter;
  letter-spacing: 2px;
  line-height: 28px;
  margin-bottom: 25px;
}

.centered {
  text-align: center;
}

a {
  color: #f85c37;
  word-wrap: break-word;
  -webkit-transition: color 0.1s ease-in, background 0.1s ease-in;
  -moz-transition: color 0.1s ease-in, background 0.1s ease-in;
  -ms-transition: color 0.1s ease-in, background 0.1s ease-in;
  -o-transition: color 0.1s ease-in, background 0.1s ease-in;
  transition: color 0.1s ease-in, background 0.1s ease-in;
}

a:hover,
a:focus {
  color: #7b7b7b;
  text-decoration: none;
  outline: 0;
}

a:before,
a:after {
  -webkit-transition: color 0.1s ease-in, background 0.1s ease-in;
  -moz-transition: color 0.1s ease-in, background 0.1s ease-in;
  -ms-transition: color 0.1s ease-in, background 0.1s ease-in;
  -o-transition: color 0.1s ease-in, background 0.1s ease-in;
  transition: color 0.1s ease-in, background 0.1s ease-in;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

/*
*/

.top-wrapper {
  padding: 240px 0 240px 0;
  background: url(../assets/header-bg.png) no-repeat center top;
  background-size: cover;
  color: white;
  text-align: center;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.top-wrapper h1 {
  opacity: 0.7;
  font-size: 45px;
  letter-spacing: 5px;
}

@media screen and (max-width: 480px) {
  #headerwrap h1 {
    font-size: 40px;
  }
}

header {
  height: 55px;
  width: 100%;
  background-color: rgba(7, 19, 22, 0.5);
  position: fixed;
  top: 0;
  z-index: 10;
}

header .header-link {
  max-width: 1170px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

header .header-link .header-right {
  float: right;
  margin-right: -25px;
}

.header-link a {
  line-height: 55px;
  padding: 0 25px;
  color: white;
  display: block;
  float: left;
  transition: all 0.5s;
}

.header-link a:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.header-name {
  text-align: center;
  padding: 0;
  border-radius: 0;
  font-size: 1.8em;
  font-weight: 900;
}

.header-name h1 {
  position: relative;
  display: block;
  color: #eee;
  transition: 0.6s ease;
  text-decoration: none;
}

.header-name h1 span {
  position: relative;
  z-index: 2;
}

.header-name h1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  background: #eee;
  opacity: 0;
  transition: 0.4s ease;
  transform: scale(0, 1);
  transform-origin: center left;
}

.header-name h1:hover::before {
  opacity: 1 !important;
  transform: scale(1, 1) !important;
}

.header-name-color h1:hover {
  color: #333 !important;
}

.header-name-color h1 {
  padding: 10px 30px !important;
  vertical-align: middle !important;
}

.header-name-color h1 span {
  vertical-align: middle !important;
}

.about {
  padding-top: 100px;
  padding-bottom: 40px;
  background-color: #f2f2f2;
}

.about h2 {
  margin: 100px auto;
  color: #1a1a1a;
  font-size: 40px;
  line-height: 1.45;
  font-weight: 300;
  text-align: center;
}

.about-left {
  text-align: center;
}

.about-left img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

.about-left .name {
  font-size: 22px;
  font-weight: lighter;
  margin-top: 15px;
  letter-spacing: 2px;
}

.about-right img {
  width: 100px;
  height: 100px;
  margin: 0px 8px 8px 8px;
}

.about-right h3 {
  color: #1a1a1a;
  font-size: 28px;
  line-height: 1.45;
  font-weight: 300;
}

.about-right p {
  color: #1a1a1a;
  font-size: 16px;
}

.about-low {
  height: 200px;
  background: url(../assets/bg-up.png) no-repeat center top;
  background-size: cover;
}

.skill {
  padding-top: 70px;
  padding-bottom: 70px;
}

.skill h2 {
  margin: 100px auto;
  color: #1a1a1a;
  font-size: 40px;
  line-height: 1.45;
  font-weight: 300;
  text-align: center;
}

.skill p {
  text-align: center;
  color: #1a1a1a;
  font-size: 16px;
}

.works {
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: white;
}

.works h2 {
  margin: 100px auto;
  color: #1a1a1a;
  font-size: 40px;
  line-height: 1.45;
  font-weight: 300;
  text-align: center;
}

.works h3 {
  color: #1a1a1a;
  font-size: 28px;
  line-height: 1.45;
  font-weight: 300;
}

.works p {
  color: #1a1a1a;
  font-size: 16px;
}

.works p span {
  font-size: 12px;
}

.contact-up {
  height: 200px;
  background: url(../assets/bg-low.png) no-repeat center top;
  background-size: cover;
}

.contact {
  background: #f2f2f2;
  padding-top: 70px;
  padding-bottom: 170px;
  text-align: center;
}

.contact h2 {
  margin: 100px auto;
  color: #1a1a1a;
  font-size: 40px;
  line-height: 1.45;
  font-weight: 300;
  text-align: center;
}

#copyrights {
  background: #222222;
  padding: 20px 0;
  text-align: center;
  color: white;
}

#copyrights p {
  margin-bottom: 5px;
}

.fade {
  opacity: 0 !important;
  transform: translate(0, 30px) !important;
  transition: all 1000ms !important;
}
.active {
  opacity: 1 !important;
  transform: translate(0, 0) !important;
}
</style>
