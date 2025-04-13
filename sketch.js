let button1, dropdown, button3, button4, button5;
let sprite1, sprite2, sprite3,  sprite4, sprite5; // 圖片精靈
let showSprite1 = false;
let showSprite2 = false;
let showSprite3 = false;
let showSprite4 = false;
let showSprite5 = false;
let iframe; // 用於嵌入內容的 iframe
let bgImage; // 背景圖片

function preload() {
  // 載入圖片精靈和背景圖片
  sprite1 = loadImage('Kula_09.gif');
  sprite2 = loadImage('Kula_11.gif'); // 圖片精靈 Kula_11.gif
  sprite3 = loadImage('Kula_07.gif');
  sprite4 = loadImage('Kula_10 (1).gif');
  sprite5 = loadImage('XIII_Kula.gif');
  bgImage = loadImage('121.png'); // 載入背景圖片
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 建立第一個按鈕
  button1 = createButton('自我介紹');
  button1.position(150, 50); // 往右移動 100px
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.style('border', '3px solid black'); // 框線變粗
  button1.style('border-radius', '10px'); // 四角變成圓形
  button1.style('background-color', '#A0D3F9'); // 按鈕顏色改成藍色
  button1.style('color', 'white'); // 按鈕文字顏色改成白色
  button1.mouseOver(() => showSprite1 = true);
  button1.mouseOut(() => showSprite1 = false);
  button1.mousePressed(() => {
    if (iframe) iframe.remove(); // 如果已存在 iframe，先移除
    iframe = createElement('iframe');
    iframe.attribute('src', 'self.js'); // 嵌入 self.js
    iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
    iframe.size(1000, 700); // 設定 iframe 的大小
  });

  // 建立下拉式選單
  dropdown = createSelect();
  dropdown.position(280, 50); // 往右移動 100px
  dropdown.size(100, 50);
  dropdown.style('font-size', '20px');
  dropdown.style('border', '3px solid black'); // 框線變粗
  dropdown.style('border-radius', '10px'); // 四角變成圓形
  dropdown.style('background-color', '#A0D3F9'); // 按鈕顏色改成藍色
  dropdown.style('color', 'white'); // 按鈕文字顏色改成白色
  dropdown.style('font-size', '20px');
  dropdown.option('選擇欄');
  dropdown.option('作品1');
  dropdown.option('作品2');
  dropdown.option('作品3');
  dropdown.option('作品4');
  dropdown.option('作品5');
  dropdown.mouseOver(() => showSprite2 = true); // 滑鼠移動到下拉式選單時顯示圖片精靈
  dropdown.mouseOut(() => showSprite2 = false); // 滑鼠移開時隱藏圖片精靈
  dropdown.changed(() => {
    if (iframe) iframe.remove(); // 如果已存在 iframe，先移除
    if (dropdown.value() === '作品1') {
      iframe = createElement('iframe');
      iframe.attribute('src', 'indexw1.html'); // 嵌入 index.html
      iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
      iframe.size(1000, 700); // 設定 iframe 的大小
    } else if (dropdown.value() === '作品2') {
      iframe = createElement('iframe');
      iframe.attribute('src', 'indexw2.html');
      iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
      iframe.size(1000, 700); // 設定 iframe 的大小
    }
    else if (dropdown.value() === '作品3') {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://411737025.github.io/202533/');
      iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
      iframe.size(1000, 700); // 設定 iframe 的大小
    } else if (dropdown.value() === '作品4') {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://411737025.github.io/20250310/');
      iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
      iframe.size(1000, 700); // 設定 iframe 的大小
    } else if (dropdown.value() === '作品5') {
      iframe = createElement('iframe');
      iframe.attribute('src', 'https://411737025.github.io/20250324/');
      iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
      iframe.size(1000, 700); // 設定 iframe 的大小
    }
  });

  // 建立第三個按鈕
  button3 = createButton('筆記');
  button3.position(410, 50); // 往右移動 100px
  button3.size(100, 50);
  button3.style('font-size', '20px');
  button3.style('border', '3px solid black'); // 框線變粗
  button3.style('border-radius', '10px'); // 四角變成圓形
  button3.style('background-color', '#A0D3F9'); // 按鈕顏色改成藍色
  button3.style('color', 'white'); // 按鈕文字顏色改成白色
  button3.mouseOver(() => showSprite3 = true);
  button3.mouseOut(() => showSprite3 = false);
  button3.mousePressed(() => {
    if (iframe) iframe.remove(); // 如果已存在 iframe，先移除
    iframe = createElement('iframe');
    iframe.attribute('src', 'https://hackmd.io/@37581246/H13OXmFAkg');
    iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
    iframe.size(1000, 700); // 設定 iframe 的大小
  });

  // 建立第四個按鈕
  button4 = createButton('測驗題目');
  button4.position(530, 50); // 往右移動 100px
  button4.size(100, 50);
  button4.style('font-size', '20px');
  button4.style('border', '3px solid black'); // 框線變粗
  button4.style('border-radius', '10px'); // 四角變成圓形
  button4.style('background-color', '#A0D3F9'); // 按鈕顏色改成藍色
  button4.style('color', 'white'); // 按鈕文字顏色改成白色
  button4.mouseOver(() => showSprite4 = true);
  button4.mouseOut(() => showSprite4 = false);
  button4.mousePressed(() => {
    if (iframe) iframe.remove(); // 如果已存在 iframe，先移除
    iframe = createElement('iframe');
    iframe.attribute('src', 'index1.html'); // 嵌入 index1.html
    iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
    iframe.size(1000, 700); // 設定 iframe 的大小
  });
  // 建立第五個按鈕
  button5 = createButton('教學影片');
  button5.position(650, 50); // 往右移動 100px
  button5.size(100, 50);
  button5.style('font-size', '20px');
  button5.style('border', '3px solid black'); // 框線變粗
  button5.style('border-radius', '10px'); // 四角變成圓形
  button5.style('background-color', '#A0D3F9'); // 按鈕顏色改成藍色
  button5.style('color', 'white'); // 按鈕文字顏色改成白色
  button5.mouseOver(() => showSprite5 = true);
  button5.mouseOut(() => showSprite5 = false);
  button5.mousePressed(() => {
    if (iframe) iframe.remove(); // 如果已存在 iframe，先移除
    iframe = createElement('iframe');
    iframe.attribute('src', 'https://cfchen58.synology.me/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%882024/B2/week8/20250407_091922.mp4'); // 影片網址
    iframe.position((windowWidth - 1100) / 2, (windowHeight - 600) / 2); // 設定 iframe 的位置為視窗中間
    iframe.size(1000, 700); // 設定 iframe 的大小
  });
}

