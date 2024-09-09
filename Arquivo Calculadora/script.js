function clcdr(opera) {
    let pons = parseFloat(document.getElementById('iem').value);
    let pins = parseFloat(document.getElementById('idem').value);
    let asnw = 0;

    let oprc = document.querySelector('input[name="oprc1"]:checked').value;

    if(isNaN(pons) || isNaN(pins)){
        alert('友達が多すぎるのは悪いことではない');
    }else{

        if (oprc == 'somr'){
            asnw = pons + pins;
        }else if (oprc == 'sbtr'){
            asnw = pons - pins;
        }else if (oprc == 'mltp'){
            asnw = pons * pins;
        }else if (oprc == 'divd'){
            asnw = pons / pins;
        }else if (oprc == 'pctg'){
            asnw = pons / 100 * pins;        
        }else if (oprc == 'fatr'){
            asnw = pons ** pins;
        }
        document.getElementById('rslt').innerText = 'Resultado:' + asnw;

    }
}