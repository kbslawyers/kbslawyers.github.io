/** A function to scroll to the specified id. **/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});

$(window).scroll(function(){
    var st = $(this).scrollTop();
    if(st == 0) {
        $('#navigationbar').fadeout(400, 0);
    } else {
      $('#navigationbar').fadeIn();
    }
});

$("#english").click(function() {
  setCookie("language", "EN", 365);

  updateDocument();
});

$("#korean").click(function() {
  setCookie("language", "KOR", 365);

  updateDocument();
});

$(document).ready(function() {
    updateDocument();
});

function updateDocument() {
  var language = getCookie("language");

  if (language == "KOR") {
    $("#text-jumbo").text("저희는 고객의 법적인 문제를 담당합니다.");
    $("#text-about-us").text("저희는 오클랜드시의 동부 파쿠랑가 지역에 위치하고 있습니다.");
    $("#text-our-services").text("저희가 취급하는 업무는 상거래법, 재산법, 가족법, 이민법, 민사 소송과 " +
      "형사 소송, 신탁법과 상속법을 포함합니다. 어떤 업무든 문의하시면 안내해 드리겠습니다.");
    $("#text-terms-of-engagement").text("법률서비스 계약의 주요 내용을 보시려면 아래를 클릭하십시오.");
    $("#text-the-team").html("강 보순 변호사는 상거래법, 재산법, 가족법, 이민법, 민사 소송과 형사 소송," + 
      "신탁법과 상속법 관련업무를 주로 담당합니다. 적정한 수임료로 최고의 법률서비스를 제공하는 것을 원칙으로 합니다." +
      "단순히 해당 법률문제만 다루는 것이 아니라 고객의 전체적인 법적 상황을 함께 고려합니다. <br><br>강 보순 변호사는 " +
      "1993년에 뉴질랜드에 이민을 왔는데 이민 오기 전에는 한국거래소(이전 한국증권거래소)에서 6년 여 근무하였습니다." +  
      "1998년 5월에 변호사 자격을 취득하였습니다. 2005년 9월 현재의 상호로 법률서비스 업무를 시작하기 전에는, " +  
      "오클랜드시 소재 켈리 플라블이라는 로펌에서 3년 반 경험을 쌓았으며 서울의 장용식 특허사무소에서 근무하였습니다." + 
      "국립 서울대 대학원에서 회사법을 전공하여 석사학위를 받았으며, 호주 머독대학 로스쿨에서 호주 연방헌법을 " +  
      "공부하였습니다. <br><br>강 보순 변호사는 파쿠랑가 도서관 옆에 위치한 시티즌스 어드바이스 뷰로에서 진행하는 무료 " + 
      "법률상담의 자원봉사 일을 2007년부터 해 오고 있습니다. 가족으로는 부인과 두 자녀가 있고 여가시간에는 산행과 " +
      "여행을 하며 멘토링에 관심이 높습니다.");
  } else {
    $("#text-jumbo").text("We take care of your legal needs.");
    $("#text-about-us").html("We are a law firm based in <b>Pakuranga, Auckland.</b>");
    $("#text-our-services").html("<b>We offer many legal services</b> which include " +
      "<span style=\"font-size:0.8em; color:#8e8e8e;\">(but are not limited to)</span>" +
      " the following list below. If you are unsure about something, feel free to <a href=\"#contact-us\">contact us</a> and we will help you out.");
    $("#text-terms-of-engagement").html("Here are our Terms of Engagement.");
    $("#text-the-team").html("Brent Kang is a general practitioner and his field of " +
      "practice covers commercial law, property law, family law, immigration, and civil " +
      "and criminal litigation. His policy is to provide top level professional legal " +
      "services at an affordable price and to this end he focused on looking after people " +
      "and not just the legal matter.<br><br>Brent moved to New Zealand in late 1993 and " +
      "was admitted as a barrister and solicitor of the High Court of New Zealand in May 1998. " +
      "He started legal practice under his own name as KBS Lawyers in September 2005. " +
      "Prior to this, Brent was a solicitor at Kelly Flavell Solicitors, Auckland for " +
      "three years and an assistant patent attorney at YS Chang & Associates (a patent " +
      "attorney office in Seoul, Korea). He is a graduate of the University of Auckland " +
      "Law School and Seoul National University Graduate School. He also studied Federal " +
      "Constitution Law at Murdoch University in Western Australia.<br></br>He provides free " +
      "legal services on Saturdays at the Citizens Advice Bureau, Pakuranga and has been on the " +
      "CAB’s roll of solicitors since 2007.<br><br>He has been married for 23 years with two " +
      "children currently at university. He worked at the Korea Stock Exchange " +
      "(now the KRX Korea Exchange) for over six years before he moved to New Zealand." +
      "<br><br>His interests include bush trekking, travelling and mentoring.");
  }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function setCookie(name, value, expiryDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expiryDays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

