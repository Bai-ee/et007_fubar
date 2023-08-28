const trackDir = "";
const bpm = 122.16;

const parts = [
    { file: "3.mp3", length: 2,  loop: 1 },
    { file: "5.mp3", length: 4,  loop: 1 },
    { file: "6.mp3", length: 4,  loop: 1 },
    { file: "8.mp3", length: 4,  loop: 1 },
    { file: "9.mp3", length: 4,  loop: 1 },
    { file: "10.mp3", length: 4,  loop: 1 },
    { file: "13.mp3", length: 4,  loop: 1 },
    { file: "16.mp3", length: 4,  loop: 1 },
    { file: "18.mp3", length: 4,  loop: 1 },    
    { file: "19.mp3", length: 4,  loop: 1 },
    { file: "20.mp3", length: 4,  loop: 1 },
];

const presets = [];
presets.push([
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
]);
presets.push([    
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
]);
presets.push([ 
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
]);
presets.push([ 
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
]);

const svgElement2 = document.getElementById('statusScriptIcon');
const newSvgContent2 = `
<circle cx="20" cy="20" r="18" stroke="#CEC6B3" stroke-width="4" fill="#576B68" />
<path d="M13 20 l5 5 l10 -10" stroke="#CEC6B3" stroke-width="4" fill="none" />`;

document.getElementById("statusScript").innerHTML = "Visual Assets Loaded";
document.getElementById('statusScript').style.color = '#90A423';
svgElement2.innerHTML = newSvgContent2;

const downloadName = "Audio_Soul_Project_(Deliver_Me_DUB)_EDIT.wav"
const boxHeight = 60; //min height == 40 -> otherwise clickable buttons are to small
const reverseScrolling = false;
