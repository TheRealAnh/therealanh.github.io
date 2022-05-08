$(function() {
    var title = document.title,
      animSeq = ["|"],
        animIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[0];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function() {
  $(".typed").typed({
      strings: ["asian weeb", "a retarded vietnamese", 'ifone user', "oneui core bess rum", "i love anime", "i want to kill myself", "what's penis in vietnamese? copper!", "#NoDelay", "i beated YumiOS with more users", "neva gonna give you up", "al noman pro af bro", "a huge mf flameos servant", "cocks n' balls", "pansexual", "i like hot naked anime boys", "deku super stan", "i love al noman and marvel os", "ching chong ding dong", "im a Yumi", "kanging is my fetish", "you just wasted 4 mins reading these"],
      typeSpeed: 90,
      loop: true,
      cursorChar: "|",
  });
});
