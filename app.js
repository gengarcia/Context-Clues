var weapons = ['knife', 'grenade', 'spear', 'missile', 'metal hanger', 'AK-47', 'shotgun', 'ax', 'watergun', 'vase', 'boomerang', 'paper weight', 'screwdriver', 'harpoon', 'fork', 'scissors', 'brass knuckles', 'henny bottle', 'cord', 'taser'];

var amigo = ['Paola', 'Jessica', 'Yesi', 'Liz', 'Steezy'];

var loc = ['roof', 'bathroom', 'bar', 'garage', 'yacht', 'pool', 'back yard', 'attic', 'driveway', 'shed'];

document.addEventListener("DOMContentLoaded", function () {

    for (var i = 1; i < 100; i++) {
           var h3 = document.createElement("h3");
           h3.innerText = "Accusation " + i;

           h3.addEventListener('click', function () {

            var friend = amigo[Math.floor(Math.random() * amigo.length)];
               var weapon = weapons[Math.floor(Math.random() * weapons.length)];
               var location = loc[Math.floor(Math.random() * loc.length)];

               alert("Accusation " + i + ": I accuse " + friend + ',' + " with the " + weapon + " in the " + location + "!");
           });

           document.body.appendChild(h3);
        }
   });
