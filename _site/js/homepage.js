!(function(){
    
    
    $(window).load(function(){
        var params = {
        //contentItems: $('#content-items'),
        contentWidth: $(window).width(),
        contentHeight: 500,//$(window).height(),
        }
                    
        var Settings = function(){
            this.title = 'Animation Transform';
            this.count = 120;
            this.speed = 0.8;
                        
            this.changeSpeed = function(value){
                console.log(value);
            }
        }
                    
        function buildElement(){
            var elem = $('<div>'),
                whRand = randomIntFromInterval(2, 7);
                        
                        
            elem.addClass('item-animation')
            .width(whRand)
            .height(whRand)
            .css({
                    top:  randomIntFromInterval(0, params.contentHeight),
                    left: randomIntFromInterval(0, params.contentWidth),
                    opacity: randomIntFromInterval(0,1),
                })
            return elem;
        }
                    
        function randomIntFromInterval(min,max) {
            highlightedNumber = Math.random() * (max - min) + min;
            return highlightedNumber;
        };
                    
        function animation(elem){
            setInterval(function(){
                var x_rand = randomIntFromInterval(0,10);//Math.floor((Math.random()*180)+1); 
                var y_rand = randomIntFromInterval(0,10);//Math.floor((Math.random()*180)+1); 
                var z_rand = randomIntFromInterval(0,10);//Math.floor((Math.random()*90)+1);
                var arr_ct = ['','-','+'];
                var num_ct = arr_ct[Math.floor(Math.random()*arr_ct.length)];
                            
                            
                            
                elem.css({  
                    "transform": "scale("+randomIntFromInterval(0,1)+") translate3d("+num_ct+x_rand+"px,"+num_ct+y_rand+"px,"+0+"px)",
                    "-webkit-transform": "scale("+randomIntFromInterval(0,1)+") translate3d("+num_ct+x_rand+"px,"+num_ct+y_rand+"px,"+0+"px)",
                })
            },randomIntFromInterval(800,1100))
        }
                    
        function init(){
            var settings = new Settings();
                            /*gui = new dat.GUI();
                        gui.add(settings, 'title');
                        gui.add(settings, 'count');
                        gui.add(settings, 'speed', -5, 5).onChange( settings.changeSpeed );*/
                        
            
            $('.dot-annimation').each(function(){
                var thisEl = $(this);
                for( var i = 1; i <= settings.count; i++ ){
                    var elem = buildElement();
                    new animation(elem);
                    thisEl.append(elem);
                    
                    // parallax
                    

                }
            })
        }
        init();
    })
})(jQuery)