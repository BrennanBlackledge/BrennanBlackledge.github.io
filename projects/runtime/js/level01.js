var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
        function createSawBlade (bladeHitZoneX, bladeHitZoneY) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = bladeHitZoneX;
        sawBladeHitZone.y = bladeHitZoneY;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap('img/sawblade.png');
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        };  
        createSawBlade(400, 125);
        createSawBlade(600, 175);
        createSawBlade(800, 200);
        createSawBlade(1000, 225);
        createSawBlade(1200, groundY + 500);
        createSawBlade(1400, groundY + 475);
        createSawBlade(1600, groundY + 500);
        createSawBlade(1800, groundY + 425);
        createSawBlade(2000, groundY + 425);
        createSawBlade(2200, groundY + 425);
        createSawBlade(2400, groundY + 425);
        createSawBlade(2600, groundY + 400);
        createSawBlade(2800, groundY + 425);
        createSawBlade(3000, groundY + 425); 
        createSawBlade(3200, groundY + 475); 
        createSawBlade(3400, groundY + 455); 


        function createMyObstacle(obstacleHitZoneX,obstacleHitZoneY) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        obstacleHitZone.x = obstacleHitZoneX;
        obstacleHitZone.y = obstacleHitZoneY;
        game.addGameItem(obstacleHitZone);
        var obstacleImage = draw.bitmap('img/obstacle.png');
        obstacleHitZone.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        };
        createMyObstacle(100,100);
        createMyObstacle(300, 25);
        createMyObstacle(500, 75);
        createMyObstacke(1000, groundY + 425); 


        var enemy = game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = 400;
        enemy.y = groundY-50;
        enemy.velocityX = -1;
        var rotationalVelocity = 10;
        game.addGameItem(enemy);
        enemy.onPlayerCollision = function() {
            game.changeIntegrity(-30);
        };  
        enemy.onProjectileCollision = function() {
            game.increaseScore(100);
            enemy.fadeOut();
        }
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
