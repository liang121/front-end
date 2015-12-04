
    function tileItems(theCaption,theHomeUrl,theId, theDisplay){
        this.caption = theCaption;
        this.homeUrl=theHomeUrl;
        this.id=theId;
        this.display=theDisplay;
       }
       var tilesArray=[];
        $(document).ready(function(){
            $("#tool").click(function(){      //click image "tool", first page will transition in 1000ms 
                $("#first_page").animate({opacity:'0'},1000);                         
                setTimeout(myfunction, 1000) //after 1000ms, the second page will process to display  
                function myfunction(){
                    $("#first_page").css("display","none");
                    $("#second_page").css({"display":"block","opacity":"0"});
                    $("#second_page").animate({opacity:'1'},1000);
                }
            }); 

            /* apply ajax to extract the data from json files */ 

            $.ajax({  
                type:"Get",
                url:"tiles.json",
                dataType:"json",
                success: function(data){
                    var index=0;

                    /*push the correct object in the array and append them 
                    in the content area*/ 

                    for(index;index<data.Tiles.length;index++){  
                        var item = data.Tiles[index];
                        if(item.SubCategory!==undefined&&item.TileProperties.HomeTileStatus==true
                            &&item.TileProperties.Dimensions.Width==1){
                            var pic=item.TileProperties.HomeURL;
                            var caption=item.Caption;
                            var tile=new tileItems(item.Caption,item.TileProperties.HomeURL,item.Id,true)
                            tilesArray.push(tile);
                            $("#content").append(
                                '<div class="pic_div col-3 col-m-6 col-s-12" style="background-image:url('+pic+');"><span style="color:white;position:absolute;left:20px">'
                                +caption+'</span></div>')
                        } 
                    }
                    /*append the tiles' caption in the sortable area, give each check image the same id 
                    with tile's, when the check image is clicked, operatie the tile object*/

                    for(index=0;index<tilesArray.length;index++){
                       $("#sortable").append(
                        '<div><img src="images/icons/check.png" class="check" id="'
                        +tilesArray[index].id+'"><span style="position:absolute; left:80px;padding-top:10px;">'
                        +tilesArray[index].caption
                        +'</span><img src="images/icons/stack.png" class="able" style=""><hr><br></div>')  
                    }
                    /*the mouse click the stack image, make the area sortable,
                      release the mouse,make the sortable disable*/

                    $(".able").mousedown(function(){
                            $("#sortable").sortable();
                            $("#sortable").sortable("enable");
                         });
                    $(".able").mouseup(function(){
                            $("#sortable").sortable("disable");
                        });
                    var oldIndex;
                    var newIndex;
                    var tempSel;
                    var tempRep;
                    var temp;

                    /*click the mouse, get the selected items index
                      release the mouse, get the replaced place index*/

                    $("#sortable").sortable({
                        disabled: true,
                        start: function(event, ui) {
                            oldIndex = ui.item.index();
                            tempSel = tilesArray[oldIndex];
                        },
                        stop: function(event, ui){
                            newIndex = ui.item.index();
                            tempRep = tilesArray[newIndex];
                            
                            /*process the objects' array to get the new arry with right order*/

                            if(newIndex>oldIndex){
                                tilesArray.splice(newIndex+1, 0,tempSel );
                                tilesArray.splice(oldIndex,1);
                            }
                            else{
                                tilesArray.splice(newIndex, 0,tempSel );
                                tilesArray.splice(oldIndex+1,1);
                            }
                            
                        }

                    })
                    var str;
                    var picId;
                    $(".check").click(function(){
                         str= $(this).attr('src');
                         picId=$(this).attr('id');

                         /*click the check image, replace the image to the empty one and vice versa, change the 
                         selected items' display property based on id */
                        if(str=="images/icons/check.png"){
                            $(this).attr('src','images/icons/empty.png');
                            index=0;
                            for(index;index<tilesArray.length;index++){
                                if(picId==tilesArray[index].id){
                                    tilesArray[index].display=false;
                                    break;
                                }
                            }
                        }
                        else if(str=="images/icons/empty.png") {
                            $(this).attr('src','images/icons/check.png');
                            index=0;
                            for(index;index<tilesArray.length;index++){
                                if(picId==tilesArray[index].id){
                                    tilesArray[index].display=true;
                                    break;
                                }
                            }              
                        }
                        
                    });
                }
            })


            /*click done button to iterate the new array, hide the content area and list
             the new array's item there again. hide second page and show the first page*/
            $("#done").click(function(){
                $("#second_page").animate({opacity:'0'},1000);
                setTimeout(myfunction, 1000)
                function myfunction(){
                    $("#second_page").css("display","none");
                    $("#first_page").css({"display":"block","opacity":"0"});
                    $("#first_page").animate({opacity:'1'},1000);
                }
                $("#content").empty();
                for(index=0;index<tilesArray.length;index++){
                    if(tilesArray[index].display==true){
                        $("#content").append(
                            '<div class="pic_div col-3 col-m-6 col-s-12" style="background-image:url('+tilesArray[index].homeUrl
                                +');"><span style="color:white;position:absolute;left:20px">'+tilesArray[index].caption+'</span><img src="cp.jpg" style="width:100%;visibility:hidden"></div>') 
                    }
                }

            });
        }) 
