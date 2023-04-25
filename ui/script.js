$(function () {
  var sound = new Audio("sound1.mp3");
  sound.volume = 0.5;
  
  window.addEventListener("message", function (e) {
    if (e.data.action == "open") {
      if (e.data.type == "success") {
        var icon = "fa-solid fa-circle-check";
        var title = e.data.title;
        var msg = e.data.message;
        var time = e.data.time;
        var color = "#0df04d";
        var align = e.data.position;
        var toast =
          "background: linear-gradient(20deg, rgb(4 255 79 / 21%), rgb(0, 0, 0));border-radius:20px;border: transparent;";
        var toastheader =
          "background: linear-gradient(20deg, rgb(4 255 79 / 21%), rgb(0, 0, 0));border-radius:20px 20px 0px 0px;border: transparent;";
        var toastbody =
          "background: linear-gradient(20deg, rgb(4 255 79 / 21%), rgb(0, 0, 0));border: transparent;font-size:18px;border-radius: 0px 0px 20px 20px;";
        OpenNotify(
          icon,
          title,
          msg,
          time,
          color,
          toast,
          toastheader,
          toastbody,align
        );
        sound.play();
      } else if (e.data.type == "info") {
        var icon = "fa-solid fa-circle-info";
        var title = e.data.title;
        var msg = e.data.message;
        var time = e.data.time;
        var color = "#0dcaf0";
        var align = e.data.position;
        var toast =
          "background: linear-gradient(20deg, rgb(4 216 255 / 21%), rgb(0, 0, 0));border-radius:20px;border: transparent;";
        var toastheader =
          "background: linear-gradient(20deg, rgb(4 216 255 / 21%), rgb(0, 0, 0));border-radius:20px 20px 0px 0px;border: transparent;";
        var toastbody =
          "background: linear-gradient(20deg, rgb(4 216 255 / 21%), rgb(0, 0, 0));border: transparent;font-size:18px; border-radius: 0px 0px 20px 20px;";
        OpenNotify(
          icon,
          title,
          msg,
          time,
          color,
          toast,
          toastheader,
          toastbody,align
        );
        sound.play();
      } else if (e.data.type == "error") {
        var icon = "fa-solid fa-circle-exclamation";
        var title = e.data.title;
        var msg = e.data.message;
        var time = e.data.time;
        var color = "#f00d0d";
        var align = e.data.position;
        var toast =
          "background: linear-gradient(20deg, rgb(255 0 0 / 21%), rgb(0, 0, 0));border-radius:20px;border: transparent;";
        var toastheader =
          "background: linear-gradient(20deg, rgb(255 0 0 / 21%), rgb(0, 0, 0));border-radius:20px 20px 0px 0px;border: transparent;";
        var toastbody =
          "background: linear-gradient(20deg, rgb(255 0 0 / 21%), rgb(0, 0, 0));border: transparent;font-size:18px;border-radius: 0px 0px 20px 20px;";
        OpenNotify(
          icon,
          title,
          msg,
          time,
          color,
          toast,
          toastheader,
          toastbody,align
        );
        sound.play();
      } else if (e.data.type == "warning") {
        var icon = "fa-solid fa-triangle-exclamation";
        var title = e.data.title;
        var msg = e.data.message;
        var time = e.data.time;
        var color = "#f0d50d";
        var align = e.data.position;
        var toast =
          "background: linear-gradient(20deg, rgb(255 242 0 / 21%), rgb(0, 0, 0));border-radius:20px;border: transparent;";
        var toastheader =
          "background: linear-gradient(20deg, rgb(255 242 0 / 21%), rgb(0, 0, 0));border-radius:20px 20px 0px 0px;border: transparent;";
        var toastbody =
          "background: linear-gradient(20deg, rgb(255 242 0 / 21%), rgb(0, 0, 0));border: transparent;font-size:18px; border-radius: 0px 0px 20px 20px;";
        OpenNotify(
          icon,
          title,
          msg,
          time,
          color,
          toast,
          toastheader,
          toastbody,align
        );
        sound.play();
      }
    }
    if (e.data.action == "opensetting") {
      OpenSetting(e.data.position);
    }
  });
});

