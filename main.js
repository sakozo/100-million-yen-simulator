
function showTab(selector){
  console.log(selector);
  
  $(".tabs-menu div").removeClass("active");

  $(".tabs-menu div[id='"+ selector +"']").addClass("active");
  
  $(".tabs-content > div").hide();
  
  if(selector==="tab-menu-a"){
    $("#tabs-a").show();
  }else if(selector==="tab-menu-b"){
    $("#tabs-b").show();
  }else if(selector==="tab-menu-c"){
    $("#tabs-c").show();
  }else if(selector==="tab-menu-d"){
    $("#tabs-d").show();
  }
}

$(document).ready(function(){
  showTab("tab-menu-a");
  
  $(".tabs-menu div").click(function(){
    var selector = $(this).attr("id");
    showTab(selector);
  });
});




var app1 = new Vue({
  el: "#example",
  data: {
    years: "",
    rate: "",
    tmoney: "",
  },
  computed: {
    tumitate: function () {
      if (this.years && this.rate) {
        var tumitate=
        100000000/((Math.pow((1+this.rate/100),this.years)-1)/(this.rate/100))
        return tumitate.toFixed(0);
      }

      return "";
    }
  }
});


var app2 = new Vue({
  el: "#original",
  data: {
    originalmmoney: "",
    originalyears: "",
    originalrate: "",
    originaltmoney: "",
  },
  computed: {
    tumitate2: function () {
      if (this.originalyears && this.originalrate) {
        var tumitate=
        this.originalmmoney/((Math.pow((1+this.originalrate/100),this.originalyears)-1)/(this.originalrate/100))
        return tumitate.toFixed(0);
      }

      return "";
    }
  }
});