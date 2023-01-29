$(".current-year").text(new Date().getFullYear());



const descriptionsHeadings = $(".descriptions-container h3");
const descriptionsHeadingsHeight = descriptionsHeadings.height() + parseFloat(descriptionsHeadings.css("margin-bottom"));

let educationDatesPositions = [];

educationDatesPositions[0] = descriptionsHeadingsHeight;
$(".education-date").eq(0).css("top", educationDatesPositions[0]);

for (let i = 1; i < $(".education-date").length; i++) {
  const previousDescriptionHeight = $(".education-description").eq(i - 1).innerHeight();
  const currentDescriptionPadding = parseFloat($(".education-description").eq(i).css("padding-top"));

  educationDatesPositions[i] = educationDatesPositions[i - 1] + previousDescriptionHeight + currentDescriptionPadding;
  $(".education-date").eq(i).css("top", educationDatesPositions[i]);
}

const bottomEduDatePosition = educationDatesPositions[educationDatesPositions.length - 1];
const bottomEduDescriptionPadding = parseFloat($(".education-description.bottom-description").css("padding-top"));
const bottomEduDescriptionHeight = $(".education-description.bottom-description").innerHeight();
const hrHeight = parseFloat($("hr").css("margin-top")) + $("hr").outerHeight() + parseFloat($("hr").css("margin-bottom"));

let workDatesPositions = [];

workDatesPositions[0] = bottomEduDatePosition - bottomEduDescriptionPadding + bottomEduDescriptionHeight + hrHeight + descriptionsHeadingsHeight;
$(".work-date").eq(0).css("top", workDatesPositions[0]);

for (let i = 1; i < $(".work-date").length; i++) {
  const previousDescriptionHeight = $(".work-description").eq(i - 1).innerHeight();
  const currentDescriptionPadding = parseFloat($(".work-description").eq(i).css("padding-top"));

  workDatesPositions[i] = workDatesPositions[i - 1] + previousDescriptionHeight + currentDescriptionPadding;
  $(".work-date").eq(i).css("top", workDatesPositions[i]);
}



if (window.innerWidth <= 832) {
  setTimeout(function() {
    location.reload();
  });
}

$(window).resize(function() {
  if (window.innerWidth <= 832) {
    setTimeout(function() {
      location.reload();
    });
  }
});
