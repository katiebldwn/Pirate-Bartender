$(document).ready(function() {
	var ingredients = [];
	var strongIngredients = ['Glug of rum', 'slug of whisky', 'splash of gin'];
	var weakIngredients = ['Sip of sprite', 'Infusion of sea spray', 'splash of water'];
	var saltyIngredients = ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'];
	var blandIngredients = ['Umbrella on a stick', 'slice of water chestnut', 'rasher of potatoes'];
	var bitterIngredients = ['Shake of bitters', 'splash of frog juice', 'twist of lemon peel'];
	var nonBitterIngredients = ['Splash of pineapple juice', 'three ice cubes', 'twist of nothing'];
	var sweetIngredients = ['Sugar cube', 'spoonful of honey', 'splash of cola'];
	var nonSweetIngredients = ['Pinch of arsenic', 'spoonful of tonic', 'handful of olives'];
	var fruityIngredients = ['Slice of orange', 'dash of cassis', 'cherry on top'];
	var nonFruityIngredients = ['Slice of ginger', 'dash of kelp', 'nachos on the side']
	var includedItems = [];
	$('.strongYes').click(function() {
		var random = Math.floor(Math.random()*3);
		ingredients.push(strongIngredients[random]);
		$('.strong').hide();
		$('.salty').show();
		$('.ingredients').append("<li>" +ingredients[0]+ "</li>");
		console.log(ingredients);
	})

	$('.strongNo').click(function() {
		var random = Math.floor(Math.random()*3);
		ingredients.push(weakIngredients[random]);
		$('.strong').hide();
		$('.salty').show();
		$('.ingredients').append("<li>" +ingredients[0]+ "</li>");
	})

	$('.saltyYes').click(function() {
		var random = Math.floor(Math.random()*3);
		ingredients.push(saltyIngredients[random]);
		$('.salty').hide();
		$('.bitter').show();
		$('.ingredients').append("<li>" +ingredients[1]+ "</li>");
	})

	$('.saltyNo').click(function() {
		var random = Math.floor(Math.random()*3);
		ingredients.push(blandIngredients[random]);
		$('.salty').hide();
		$('.bitter').show();
		$('.ingredients').append("<li>" +ingredients[1]+ "</li>");
	})

	$('.bitterYes').click(function() {
		var random = Math.floor(Math.random()*3);
		ingredients.push(bitterIngredients[random]);
		$('.bitter').hide();
		$('.sweet').show();
		$('.ingredients').append("<li>" +ingredients[2]+ "</li>");
	})

	$('.bitterNo').click(function() {
		var random = Math.floor(Math.random()*3);
		ingredients.push(nonBitterIngredients[random]);
		$('.bitter').hide();
		$('.sweet').show();
		$('.ingredients').append("<li>" +ingredients[2]+ "</li>");
	})

	$('.sweetYes').click(function() {
		var random = Math.floor(Math.random()*3);
		ingredients.push(sweetIngredients[random]);
		$('.sweet').hide();
		$('.fruity').show();
		$('.ingredients').append("<li>" +ingredients[3]+ "</li>");
	})

	$('.sweetNo').click(function() {
		var random = Math.floor(Math.random()*3);
		ingredients.push(nonSweetIngredients[random]);
		$('.sweet').hide();
		$('.fruity').show();
		$('.ingredients').append("<li>" +ingredients[3]+ "</li>");
	})

	$('.fruityYes').click(function() {
		var random = Math.floor(Math.random()*3);
		ingredients.push(fruityIngredients[random]);
		$('.fruity').hide();
		$('.ingredients').append("<li>" +ingredients[4]+ "</li>");
		$('.serve').fadeIn(createDrink);
	})

	$('.fruityNo').click(function() {
		var random = Math.floor(Math.random()*3);
		ingredients.push(nonFruityIngredients[random]);
		$('.fruity').hide();
		$('.ingredients').append("<li>" +ingredients[4]+ "</li>");
		$('.serve').fadeIn(createDrink);
	})

	var drinkNouns = ['Death', 'Scallywag', 'Lubber', 'Jade', 'Devil', 'Rabbit', 'Ghoul', 'Crow', 'Rascal', 'Davy Jones'];
    var drinkAdjectives = ['Wimpy', 'Murderous', 'Dirty', 'Dark', 'Drunk', 'Rascally', 'Sunken', 'Frightened', 'Raging', 'Unladen']


    //function to make the drink, and the name of the cocktail
    var createDrink = function(ingredients) {
        for (i = 0; i < includedItems.length; i++) {

            $('.serve').append('<p>' + includedItems[i] + '</p>')

        }

        var randomIndex = Math.floor(Math.random() * (9 - 1 + (1)));
        $('.serve').append('<h3>Enjoy Yer Cocktail, The ' + drinkAdjectives[randomIndex] + ' ' + drinkNouns[randomIndex] + '</h3>');
    }


})

