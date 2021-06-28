var canvas = new fabric.canvas ('myCanvas');
player_x = 10;
Player_y = 10;
block_image_width = 30;
block_image_height - 30;
var player_object = "";
var block_imge_object = "";

function player_update() 
{
    fabric.image.fromURL ("player.png", function(img) 
    {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:Player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) 
{
    fabric.image.fromURL (get_image, function(img) {
        block_imge_object = img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:Player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}