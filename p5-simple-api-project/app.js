async function getUsers() {
     let url = 'https://jsonplaceholder.typicode.com/users';
     try {
         let res = await fetch(url);
         return await res.json();
     } catch (error) {
         console.log(error);
     }
}

async function getUserAvatar(username) {
     let url = 'https://avatars.dicebear.com/v2/avataaars/'+username+'.svg?mood[]=happy';
     try {
         let res = await fetch(url);
         return await res.json();
     } catch (error) {
         console.log(error);
     }
}

function showloader() {
     // var loader = document.getElementById('loader');
     // if (loader.classList.contains("hideloading"))
     //      loader.classList.remove("hideloading")
}

function hideloader() {
     //document.getElementById('loader').classList.add("hideloading");
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
          hideloader();
          let htmlSegment = 
               `
               <div class="card">
                    <div class="row">
                         <img src=${userAvatarUrl} class="card-img-top bg-light" style="">
                    </div>
                    <div class="card-body">
                         <h5 class="card-title"><b>${user.name}</b></h5>
                         <p class="card-text">📧 ${user.email}</p>
                         <p class="card-text">📞 ${user.phone}</p>
                         <p class="card-text">🌐 ${user.website}</p>
                    </div>
                    <div class="card-footer">
                         <div class="row">
                              <button type="button" class="btn btn-light col-md" onclick="heartClick">
                                   ❤️
                              </button>
                              <button type="button" class="btn btn-light col-md" onclick="editDetails">
                                   🖉
                              </button>
                              <button type="button" class="btn btn-light col-md" onclick="deleteDetails">
                                   🗑️
                              </button>
                         </div>
                     </div>
               </div>`;
          
          html += htmlSegment;
     });
 
     let container = document.querySelector('.card-columns');
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