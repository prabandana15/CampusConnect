var userName = '';
var password = ''
var studentData;
// if(localStorage.getItem('students') != null){
//     collegeData = JSON.parse(localStorage.getItem('students'));
// }
function login(){
    userName = document.getElementById('username').value;
    password = document.getElementById('password').value;
    studentData = JSON.parse(localStorage.getItem(userName));
    if(studentData){
        // for(let i = 0;i<collegeData.length;i++){
            if(studentData.password == password){
               document.getElementById("eventsRedirect").click()
                // window.location.href = 'file:\\\C:\prabi\editedprojectcode\demo web\events page.html'
            }else{
                alert('please enter valid user name/password ')
            }
        // }
    }else{
        alert('please register first')
    }
}

function register(){
    var name = document.getElementById('name').value;
    var pwd = document.getElementById('Password1').value;
    var email = document.getElementById('email').value;
    var branch= document.getElementById('status').value;
    var year=  document.getElementById('year').value;
    if(name!=""){
        let student = {
            "password": pwd,
            "email":email,
            "branch": branch,
            "year": year
        }
        // collegeData.push(student)
        localStorage.setItem(name,JSON.stringify(student));
    }
    else{
        alert('username contains atleast one')
    }
    
}
 
 var soloDance = [],duetDance=[],groupDance=[];
 var soloSing = [],groupSing=[];
 var pottery = [],paint=[],basketMaking=[],paperToys=[],jewellery=[];
 var standupComedy = [],skit=[],speech=[];
function participate(category,type){
    switch(category){
        case 'Dance':
                if(type == 'Solo'){
                    var participant = document.getElementById('solodanceuser').value;
                    soloDance.push(participant);
                    localStorage.setItem('soloDancePerformers', soloDance);
                    alert('Succefully registered')
                }else if(type == 'Duet'){
                    var dparticipant1 = document.getElementById('duetdanceuser1').value;
                  
                    var dparticipant2 = document.getElementById('duetdanceuser2').value;
                
                    var pair="{'pair':"+dparticipant1+","+dparticipant2+"}"
                    duetDance.push(pair);
                    localStorage.setItem('duetDancePerformers', duetDance);
                    alert('Succefully registered')
                }else{
                    var gparticipant1 = document.getElementById('groupdanceuser1').value;
                    
                    var gparticipant2= document.getElementById('groupdanceuser2').value;
                   
                    var gparticipant3 = document.getElementById('groupdanceuser3').value;
                   
                    var gparticipant4 = document.getElementById('groupdanceuser4').value;
                    
                    var group="{'group':"+gparticipant1+","+gparticipant2+","+gparticipant3+","+gparticipant4+"}"
                    groupDance.push(group);
                    localStorage.setItem('groupDancePerformers', groupDance);
                    alert('Succefully registered')

                }
            break;

        case 'Sing':
                if(type=='Solo'){
                    var sparticipant = document.getElementById('solosinguser').value;
                    soloSing.push(sparticipant);
                    localStorage.setItem('soloSingPerformers', soloSing);
                    alert('Succefully registered')
                }
                else{
                    var sgparticipant1 = document.getElementById('groupsinguser1').value;
                    
                    var sgparticipant2 = document.getElementById('groupsinguser2').value;
                   
                    var sgparticipant3 = document.getElementById('groupsinguser3').value;
                   
                    var sgparticipant4 = document.getElementById('groupsinguser4').value;
                    var sgroup="{'group':"+sgparticipant1+","+sgparticipant2+","+sgparticipant3+","+sgparticipant4+"}"
                    groupSing.push(sgroup);
                    localStorage.setItem('groupSingPerformers', groupSing);
                    alert('Succefully registered')

                }
    
            break;

        case 'Handcraft':
                if(type = 'Paint'){
                    var paintparticipant = document.getElementById('paintuser').value;
                    paint.push(paintparticipant);
                    localStorage.setItem('paintingPerformers', paint);
                    alert('Succefully registered')
                }else if(type = 'Pottery'){
                    var potteryparticipant = document.getElementById('potteryUser').value;
                    pottery.push(potteryparticipant);
                    localStorage.setItem('potterymakingPerformers', pottery);
                    alert('Succefully registered')
                }
                else if(type = 'Basket Making'){
                    var basketMakingparticipant = document.getElementById('basketuser').value;
                    basketMaking.push(basketMakingparticipant);
                    localStorage.setItem('basketmakingPerformers', basketMaking);
                    alert('Succefully registered')
                }
                else if(type = 'Paper Toys'){
                    var paperToysparticipant = document.getElementById('papertoyuser').value;
                    paperToys.push(paperToysparticipant);
                    localStorage.setItem('papertoysmakingPerformers', paperToys);
                    alert('Succefully registered')
                }else{
                    var jewelleryparticipant = document.getElementById('jewelleryuser').value;
                    jewellery.push(jewelleryparticipant);
                    localStorage.setItem('jewellerymakingPerformers', jewellery);
                    alert('Succefully registered')
                }
            break;

        case 'Drama':
            if(type == 'Standup Comedy'){
                var scparticipant = document.getElementById('standupcomedyuser').value;
                standupComedy.push(scparticipant);
                localStorage.setItem('standupcomedyPerformers', standupComedy);
                alert('Succefully registered')
            }else if(type == 'Skit'){
                var skparticipant1 = document.getElementById('skituser1').value;
                var skparticipant2 = document.getElementById('skituser2').value;
                var skparticipant3 = document.getElementById('skituser3').value;
                var skparticipant4 = document.getElementById('skituser4').value;
                var skparticipant5 = document.getElementById('skituser5').value;
                var skparticipant6 = document.getElementById('skituser6').value;
                var group="{'pair':"+skparticipant1+","+skparticipant2+","+skparticipant3+","+skparticipant4+","+skparticipant5+","+skparticipant6+"}"
                skit.push(group);
                localStorage.setItem('skitPerformers', skit);
                alert('Succefully registered')
            }else{
                var speechparticipant = document.getElementById('speechuser').value;
                speech.push(speechparticipant);
                localStorage.setItem('speechPerformers', speech);
                alert('Succefully registered')
            }
            break
            
    }
}