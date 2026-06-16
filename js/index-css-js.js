const css = `
.header {
  display: flex;
  justify-content: center;
  width: 98vw;
  height: 10vh;
  margin: 1% 0% 1% 0%;
}

.navsel-container {
  display: flex;
  justify-content: left;
  align-items: end;
  width: 33.33%;
  height: auto;
}

.navsel {
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  min-width: min(100%, 200px);
  height: 6vh;
  padding: 12px 24px 12px 12px;
  line-height: 24px;
  border: solid 1px #999;
  border-radius: 6px;
  background-color: #333;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='180 -360 600 1200'%3E%3Cpath d='M1015 10q-10-10-23-10t-23 10L512 492 55 10Q45 0 32 0T9 10Q0 20 0 34t9 24l480 506q10 10 23 10t23-10l480-506q9-10 9-24t-9-24z'%20fill%3D%27slategray%27/%3E%3C/svg%3E");
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: calc(100% - 12px) center;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: normal;
  color: slategray;
  outline: none;
  scrollbar-width: none;
}

.navsel::-webkit-scrollbar {
  display: none;
}

.navsel option {
  color: inherit;
  background-color: #333;
  text-indent: 0;
}

.divlogo {
  display: flex;
  justify-content: center;
  width: 33.33%;
  height: auto;
}

.logo {
  object-fit: contain;
  width: auto;
  height: auto;
}

.rightmenu {
  display: flex;
  justify-content: center;
  width: 33.33%;
  height: auto;
}

.main {
  display: flex;
  margin-top: 1%;
  justify-content: center;
  align-content: center;
  width: 100vw;
  height: auto;
}

.coverflowcontainer {
  display: flex;
  margin-top: 4vh;
  background-color: rgba(30, 30, 30, 0.5);
  width: 98vw;
  height: 76vh;
  border-radius: 10px;
}

.coverflow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: auto;
  height: 75vh;
  width: 96vw;
  overflow-y: scroll;
  scrollbar-width: none;
}

.gametitle {
  margin: auto;
  margin: 1%;
  display: block;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: rgba(50, 50, 50, 1);
  border-radius: 10px;
}

.gameimagecontainer {
  display: flex;
  justify-content: center;
  width: 100%;
}

.gameimage {
  width: 100%;
  border-radius: 10px 10px 0px 0px;
}

.gamename {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6vh;
  padding-left: 3%;
  padding-right: 3%;
}

.gametext {
  text-align: center;
  overflow-y: scroll;
  scrollbar-width: none;
  display: flex;
  height: 2.2vh;
}

.gametitle:hover .gameimage {
  filter: saturate(200%);
}

.gametitle:hover {
  background-color: rgba(85, 85, 85, 1);
}

@media screen and (orientation: landscape) {
    @media only screen and (min-width: 1800px) and (max-width: 1999px) {

        .gametitle {
            width: 14vw;
            height: 35.31vh;
        }
    }

    @media only screen and (min-width: 1600px) and (max-width: 1799px) {

        .gametitle {
            width: 16vw;
        }
    }

    @media only screen and (min-width: 1400px) and (max-width: 1599px) {

        .gametitle {
            width: 18vw;
        }
    }

    @media only screen and (min-width: 1200px) and (max-width: 1399px) {

        .gametitle {
            width: 20vw;
        }
    }

    @media only screen and (min-width: 1000px) and (max-width: 1199px) {

        .gametitle {
            width: 22vw;
        }
    }

    @media only screen and (max-width: 300px) {

        .header,
        .main {
            display: none;
        }
    }
}

@media screen and (orientation: portrait) {

    body {
        font-size: 85%;
    }

    .header {
        margin: 0;
    }

    .rightmenu {
        display: none;
    }

    .navsel-container {
        margin: 0;
        align-items: center;
        width: 48%;
    }

    .gametitle {
        width: 40vw;
    }

    .dropdownmenu {
        display: none;
    }

    .rightmenu {
        display: none;
    }

    .header {
        justify-content: space-between;
        margin-top: 2vh;
        height: auto;
        margin-bottom: 4vh;
    }

    .divlogo {
        width: 48%;
    }

    .logo {
        width: 100%;
    }

    .coverflowcontainer {
        margin-top: 0;
        background-color: rgba(30, 30, 30, 0.2);
    }
}
`;
if (window.location.href === 'http://localhost/NSwitch/') {
  const style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);
}

window.addEventListener('resize', (event) => {
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
});
