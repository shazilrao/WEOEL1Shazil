function myFunction() {
    alert("your Order was successfully ordered!"); let a=document.createElement('a');
      a.target='_blank';
      a.href='myPDF/StarCaters.pdf';

      //then use this code for alert
      if (window.confirm('By clicking on OK, You can download the invoice of your Order!'))
      {
      a.click();
      };
  }

  