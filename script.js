// alert("Click on language pills to open different tabs.");
var htmlTA;
var cssTA;
var jsTA;
window.onload = function () {
  htmlTA = ace.edit("htmlTA");
  htmlTA.setTheme("ace/theme/nord_dark");
  htmlTA.getSession().setMode("ace/mode/html");
  htmlTA.setOptions({
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
  });
  htmlTA.setShowPrintMargin(false);
  htmlTA.session.setUseWrapMode(true);
  htmlTA.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
  `, [])

  cssTA = ace.edit("cssTA");
  cssTA.setTheme("ace/theme/nord_dark");
  cssTA.getSession().setMode("ace/mode/css");
  cssTA.setOptions({
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
  });
  cssTA.setShowPrintMargin(false);
  cssTA.session.setUseWrapMode(true);
  cssTA.setValue(`body{

  }
  `, [])

  jsTA = ace.edit("jsTA");
  jsTA.setTheme("ace/theme/nord_dark");
  jsTA.getSession().setMode("ace/mode/javascript");
  jsTA.setOptions({
    autoScrollEditorIntoView: true,
    copyWithEmptySelection: true,
  });
  jsTA.setShowPrintMargin(false);
  jsTA.session.setUseWrapMode(true);
  jsTA.setValue(`//javascript goes here
  `, [])

  $(".toggle-btn").click(function () {
    setTimeout(() => {
      htmlTA.resize();
      cssTA.resize();
      jsTA.resize();
    }, 100)
    $(this).toggleClass("active");
    if ($(this).attr("id") == "output") {
      $("#outputDiv").toggle();
      $("#output-txt").toggle();
    } else {
      if (window.innerWidth < 500) {
        document.getElementById("htmlTA").style.display = "none";
        document.getElementById("cssTA").style.display = "none";
        document.getElementById("jsTA").style.display = "none";
        // document.getElementById("outputDiv").style.display = "none";

        document.getElementById("html").classList.remove("active");
        document.getElementById("css").classList.remove("active");
        document.getElementById("js").classList.remove("active");
        document.getElementById($(this).attr("id")).classList.add("active");
        document.getElementById($(this).attr("id") + "TA").style.display = "block";
      }
      else
        $("#" + $(this).attr("id") + "TA").toggle();
    }

  });

  $("#runBtn").click(function () {
    var addCode =
      "<style type='text/css'>" +
      cssTA.getValue() +
      "</style><body>" +
      htmlTA.getValue() +
      "</body>";
    console.log(addCode);
    $("iframe").contents().find("html").html(addCode);
    document.getElementById("outputDiv").contentWindow.eval(jsTA.getValue());
  });

  let isDark = true;
  $(".theme-toggle").click(function () {
    if (isDark) {
      htmlTA.setTheme("ace/theme/textmate");
      cssTA.setTheme("ace/theme/textmate");
      jsTA.setTheme("ace/theme/textmate");
      $(".theme-toggle").html("brightness_5");
    }
    else {
      htmlTA.setTheme("ace/theme/nord_dark");
      cssTA.setTheme("ace/theme/nord_dark");
      jsTA.setTheme("ace/theme/nord_dark");
      $(".theme-toggle").html("brightness_4");
    }
    isDark = !isDark;
  })

  if ($("#htmlTA").is(":visible")) {
    $("#html").addClass("active");
  }
}
