$(document).ready(() => {
  $("form").on("submit", () => {
    const item = $("form input");
    const todo = { item: item.val() };

    $.ajax({
      type: "POST",
      url: "/",
      data: todo,
      success(data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });

    return false;
  });

  $("li").on("click", function () {
    const item = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: "DELETE",
      url: `/${item}`,
      success(data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });
  });
});
