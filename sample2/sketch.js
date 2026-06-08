function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#F9F6E5");
  stroke(100); // 1. 머리카락
  strokeWeight(2);
  fill("#350A0A");
  ellipse(150, 175, 240, 270); // back
  ellipse(225, 160, 260, 280);
  ellipse(130, 250, 220, 150); // L
  ellipse(140, 350, 220, 160);
  ellipse(110, 450, 180, 150);
  ellipse(280, 240, 200, 170); // R
  ellipse(260, 320, 220, 175);
  ellipse(270, 440, 220, 160);
  noStroke(); // stroke 가림
  quad(90, 200, 310, 200, 310, 400, 90, 400);
  stroke(100); // 2. 옷
  strokeWeight(2);
  fill("#E0F2F1");
  arc(200, 500, 415, 170, radians(180), radians(0)); // 어깨
  quad(-10, 500, 410, 500, 410, 610, -10, 610); // 몸통
  fill("#FBE2D5"); // 3. 피부 및 얼굴형
  quad(155, 350, 245, 350, 250, 420, 150, 420); // 목
  arc(200, 415, 100, 50, radians(0), radians(180)); // 넥라인
  arc(90, 240, 60, 80, radians(90), radians(270)); // 귀 L
  arc(310, 240, 60, 80, radians(270), radians(90)); // 귀 R
  ellipse(200, 230, 240, 270); // 얼굴
  beginShape(); //턱
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

  noStroke(); // 4. detail 1
  fill(255); // 눈 흰자
  ellipse(135, 230, 60, 35); // L
  ellipse(265, 230, 60, 35); // R
  fill("#350A0A"); // 홍채
  ellipse(135, 228, 30, 40); // L
  ellipse(265, 228, 30, 40); // R
  fill(255); // 안광
  ellipse(130, 220, 12, 15); // L
  ellipse(260, 220, 12, 15); // R
  fill("#F8BBD07F"); // 홍조
  ellipse(125, 270, 60, 25); // L
  ellipse(275, 270, 60, 25); // R
  stroke("#E0F2F1"); // 옷 stroke 가림
  line(2, 500, 398, 500);

  stroke(100); // 5. detail 2
  strokeWeight(5);
  strokeCap(ROUND);
  noFill(); // 눈썹
  arc(135, 195, 65, 17, radians(180), radians(0)); // L
  arc(265, 195, 65, 17, radians(180), radians(0)); // R
  strokeWeight(2); // 속눈썹
  arc(119, 210, 65, 25, radians(140), radians(165)); // L
  arc(127, 204, 65, 25, radians(140), radians(165));
  arc(281, 210, 65, 25, radians(15), radians(40)); // R
  arc(273, 204, 65, 25, radians(15), radians(40));
  arc(130, 221, 67, 27, radians(180), radians(0)); // 쌍커풀 L
  arc(270, 221, 67, 27, radians(180), radians(0)); // 쌍커풀 R
  strokeWeight(3);
  arc(134, 230, 65, 40, radians(180), radians(0)); // 눈 위 선 L
  arc(266, 230, 65, 40, radians(180), radians(0)); // 눈 위 선 R
  bezier(195, 215, 195, 215, 185, 265, 180, 265); // 코 선
  bezier(180, 265, 175, 285, 185, 280, 190, 285); // 콧방울
  arc(200, 320, 50, 5, radians(0), radians(180)); // 입술 1
  arc(200, 340, 20, 3, radians(0), radians(180)); // 입술 2

  // 6. 이어폰
  strokeWeight(6); // 이어폰 stroke
  arc(200, 320, 300, 365, radians(115), radians(195)); // L
  arc(72, 615, 223, 312, radians(289), radians(0));
  arc(194, 270, 300, 800, radians(5), radians(100)); // R
  stroke(255); // 이어폰 줄
  strokeWeight(4);
  arc(200, 320, 300, 365, radians(115), radians(195)); // L
  arc(72, 615, 223, 312, radians(289), radians(0));
  arc(194, 270, 300, 800, radians(5), radians(100)); // R
  stroke(100); //콧구멍
  strokeWeight(1);
  fill(100);
  triangle(204, 282, 202, 285, 207, 285);
  strokeWeight(2); // 이어폰 본체
  fill(255);
  quad(44, 244, 61, 234, 61, 280, 50, 282); // L
  arc(60, 244, 31, 28, radians(180), radians(110));
  quad(356, 244, 339, 234, 339, 280, 350, 282); // R
  arc(340, 244, 31, 28, radians(70), radians(0));
}