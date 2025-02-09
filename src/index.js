const  edinitsy0_19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const ty10_90 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {

    var result = '';

    

        if (number === 0) 
        {
            result = 'zero';
        }
        else if (number <= 19) 
        {    
            result = razryad_1(number);
        } 
        else if (number < 100)
        {               
            result = razryad_10(number);
        }
        else if (number < 1000)
        {   
            result = razryad_100(number);
        }
        
        

        return result;

}

function razryad_1(number)
{
    result =   edinitsy0_19[number]
    return result;
}

function razryad_10(number)
{

   if (number <= 19) 
        {    
            return result = razryad_1(number);
        } 
        else{
            //98
            var razryadDesyatkov = Math.trunc(number/10); //9
            var razryadDesyatkovEdinits = number - (razryadDesyatkov*10); //8

            result =  ty10_90[razryadDesyatkov] + ' ' + razryad_1(razryadDesyatkovEdinits);
            return result.trim();
        }
}

function razryad_100(number)
{   
    //897
    //'nine hundred ninety seven'
    var razryadSoten = Math.trunc(number/100); //9
    var razryadDesyatkov = Math.trunc(number/10); //99
    var razryadDesyatkovEdinits = number - (razryadSoten*100); //8

    result =  razryad_1(razryadSoten) + ' hundred ' + razryad_10(razryadDesyatkovEdinits);
    return result.trim();
}

//  1000 passing (165ms)

//toReadable(1); // Will return 'one'
//toReadable(20); 
//toReadable(36); 
//toReadable(897); //will return 'eight hundred ninety seven'