function draw() {
  background(bgImage);

  noFill()//畫出來的圖形不上色
  stroke(((frameCount%255)+(frameCount*3))%255,frameCount%255,frameCount*100%255);
  //橢圓會依照指定的規則做變換
  strokeWeight(5)//框線寬度設置為5
	rectMode(CENTER)//設定方形座標在中心點
	for(var x=75;x<width;x=x+150)
	  	{	
	for(var y=75;y<height;y=y+150)
				{	 
var a = map(mouseX,0,width,0,75);
ellipse(x,y,150+a,(frameCount*20)%151+a);//畫出多個位置依序排列，
//寬為150+a且每次繪畫其高度會依照時間乘上20除上151的餘數+a改變
ellipse(x,y,(frameCount*20)%151+a,150+a);//畫出多個位置依序排列，
//高為150+a且每次繪畫其寬度會依照時間乘上20除上151的餘數+a改變
rect(x,y,150+a)////畫出多個位置依序排列，長寬為150+a的方形
}
}
  


  // 顯示圖片精靈，位置固定在 (35, 50)
  if (showSprite1) {
    image(sprite1, 35, 50, 100, 100);
  }
  if (showSprite2) {
    image(sprite2, 35, 50, 100, 100); // 顯示圖片精靈 Kula_11.gif
  }
  if (showSprite3) {
    image(sprite3, 35, 50, 100, 100);
  }
  if (showSprite4) {
    image(sprite4, 35, 50, 100, 100);
  }
  if (showSprite5) {
    image(sprite5, 35, 50, 100, 100);
  }

  // 設定海草的數量
  let seaweedCount = 30;

  // 繪製多條海草
  for (let j = 0; j < seaweedCount; j++) {
    // 計算線條的起始 x 座標
    let x = j * (width / seaweedCount);

    // 計算線條的起始 y 座標
    let y = height;

    // 設定海草的節點數量
    let segments = 44; // 確保總高度為 220

    // 設定每個節點的長度
    let segmentLength = 5; // 每個節點的長度較短，以控制總高度

    // 設定顏色，並設置透明度為 65%
    stroke(50 + j * 10, 100 + j * 5, 150 + j * 3, 165); // 透明度 65% 對應 255 * 0.65 = 165

    // 設定線條粗細
    strokeWeight(75);

    // 繪製從 y 軸開始延伸的搖擺直線
    let totalHeight = 0;
    for (let i = 0; i < segments; i++) {
      // 計算每個節點的擺動
      let angle = sin(frameCount * 0.05 + i * 0.5) * 0.5;

      // 計算下一個節點的位置
      let x2 = x + sin(angle) * segmentLength;
      let y2 = y - cos(angle) * segmentLength;

      // 繪製節點之間的線條
      line(x, y, x2, y2);

      // 更新 x 和 y 座標
      x = x2;
      y = y2;

      // 更新總高度
      totalHeight += segmentLength;

      // 如果總高度達到 220，則停止繪製
      if (totalHeight >= 220) {
        break;
      }
    }

    // 確保海草的總高度為 220
    if (totalHeight < 220) {
      let remainingHeight = 220 - totalHeight;
      let x2 = x;
      let y2 = y - remainingHeight;
      line(x, y, x2, y2);
    }
  }
}