function OpenNotify(
  icon,
  title,
  msg,
  time,
  color,
  toast,
  toastheader,
  toastbody,
  align
) {
  var number = Math.floor(Math.random() * 1000 + 1);
  var icon = icon;
  var toastheader = toastheader;
  var toastbody = toastbody;
  var color = color;
  var title = title;
  var textmsg = msg;
  var position = align;
  //var PoSition
  if (position === "top-right") {
    var PoSition = "top-0 end-0";
    var anim = "animate__fadeInRight";
    var anim_fadeout = "animate__fadeOutRight";
  } else if (position === "top-center") {
    var PoSition = "top-0 start-50 translate-middle-x";
    var anim = "animate__fadeInDown";
    var anim_fadeout = "animate__fadeOutUp";
  } else if (position === "top-left") {
    var PoSition = "top-0 start-0";
    var anim = "animate__fadeInLeft";
    var anim_fadeout = "animate__fadeOutLeft";
  } else if (position === "middle-right") {
    var PoSition = "top-50 end-0 translate-middle-y";
    var anim = "animate__fadeInRight";
    var anim_fadeout = "animate__fadeOutRight";
  } else if (position === "middle-left") {
    var PoSition = "top-50 start-0 translate-middle-y";
    var anim = "animate__fadeInLeft";
    var anim_fadeout = "animate__fadeOutLeft";
  } else if (position === "bottom-right") {
    var PoSition = "bottom-0 end-0";
    var anim = "animate__fadeInRight";
    var anim_fadeout = "animate__fadeOutRight";
  } else if (position === "bottom-center") {
    var PoSition = "bottom-0 start-50 translate-middle-x";
    var anim = "animate__fadeInUp";
    var anim_fadeout = "animate__fadeOutDown";
  } else if (position === "bottom-left") {
    var PoSition = "bottom-0 start-0";
    var anim = "animate__fadeInLeft";
    var anim_fadeout = "animate__fadeOutLeft";
  }
  $(`#containerclass`).addClass(PoSition);
  var NotiFication = `
  <div class="animate__animated ${anim}" id="anim-class-${number}">
    <div class = "notify-${number} pt-3 mx-2 my-3">
    <div class="toast show" style="${toast}" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header py-1 px-0" style="border-radius: 0px 0px 50px 50px;${toastheader}">
      <i class="${icon} ms-2" style = "font-size:25px;color:${color}"></i>
      <strong class="me-auto mx-2" style = "font-size:25px;color:${color}">${title}</strong>
      <div id="Progressbar-${number}" class="BaseCircle m-2"></div>
      </div>
      <div class="toast-body" style="${toastbody}">
        ${textmsg}
      </div>
    </div>
    </div>
   </div>`;
  $("#notify").append(NotiFication);
  Progressbar = new ProgressBar.Circle(`#Progressbar-${number}`, {
    color: color,
    trailColor: "#2f2f2f",
    strokeWidth: 12,
    trailWidth: 12,
    duration: time - 2,
    easing: "easeInOut",
  });
  Progressbar.animate(100 / 100);
  setTimeout(function () {
    $(`#anim-class-${number}`).removeClass(anim).addClass(anim_fadeout);
    $(`.notify-${number}`).fadeOut("slow");
    $(`#Progressbar-${number}`).fadeOut("slow");
  }, time);
}

function OpenSetting(position) { 
  postext(position);
  if (position === "top-right") {
    var PoSition = "top-0 end-0";
   } else if (position === "top-center") {
     var PoSition = "top-0 start-50 translate-middle-x";
   } else if (position === "top-left"){
     var PoSition = "top-0 start-0";
   }else if (position === "middle-right"){
     var PoSition = "top-50 end-0 translate-middle-y";
   }else if (position === "middle-left"){
     var PoSition = "top-50 start-0 translate-middle-y";
   }else if (position === "bottom-right"){
     var PoSition = "bottom-0 end-0";
   }else if (position === "bottom-center"){
     var PoSition = "bottom-0 start-50 translate-middle-x";
   }else if (position === "bottom-left"){
     var PoSition = "bottom-0 start-0";
   }
  $("#containerclass").removeClass(PoSition);
  $('.container-fluid').css("display", "block");
  $('body').css({"background-color":"rgba(0, 0, 0, 0.514)"});
}


$("#top-left").on("click", function (e) {
  postext("top-left");
  sendNUI('notify-position',"top-left");
});
$("#top-right").on("click", function (e) {
  postext("top-right");
  sendNUI('notify-position',"top-right");
});
$("#top-center").on("click", function (e) {
  postext("top-center");
  sendNUI('notify-position',"top-center");
});
$("#middle-left").on("click", function (e) {
  sendNUI('notify-position',"middle-left");
  postext("middle-left");
});
$("#middle-right").on("click", function (e) {
  sendNUI('notify-position',"middle-right");
  postext("middle-right");
});
$("#bottom-left").on("click", function (e) {
  sendNUI('notify-position',"bottom-left");
  postext("bottom-left");
});
$("#bottom-center").on("click", function (e) {
  sendNUI('notify-position',"bottom-center");
  postext("bottom-center");
});
$("#bottom-right").on("click", function (e) {
  sendNUI('notify-position',"bottom-right");
  postext("bottom-right");
});

function postext(data) {
  $("#position-text").replaceWith(
    `<h3 class = "text-center px-2 py-2" id="position-text" style = "text-transform: uppercase; border:1px solid white;border-radius:10px">${data}</h3>`
  );
}

document.addEventListener("keydown", (event) => {
  if (event.keyCode == 27 || event.keyCode === 36 || event.keyCode === 8) {
    $('.container-fluid').css("display", "none");
    $('body').css({"background-color":"transparent"});
    sendNUI('close');
  }
});

$('#quit').click(function () { 
  $('.container-fluid').css("display", "none");
  $('body').css({"background-color":"transparent"});
  sendNUI('close');
});

function sendNUI(event, data, cb = () => {}) {
	fetch(`https://${GetParentResourceName()}/${event}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json; charset=UTF-8', },
		body: JSON.stringify(data)
	}).then(resp => resp.json()).then(resp => cb(resp));
}
