window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-50px";
          }
        }


var typed = new Typed(".Repeted_text",{

            strings : ["Frond-end Devloper" ,"UI/UX Devloper" ,"Freelancer" , "Web Devloper"],
             typeSpeed:100, 
             backspeed: 100, 
             backDelay: 1000,
            loop: true 
          }  )    
          
          
   async function File() {
            // window.open("C:\Users\Janvi\Desktop\CV(janvi)");

            let results = await axios({
              url: 'C:\Users\Janvi\Desktop\CV(janvi)',
              method: 'GET',
              responseType: 'blob'
           })
           let hidden_a = document.createElement('a');
           hidden_a.href = window.URL.createObjectURL(new Blob([results.data]));
           hidden_a.setAttribute('download', 'download_cv.pdf');
           document.body.appendChild(hidden_a);
           hidden_a.click();
         }  




       