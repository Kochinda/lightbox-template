$(function() {
    // 画像がクリックされたら、div#overを.containerに追加
  
    // 画像がクリックされたら
    $('.picture').click(function() {
      // let div = $('<div>');
      // div.attr('id', 'over');
      // .containerの小要素にdiv#overを追加する
    //   $('.container').append($('<div id="over">'));
      $('<div id="over">').appendTo($('.container')).hide().fadeIn();

    //   DIV#OVER に画像と✖マークを追加する

        $('#over').append($('<div class="img-box">'));
        $('.img-box').append($('<span class="close">&times;</span>'));
    
        $('.img-box').append($('<img class="lightbox" >'));

    // クリックされた画像のSRCを取得する
        let imageSrc = $(this).attr('src');

    // 作成した、class="lightbox"のsrcにクリックされた画像のsrcを設定して、表示する

        $('.lightbox').attr('src', imageSrc);

    // ✖ボタンがクリックされたら画像を閉じる
        $('.close').click(function(){
            $('#over').fadeOut(function(){
             $('#over').remove();

        });
    });

    });
  });


//   ふわっとけす
// .closeがクリックされたら、lightboxを消す
// $('.close').click(function() {

//     $('.img-box').fadeOut('slow', function() {
//       $('#over').fadeOut('fast', function() {
//         $('#over').remove();
//       })
//     })
//   })