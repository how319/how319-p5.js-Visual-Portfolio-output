/*************************
1. mouse:
    - 마우스 버튼 클릭 시 옷 색상이 바뀜
    - 마우스 포인터 이동 시 눈동자가 해당 방향을 따라 움직임
2. keyboard:
    - 키보드의 W(w) 키를 누르면 머리카락 및 이어폰 줄이 흔들리는 효과를 켜고 끌 수 있음
    - 키보드의 Space 키를 누르면 상단의 음표 및 미소 효과를 켜고 끌 수 있음
    - 키보드의 A(a) 키를 누르면 양쪽 눈이 감김
*************************/

let humming = false; // humming: 음표 및 미소 효과
let wind = false; // wind: 머리카락 및 이어폰 줄 흔들림 효과

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#F9F6E5");
  
  let timer = frameCount % 120;
  let windX = 0;
  let bounce = 0;

  // windX 계산 (흔들림 효과 제어)
  if (wind) {
    if (timer < 60) {
      windX = timer * 0.15;
    } else {
      windX = (120 - timer) * 0.15;
    }
  }

  // bounce 계산 (음표 상하 움직임 제어)
  if (timer < 60) {
    bounce = timer * 0.1;
  } else {
    bounce = (120 - timer) * 0.1;
  }

  stroke(100); // 1. 머리카락
  strokeWeight(2);
  fill("#350A0A");
  ellipse(150 + windX * 0.5, 175, 240, 270); // back
  ellipse(225 + windX * 0.5, 160, 260, 280);
  ellipse(130 + windX, 250, 220, 150); // L
  ellipse(140 + windX, 350, 220, 160);
  ellipse(110 + windX, 450, 180, 150);
  ellipse(280 + windX, 240, 200, 170); // R
  ellipse(260 + windX, 320, 220, 175);
  ellipse(270 + windX, 440, 220, 160);
  noStroke(); // stroke 가림
  quad(90, 200, 310, 200, 310, 400, 90, 400);

  stroke(100); // 2. 옷 
  if (mouseIsPressed) {
    fill("#D7E9A4"); // 마우스 버튼 클릭 시 연두색
  } else {
    fill("#E0F2F1"); // 기존 하늘색
  }
  arc(200, 500, 415, 170, radians(180), radians(0)); // 어깨
  quad(-10, 500, 410, 500, 410, 610, -10, 610); // 몸통
  
  fill("#FBE2D5"); // 3. 피부 및 얼굴형
  quad(155, 350, 245, 350, 250, 420, 150, 420); // 목
  arc(200, 415, 100, 50, radians(0), radians(180)); // 넥라인
  arc(90, 240, 60, 80, radians(90), radians(270)); // 귀 L
  arc(310, 240, 60, 80, radians(270), radians(90)); // 귀 R
  ellipse(200, 230, 240, 270); // 얼굴
  beginShape(); // 턱
  curveVertex(131, 341);
  curveVertex(131, 341);
  curveVertex(200, 371);
  curveVertex(269, 341);
  curveVertex(269, 341);
  endShape();
  fill("#350A0A"); // 앞머리
  arc(90, 150, 100, 100, radians(-70), radians(130));
  arc(160, 100, 100, 140, radians(-30), radians(150));
  arc(300, 100, 180, 150, radians(60), radians(210));
  
  // 4. 눈
  let eyeX = map(mouseX, 0, width, -5, 0); // 마우스 포인터 이동 시 눈동자 움직임
  let eyeY = map(mouseY, 0, height, -1, 2);
  // A(a) 키 입력 시 양쪽 눈 감음
  if (keyIsPressed && (key === 'a' || key === 'A')) {
    stroke(100);
    strokeWeight(3);
    strokeCap(ROUND);
    noFill();
    arc(134, 230, 65, 40, radians(0), radians(180)); // 감은 눈 선 L
    arc(266, 230, 65, 40, radians(0), radians(180)); // 감은 눈 선 R
    arc(78, 230, 55, 25, radians(15), radians(40)); // 속눈썹 L
    arc(85, 236, 55, 25, radians(15), radians(40));
    arc(322, 230, 55, 25, radians(140), radians(165)); // 속눈썹 R
    arc(315, 236, 55, 25, radians(140), radians(165));
  } else {
    // 기존 눈
    noStroke();
    fill(255); // 눈 흰자
    ellipse(135, 230, 60, 35); // L
    ellipse(265, 230, 60, 35); // R
    fill("#350A0A"); // 홍채
    ellipse(135 + eyeX, 228 + eyeY, 30, 40); // L
    ellipse(265 + eyeX, 228 + eyeY, 30, 40); // R
    fill(255); // 안광
    ellipse(130 + eyeX, 220 + eyeY, 12, 15); // L
    ellipse(260 + eyeX, 220 + eyeY, 12, 15); // R
    stroke(100);
    noFill();
    strokeWeight(2); // 속눈썹
    arc(119, 210, 65, 25, radians(140), radians(165)); // L
    arc(127, 204, 65, 25, radians(140), radians(165));
    arc(281, 210, 65, 25, radians(15), radians(40)); // R
    arc(273, 204, 65, 25, radians(15), radians(40));
    arc(130, 221, 67, 27, radians(180), radians(0)); // 쌍커풀 L
    arc(270, 221, 67, 27, radians(180), radians(0)); // 쌍커풀 R
    strokeWeight(3); // 눈 위 선
    arc(134, 230, 65, 40, radians(180), radians(0)); // L
    arc(266, 230, 65, 40, radians(180), radians(0)); // R
  }

  noStroke(); // 5. detail
  fill("#F8BBD07F"); // 홍조
  ellipse(125, 270, 60, 25); // L
  ellipse(275, 270, 60, 25); // R
  if (mouseIsPressed) { // 옷
    stroke("#D7E9A4"); // 옷 stroke 가림 (마우스 버튼 클릭 시)
  } else {
    stroke("#E0F2F1"); // 옷 stroke 가림 (기존)
  }
  line(2, 500, 398, 500);
  stroke(100); // 눈썹
  strokeWeight(5);
  strokeCap(ROUND);
  noFill();
  arc(135, 195, 65, 17, radians(180), radians(0)); // L
  arc(265, 195, 65, 17, radians(180), radians(0)); // R
  strokeWeight(3); // 코
  bezier(195, 215, 195, 215, 185, 265, 180, 265); // 코 선
  bezier(180, 265, 175, 285, 185, 280, 190, 285); // 콧방울
  
  stroke(100); // 6. 입
  strokeWeight(3);
  noFill();
  // Space 키 입력 시 미소 효과
  if (humming) {
    arc(200, 312, 60, 23, radians(10), radians(170)); // 입술 1 (미소)
    arc(200, 340, 20, 3, radians(0), radians(180)); // 입술 2
  } else { // 기존
    arc(200, 320, 50, 5, radians(0), radians(180)); // 입술 1
    arc(200, 340, 20, 3, radians(0), radians(180)); // 입술 2
  }
  
  // 7. 이어폰
  strokeWeight(6); // 이어폰 stroke
  arc(200 + windX * 0.2, 320, 300, 365, radians(115), radians(195)); // L
  arc(72 + windX * 0.2, 615, 223, 312, radians(289), radians(0));
  arc(194 + windX * 0.2, 270, 300, 800, radians(5), radians(100)); // R
  stroke(255); // W(w) 키 입력 시 이어폰 줄 흔들림 효과
  strokeWeight(4);
  arc(200 + windX * 0.2, 320, 300, 365, radians(115), radians(195)); // L
  arc(72 + windX * 0.2, 615, 223, 312, radians(289), radians(0));
  arc(194 + windX * 0.2, 270, 300, 800, radians(5), radians(100)); // R
  stroke(100); // 이어폰 본체
  strokeWeight(2);
  fill(255);
  quad(44, 244, 61, 234, 61, 280, 50, 282); // L
  arc(60, 244, 31, 28, radians(180), radians(110));
  quad(356, 244, 339, 234, 339, 280, 350, 282); // R
  arc(340, 244, 31, 28, radians(70), radians(0));  
  strokeWeight(1); // 콧구멍
  fill(100);
  triangle(204, 282, 202, 285, 207, 285);

  if (humming) { // 8. Space 키 입력 시 음표 효과
    strokeWeight(2.5);
    fill(100);  // 검정 음표
    stroke(100);
    ellipse(365 + windX, 160 + bounce, 10, 7.5);
    line(370 + windX, 160 + bounce, 370 + windX, 141.5 + bounce);
    line(370 + windX, 141.5 + bounce, 378 + windX, 148 + bounce);
    fill(255); // 흰색 음표
    stroke(255);
    ellipse(335 + windX, 185 + bounce, 10, 7.5);
    line(340 + windX, 185 + bounce, 340 + windX, 166.5 + bounce);
    line(340 + windX, 166.5 + bounce, 348 + windX, 173 + bounce);
  }
}

// 9. 효과 지속
function keyPressed() {
  // Space 키: humming(음표/미소 효과) 지속
  if (key === ' ') humming = !humming;
  // W(w) 키: wind(머리카락/줄 흔들림 효과) 지속
  if (key === 'w' || key === 'W') wind = !wind;
  // S(s) 키: 10초 동안 GIF 저장
  if (key === 's' || key === 'S')
    saveGif('과제 3_20250301 신현지', 10)
}