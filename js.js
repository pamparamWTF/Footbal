$(function (){
    $( '.window' )
        .resizable({
        minHeight: 750,
        minWidth: 600
    })
        .draggable({
            handle: '.panel',
            containment: 'body',
            opacity: 0.3
        });
    $( '.football-icon' )
        .draggable({
        grid: [ 80, 100 ],
        containment: 'body',
        opacity: 0.35
    })
        .on( 'dblclick', function(){
            $( '.window' ).fadeIn(100);
        });
    $ ( '.btn-close' ).on( 'click', function(){
        $( '.window' ).fadeOut(100);
        location.reload();
    });
    var fullScreen = false;
    $ ( '.btn-max' ).on( 'click', function(){
        if (!fullScreen) {
            fullScreen = true;
            $( '.window' )
                .css({
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: 'calc( 100vh - 32px)',
                    borderRadius: 0,
                    transition: 'width, height .01s linear 0s'
            })
                .resizable( 'disable' )
                .draggable( 'disable' );
        } else {
            fullScreen = false;
            $( '.window' )
                .css({
                    top: 0,
                    left: 0,
                    width: '600px',
                    height: '750px',
                    borderRadius: '8px',
                    transition: 'width, height .01s linear 0s'
                })
                .resizable( 'enable' )
                .draggable( 'enable' );
        }
    });
    $( '#start-btn' ).on( 'click', function(){
        $( '.ball' ).animate( { top: '600px' }, 1000 );
        $( '.man' ).delay(1000).animate( { left: '0' }, 200 );
        if ( $( '.power' ).height() >= 180 ) {
            $( '.ball' ).css( { left: function(){ return $( '.ball-box' ).width() - 150 + 'px'; } })
                .css({ transition: 'left 1s linear 1.2s' });
            setTimeout( function () { $( '#goal' ).text( 'ГООООЛ!!!!' ); }, 2200 );
        } else {
            $( '.ball' )
                .css( { 'left': function(){ return ( $( '.ball-box' ).width() - 350 ) * $( '.power' ).height() / 180 + 100 + 'px'; } })
                .css({ transition: 'left 1s linear 1.2s' });
            setTimeout( function () { $( '#goal' ).text( 'ПРОМАЗАЛ!!!!' ); }, 2200 );
        }
        setTimeout( function() {
            $( '#start-btn' ).text('RESTART').on('click', function () { location.reload(); })
        }, 2200 )
    })
});