body {
  overflow: hidden;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  perspective: 800px;
}

#box {
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: rotateX(0deg) rotateY(0deg);
}

.side {
  position: absolute;
  width: 300px;
  height: 300px;
  opacity: 0.8;
  backface-visibility: hidden;
  border: 4.3px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.front {
  background-color: blue;
  transform: translateZ(150px);
}

.right {
  background-color: cyan;
  transform: rotateY(90deg) translateZ(150px);
}

.back {
  background-color: green;
  transform: rotateY(180deg) translateZ(150px);
}

.left {
  background-color: yellow;
  transform: rotateY(-90deg) translateZ(150px);
}

.top {
  background-color: #ff9cac;
  transform: rotateX(90deg) translateZ(150px);
}

.bottom {
  background-color: red;
  transform: rotateX(-90deg) translateZ(150px);
}

.front:before {
  content: "WELCOME TO MEEKETANK MECUBE";
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
}

.left:before {
  content: "LINKEDIN";
  font-size: 18px;
  font-weight: bold;
  color: black;
}

.back:before {
  content: "GITHUB PROJECT'S";
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.right:before {
  content: "EMAIL ME";
  font-size: 18px;
  font-weight: bold;
  color: black;
}

.top:before {
  content: "ABOUT ME";
  font-size: 18px;
  font-weight: bold;
  color: blue;
}

.bottom:before {
  content: "WEBSITE";
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: center;
}
