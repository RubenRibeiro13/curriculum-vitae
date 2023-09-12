/* Set current year */

$(".current-year").text(new Date().getFullYear());

/* Set position of dates */

const descriptionsHeadings = $(".descriptions-container h3");
const descriptionsHeadingsHeight = descriptionsHeadings.height() + parseFloat(descriptionsHeadings.css("margin-bottom"));
const descriptionsGap = parseFloat($(".column-flexbox").css("gap"));

let educationDatesPositions = [];

educationDatesPositions[0] = descriptionsHeadingsHeight;
$(".education-date").eq(0).css("top", educationDatesPositions[0]);

/* for (let i = 1; i < $(".education-date").length; i++) {
  const previousDescriptionHeight = $(".education-description").eq(i - 1).innerHeight();
  const currentDescriptionPadding = parseFloat($(".education-description").eq(i).css("padding-top"));

  educationDatesPositions[i] = educationDatesPositions[i - 1] + previousDescriptionHeight + currentDescriptionPadding;
  $(".education-date").eq(i).css("top", educationDatesPositions[i]);
} */

for (let i = 1; i < $(".education-date").length; i++) {
  const previousDescriptionHeight = $(".education-description").eq(i - 1).height();

  educationDatesPositions[i] = educationDatesPositions[i - 1] + previousDescriptionHeight + descriptionsGap;
  $(".education-date").eq(i).css("top", educationDatesPositions[i]);
}

const bottomEduDatePosition = educationDatesPositions[educationDatesPositions.length - 1];
/* const bottomEduDescriptionPadding = parseFloat($(".education-description.bottom-description").css("padding-top")); */
/* const bottomEduDescriptionHeight = $(".education-description.bottom-description").innerHeight(); */
const bottomEduDescriptionHeight = $(".education-description").eq($(".education-date").length - 1).height();
const hrHeight = parseFloat($("hr").css("margin-top")) + $("hr").outerHeight() + parseFloat($("hr").css("margin-bottom"));

let workDatesPositions = [];

workDatesPositions[0] = bottomEduDatePosition + bottomEduDescriptionHeight + hrHeight + descriptionsHeadingsHeight;
$(".work-date").eq(0).css("top", workDatesPositions[0]);

for (let i = 1; i < $(".work-date").length; i++) {
  const previousDescriptionHeight = $(".work-description").eq(i - 1).height();

  workDatesPositions[i] = workDatesPositions[i - 1] + previousDescriptionHeight + descriptionsGap;
  $(".work-date").eq(i).css("top", workDatesPositions[i]);
}

/* Resize window */

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
