//DATA OF DIFFERENT PROFILES
const profiles = [
    {
        name : 'John Doe',
        age : 35,
        gender : 'male',
        lookingFor : 'female',
        location : 'Firozabad UP',
        image : 'https://randomuser.me/api/portraits/men/82.jpg'
    },

    {
        name : 'Mary Lynn',
        age : 31,
        gender : 'female',
        lookingFor : 'male',
        location : 'Dehradun UK',
        image : 'https://randomuser.me/api/portraits/women/82.jpg'
    },

    {
        name : 'Steve Smith',
        age : 42,
        gender : 'male',
        lookingFor : 'female',
        location : 'Telangana AP',
        image : 'https://randomuser.me/api/portraits/men/83.jpg'
    }
]

//Profile iterator
function profileIterator(profileData){
    let nextIndex = 0;

    return {
        next : function(){
            return nextIndex < profileData.length ?
            {value : profileData[nextIndex++] ,done : false}:
            {done : true}
        }
    }
}

const iterator = profileIterator(profiles);

nextProfile();

document.getElementById('next').addEventListener('click',nextProfile);

function nextProfile(){
    const currentProfile = iterator.next().value;

    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
    </ul> `;

    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
    `;
    }else{
        window.location.reload();
    }

}