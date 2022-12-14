
            $(document).ready(function () {
              var ToC =
                "<nav style='display: inline-block;background: #eff5f9;border: 1px solid #9cd5f4;border-radius: 4px;/*! width: 52%; */padding: 1.5%;margin-bottom: 10px;font-size: 14px;' role='navigation' id='table_of_contents' class='table-of-contents'>" +
                "<p style='position: relative;display: block;overflow: hidden;text-align: center;cursor: pointer;font-weight: bold;margin-bottom: 0;color: #333;'>Mục lục bài viết</p>" +
                "<ul id='nav_ul' >";
        
              var newLine, el, title, link;
        
              $(".postContent h2").each(function () {
        
                el = $(this);
                title = el.text();
                link = "#" + el.attr("id");
        
                newLine =
                  "<li>" +
                  "<a href='" + link + "'>" +
                  title +
                  "</a>" +
                  "</li>";
        
                ToC += newLine;
        
              });
        
              ToC +=
                "</ul>" +
                "</nav>";
        
              $(".postContent").prepend(ToC);
            });
            
             $(document).ready(function(){

$("input[type='radio']").click(function(){
var sim = $("input[type='radio']:checked").val();
//alert(sim);
if (sim<3) { $('.myratings').css('color','red'); $(".myratings").text(sim); }else{ $('.myratings').css('color','green'); $(".myratings").text(sim); } }); });
            
            
            