function copyCmd(text){
navigator.clipboard.writeText(text);
alert('Command copied: '+text);
}

document.getElementById('searchBox').addEventListener('keyup',function(){
let filter=this.value.toLowerCase();
let cards=document.querySelectorAll('.card');

cards.forEach(function(card){
let txt=card.innerText.toLowerCase();
if(txt.includes(filter))
card.style.display='block';
else
card.style.display='none';
});
});
