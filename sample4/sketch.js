function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#F9F6E5");
  
  // 애니메이션 변수
  let time = millis() * 0.002;
  let wave = sin(time);
  let lerpAmt = (wave + 1) / 2;
  
  // 별 크기 변화
  let sizeMod = map(sin(time * 1.5), -1, 1, 0.8, 1.2);
  
  // 상자 색상 변화
  let boxColorA = lerpColor(color("#205E8E"), color("#D176B7"), lerpAmt); // 파랑 ➔ 분홍
  let boxColorStar = lerpColor(color("#FFCD00"), color("#B8E986"), lerpAmt); // 노랑 ➔ 연두
  let boxColorT = lerpColor(color("#7E8C84"), color("#1A8B9D"), lerpAmt); // 회색 ➔ 청록
  

  noStroke();
  fill(boxColorA); // A 상자
  quad(40, 40, 155, 40, 162, 190, 45, 190); 

  fill("#F9F6E5"); // A
  triangle(60, 80, 110, 80, 90, 90);
  quad(90, 80, 90, 90, 72, 170, 67, 170);
  quad(90, 90, 110, 80, 145, 170, 120, 170);
  triangle(75, 140, 105, 140, 75, 147);
  triangle(70, 165, 50, 170, 90, 170);
  triangle(125, 165, 90, 170, 160, 170);
  
  fill("#1A1A1A");
  quad(175, 105, 195, 105, 195, 175, 175, 175); // r
  arc(210, 140, 40, 70, radians(180), radians(0) ); // r
  triangle(158, 105, 175, 105, 175, 110); // r 삐침 부분 (위)
  triangle(175, 165, 175, 175, 215, 175); // r 삐침 부분 (아래)
  quad(245, 90, 265, 90, 265, 162, 245, 158); // t
  quad(230, 108, 280, 108, 280, 120, 230, 120); // t
  arc(266.5, 158, 43, 40, radians(0), radians(180) ); // t
  
  fill("#F9F6E5");
  arc(211.5, 142, 33, 37, radians(180), radians(0) ); // r 부분  
  arc(277.75, 153, 26, 30, radians(0), radians(180) ); // t 부분
  
  fill(boxColorStar); // 별 상자
  quad(290, 70, 405, 70, 400, 190, 290, 190);

  fill(boxColorT); // T 상자
  quad(162, 190, 290, 190, 295, 360, 160, 360); 
  
  fill("#F9F6E5"); // T
  quad(180, 220, 275, 220, 275, 230, 180, 230);
  quad(210, 220, 240, 220, 250, 340, 220, 340);
  triangle(180, 220, 195, 220, 180, 275);
  triangle(280, 220, 265, 220, 280, 275);
  triangle(235, 335, 190, 345, 280, 345);
  
  fill("#1A1A1A");
  ellipse(340, 310, 80, 75); // e
  ellipse(425, 310, 80, 75); // c
  quad(475, 230, 495, 230, 495, 342, 475, 342); // h
  quad(525, 295, 545, 300, 545, 342, 525, 342); // h
  arc(510, 300, 70, 50, radians(180), radians(0) ); // h
  
  fill("#F9F6E5");
  arc(337.5, 310, 37, 55, radians(180), radians(0) ); // e 부분
  arc(350, 310, 62, 52, radians(0), radians(180) ); // e 부분
  arc(422.5, 310, 37, 55, radians(180), radians(0) ); // c 부분
  arc(435, 310, 62, 52, radians(0), radians(180) ); // c 부분
  arc(510, 300, 30, 30, radians(180), radians(0) ); // h 부분
  
  fill("#1A1A1A");
  quad(320, 307, 380, 307, 380, 312, 320, 312); // e 가로선 부분
  triangle(445, 230, 495, 230, 495, 240); // h 삐침 부분 (위)
  triangle(475, 335, 475, 345, 515, 345); // h 삐침 부분 (왼쪽 아래)
  triangle(525, 335, 525, 345, 575, 345); // h 삐침 부분 (오른쪽 아래)
    
  // 별 회전 각도 설정
  let rot1 = wave * 0.5;
  let rot2 = -wave * 0.3;
  let rot3 = wave * 0.8;

  push(); // 별 1 회전 및 크기 제어
  translate(347, 130);
  rotate(rot1);
  strokeWeight(20 * sizeMod); 
  stroke("#F1107A");
  strokeCap(SQUARE);
  line(0, -35, 0, 0);
  line(33.29, -10.81, 0, 0);
  line(20.58, 28.31, 0, 0);
  line(-20.58, 28.31, 0, 0);
  line(-33.29, -10.81, 0, 0);
  pop();

  push(); // 별 2 회전 및 크기 제어
  translate(85, 290);
  rotate(rot2);
  strokeWeight(27 * sizeMod); 
  stroke("#E84A15");
  strokeCap(SQUARE);
  line(0, -50, 0, 0);
  line(47.55, -15.45, 0, 0);
  line(29.39, 40.45, 0, 0);
  line(-29.39, 40.45, 0, 0);
  line(-47.55, -15.45, 0, 0);
  pop();
  
  push(); // 별 3 회전 및 크기 제어
  translate(495, 112);
  rotate(rot3);
  strokeWeight(34 * sizeMod); 
  stroke("#006D35");
  strokeCap(SQUARE);
  line(0, -70, 0, 0);
  line(66.57, -21.63, 0, 0);
  line(41.14, 56.63, 0, 0);
  line(-41.14, 56.63, 0, 0);
  line(-66.57, -21.63, 0, 0);
  pop();
}