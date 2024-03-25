async function getInfo() {
         try {
             const raw = await fetch('https://api.github.com/users/suryanshuverma0');
             
             if (!raw.ok) {
                 throw new Error(`HTTP error! Status: ${raw.status}`);
             }
     
             const data = await raw.json();
             console.log(data);
         } catch (error) {
             console.error('Error fetching data:', error);
         }
     }
     
     getInfo();
     