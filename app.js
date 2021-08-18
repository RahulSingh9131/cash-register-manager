var billAmount=document.querySelector('#bill');
var cashGiven=document.querySelector('#cash');
var button=document.querySelector('#btn');
var message=document.querySelector('#error-message');
var noOfNotes=document.querySelectorAll('.no-of-notes');

//array of notes we have in store.
var notesList=[2000,500,100,20,10,5,1];

button.addEventListener('click',function clickHandeler(){
    message.style.display="none";
    if(billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
            var returnAmount=cashGiven.value-billAmount.value;
            remainingAmout(returnAmount);
        }else{
            showMessage("you are paying less amount");
        }
    }else{
        showMessage("bill amount should be greater than zero");
    }
});

function remainingAmout(returnAmount){
    for(var i=0;i<notesList.length;i++){
        var numberOfNotes=Math.trunc(returnAmount/notesList[i]);
        returnAmount%=notesList[i];
        noOfNotes[i].innerText=numberOfNotes;
    }
}

function showMessage(errorMessage){
    message.style.display="block";
    message.innerText=errorMessage;
}