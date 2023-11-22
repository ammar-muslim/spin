const options = [
    "دبلومة الشبكات بسعر 5000ج بدلا من 7000ج",
    "خصم 50% على مستوى اللغة الإيطالية",
    "مستويين بسعر 1000ج بدلا من 1400ج",
    "برنامج (ICDL & مستوى E & تطوير مهارات)",
    "أي كورس مع (سيشن ذاتي أو سيشن مهني أو توظيف)",
    "خصم 200 ج على أي كورس"
  ];
  
  let spinning = false;
  
  function spinWheel() {
    if (!spinning) {
      spinning = true;
      const wheel = document.getElementById("wheel");
      const resultDiv = document.getElementById("result");
      const spinBtn = document.getElementById("spinBtn");
      const arrow = document.getElementById("arrow");
  
      const degrees = 3600 + Math.floor(Math.random() * 360);
  
      wheel.style.transition = "transform 4s ease-out";
      wheel.style.transform = `rotate(${degrees}deg)`;
  
      // Disable button and change its color
      spinBtn.disabled = true;
      spinBtn.style.backgroundColor = "#8a8a8a";
      spinBtn.style.cursor = "not-allowed";
  
      setTimeout(() => {
        const arrowRotation = getRotationDegrees(arrow);
        const optionIndex = findOptionIndex(arrowRotation);
        const resultOption = options[optionIndex];
  
        resultDiv.innerText = resultOption;
  
        // Enable button and change its color after result is displayed
        spinBtn.disabled = false;
        spinBtn.style.backgroundColor = "#2c3e50";
        spinBtn.style.cursor = "pointer";
  
        // Reset the arrow to its initial position
        arrow.style.transform = `rotate(0deg)`;
        spinning = false;
      }, 4000);
    }
  }
  
  function getRotationDegrees(element) {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    return Math.round((Math.atan2(matrix.m21, matrix.m11) * (180 / Math.PI) + 360) % 360);
  }
  
  function findOptionIndex(rotation) {
    const optionAngle = 360 / options.length;
    const normalizedRotation = (rotation + optionAngle / 2) % 360;
    return Math.floor(normalizedRotation / optionAngle);
  }
  