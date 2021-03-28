async function getUsers() {
     let url = 'https://jsonplaceholder.typicode.com/users';
     try {
         let res = await fetch(url);
         return await res.json();
     } catch (error) {
         console.log(error);
     }
}

// async function getUserAvatar(username) {
//      let url = 'https://avatars.dicebear.com/v2/avataaars/'+username+'.svg?mood[]=happy';
//      try {
//          let res = await fetch(url);
//          return await res.json();
//      } catch (error) {
//          console.log(error);
//      }
// }

function showloader() {
     var loader = document.getElementById('loader');
     if (loader.classList.contains("hideloading"))
          loader.classList.remove("hideloading")
}

function hideloader() {
     document.getElementById('loader').classList.add("hideloading");
}

function heartClick() {

}

function editDetails() {


}

function deleteDetails() {

}

async function renderUsers() {
     showloader();
     let users = await getUsers();
     hideloader();
     let html = '';
     users.forEach(user => {
          showloader();
          let userAvatarUrl = 'https://avatars.dicebear.com/v2/avataaars/'+user.username+'.svg?mood[]=happy';
          let htmlSegment = 
               `
               <div class="user">
                    <img src=${userAvatarUrl} class="card-img-top bg-light" style=""><br><br>
                    
                    <div class="card-body">
                         <h5 class="card-title"><b>${user.name}</b></h5><br>
                         <div>
                              <p style="display:flex;">
                              <span class="material-icons">email</span> 
                              ${user.email}
                              </p>
                         </div>
                         
                         <div>
                              <p style="display:flex;">
                              <span class="material-icons">local_phone</span> 
                              ${user.phone}
                              </p>
                         </div>

                         <div>
                              <p style="display:flex;">
                              <span class="material-icons">language</span> 
                              ${user.website}
                              </p>
                         </div>

                    </div>
                    <br>
                    <div style="display:flex;">
                         <button class="heart" onclick="heartClick">
                              <span class="material-icons">favorite_border</span>
                         </button>
                         <button class="edit" onclick="editDetails">
                              <span class="material-icons">edit</span>
                         </button>
                         <button class="delete" onclick="deleteDetails">
                              <span class="material-icons">delete</span>
                         </button>
                     </div>
               </div>`;
          
          html += htmlSegment;
          hideloader();
     });
 
     let container = document.querySelector('.container');
     container.innerHTML = html;
 }
 
 renderUsers();

 //<img src="${user.profileURL}" >
 //<a href="email:${user.email}">



//  <div class="user">
//  <img src=${userAvatarUrl} width="100" height="100">
//  <h2>${user.name}</h2>
//  <h2> 📧 ${user.email}</h2>
//  <h2>📞 ${user.phone}</h2>
//  <h2>🌐 ${user.website}</h2>
//  </div> <br> <br>