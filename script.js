// FACE ID PRO
setTimeout(()=>{
document.getElementById("faceText").innerText="Visage reconnu ✔";
document.querySelector(".camera-frame").style.border="3px solid #00ff00";

setTimeout(()=>{
document.getElementById("faceID").classList.add("hidden");
document.getElementById("login").classList.remove("hidden");
},1500);

},3000);

// LOGIN
function login(){
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

if(email==="Samuellavigne50@gmail.com" && password==="bonjour2023"){
document.getElementById("login").classList.add("hidden");
document.getElementById("dashboard").classList.remove("hidden");
initChart();
showIsland("✅ Connexion réussie");
}else{
alert("Identifiants incorrects");
}
}

// MODE
function toggleMode(){
document.getElementById("screen").classList.toggle("light");
}

// MONTHLY CHART PREMIUM
function initChart(){
const ctx=document.getElementById("monthlyChart").getContext("2d");
new Chart(ctx,{
type:"line",
data:{
labels:["Jan","Fév","Mar","Avr","Mai","Juin"],
datasets:[{
label:"Dépenses mensuelles €",
data:[450,620,390,700,520,610],
borderColor:"#00c6ff",
backgroundColor:"rgba(0,198,255,0.2)",
fill:true,
tension:0.4
}]
},
options:{
animation:{duration:2500},
responsive:true
}
});
}

// DYNAMIC ISLAND
function showIsland(text){
const island=document.getElementById("island");
document.getElementById("islandText").innerText=text;
island.classList.add("island-active");
setTimeout(()=>{island.classList.remove("island-active");},3000);
}

// APPLE PAY ULTRA
function applePay(){
showIsland(" Pay en cours...");
if(navigator.vibrate){
navigator.vibrate([200,100,200]);
}
setTimeout(()=>{
showIsland("🚫 Paiement refusé - Compte bloqué");
},3000);
}
